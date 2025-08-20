import express from "express";

const router = express.Router();

// GET /api/providers/search
router.get("/search", async (req, res) => {
  try {
    const { location, specialty, name, limit = 20 } = req.query;

    // Build query parameters for NPPES API
    const params = new URLSearchParams({
      version: "2.1",
      limit: limit.toString(),
    });

    // Parse location for city and state
    if (location) {
      const locationParts = location.split(",");
      if (locationParts.length >= 2) {
        const city = locationParts[0].trim();
        const stateOrZip = locationParts[1].trim();

        // Check if it's a ZIP code (5 digits) or state
        if (/^\d{5}(-\d{4})?$/.test(stateOrZip)) {
          params.append("postal_code", stateOrZip.substring(0, 5));
        } else {
          params.append("city", city);
          params.append("state", stateOrZip);
        }
      } else if (/^\d{5}(-\d{4})?$/.test(location.trim())) {
        // Just a ZIP code
        params.append("postal_code", location.trim().substring(0, 5));
      } else {
        // Assume it's a city
        params.append("city", location);
      }
    }

    // Add specialty as taxonomy description
    if (specialty) {
      params.append("taxonomy_description", specialty);
    }

    // Add provider name
    if (name) {
      const nameParts = name.trim().split(" ");
      if (nameParts.length === 1) {
        // Could be first or last name
        params.append("first_name", nameParts[0]);
      } else {
        params.append("first_name", nameParts[0]);
        params.append("last_name", nameParts.slice(1).join(" "));
      }
    }

    // Only search individual providers (doctors)
    params.append("enumeration_type", "NPI-1");

    // Make request to NPPES API
    const response = await fetch(
      `https://npiregistry.cms.hhs.gov/api/?${params.toString()}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `NPPES API returned ${response.status}: ${response.statusText}`
      );
    }

    const data = await response.json();
    console.log(`NPPES API returned ${data.result_count} results`);

    if (!data.results || data.results.length === 0) {
      return res.json({
        success: true,
        count: 0,
        providers: [],
        message: "No providers found matching your search criteria.",
      });
    }

    // Transform NPPES data to a cleaner format
    const transformedProviders = data.results.map((provider) => ({
      npi: provider.number,
      name: {
        first: provider.basic?.first_name || "",
        last: provider.basic?.last_name || "",
        credential: provider.basic?.credential || "MD",
      },
      gender: provider.basic?.gender || "",
      specialties:
        provider.taxonomies?.map((tax) => ({
          name: tax.desc || "General Practice",
          code: tax.code,
          primary: tax.primary,
        })) || [],
      addresses:
        provider.addresses?.map((addr) => ({
          purpose: addr.address_purpose,
          address1: addr.address_1,
          address2: addr.address_2,
          city: addr.city,
          state: addr.state,
          postal_code: addr.postal_code,
          country_code: addr.country_code,
          telephone: addr.telephone_number,
          fax: addr.fax_number,
        })) || [],
      // Get practice locations specifically
      practices:
        provider.addresses
          ?.filter((addr) => addr.address_purpose === "LOCATION")
          .map((addr) => ({
            name:
              provider.basic?.organization_name ||
              `${provider.basic?.first_name} ${provider.basic?.last_name} Practice`,
            address: {
              street: `${addr.address_1} ${addr.address_2 || ""}`.trim(),
              city: addr.city,
              state: addr.state,
              zip: addr.postal_code,
            },
            phone: addr.telephone_number || null,
            fax: addr.fax_number || null,
          })) || [],
    }));

    res.json({
      success: true,
      count: transformedProviders.length,
      total_results: data.result_count,
      providers: transformedProviders,
    });
  } catch (error) {
    console.error("Provider search error:", error);
    res.status(500).json({
      success: false,
      error: "Failed to search providers",
      message: error.message,
    });
  }
});

export default router;
