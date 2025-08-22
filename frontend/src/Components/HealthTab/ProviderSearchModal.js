import { useState } from "react";
import { modalStyles } from "./HealthConstants";

export const ProviderSearchModal = ({ isOpen, onClose }) => {
  const [searchParams, setSearchParams] = useState({
    location: "",
    specialty: "",
    name: "",
    insurancePlan: "",
  });
  const [providers, setProviders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const specialties = [
    { value: "", label: "All Specialties" },
    { value: "Family Medicine", label: "Family Medicine" },
    { value: "Internal Medicine", label: "Internal Medicine" },
    { value: "Pediatrics", label: "Pediatrics" },
    { value: "Obstetrics & Gynecology", label: "OB/GYN" },
    { value: "Dermatology", label: "Dermatology" },
    { value: "Cardiology", label: "Cardiology" },
    { value: "Psychiatry", label: "Psychiatry" },
    { value: "Orthopedic Surgery", label: "Orthopedic Surgery" },
    { value: "Emergency Medicine", label: "Emergency Medicine" },
    { value: "Radiology", label: "Radiology" },
    { value: "Anesthesiology", label: "Anesthesiology" },
    { value: "Oncology", label: "Oncology" },
    { value: "Neurology", label: "Neurology" },
  ];

  const handleInputChange = (e) => {
    setSearchParams({
      ...searchParams,
      [e.target.name]: e.target.value,
    });
  };

  const searchProviders = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setProviders([]);

    try {
      // Build query parameters for our backend API
      const params = new URLSearchParams();

      if (searchParams.location) {
        params.append("location", searchParams.location);
      }
      if (searchParams.specialty) {
        params.append("specialty", searchParams.specialty);
      }
      if (searchParams.name) {
        params.append("name", searchParams.name);
      }

      console.log("Making request to backend with params:", params.toString());

      // Call our backend API instead of NPPES directly
      const response = await fetch(
        `http://localhost:8000/api/providers/search?${params.toString()}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Backend API Response status:", response.status);

      if (!response.ok) {
        throw new Error(
          `Backend API returned ${response.status}: ${response.statusText}`
        );
      }

      const data = await response.json();
      console.log("Backend API Response data:", data);

      if (!data.success) {
        throw new Error(data.message || "Search failed");
      }

      if (!data.providers || data.providers.length === 0) {
        setError(
          "No providers found matching your search criteria. Try broadening your search."
        );
        setLoading(false);
        return;
      }

      // Transform backend response to match our UI format
      const transformedProviders = data.providers.map((provider) => ({
        uid: provider.npi,
        profile: {
          first_name: provider.name.first,
          last_name: provider.name.last,
          title: provider.name.credential,
          bio: `NPI: ${provider.npi}`,
        },
        specialties: provider.specialties.map((spec) => ({
          name: spec.name,
        })),
        practices: provider.practices.map((practice) => ({
          name: practice.name,
          visit_address: {
            street: practice.address.street,
            city: practice.address.city,
            state: practice.address.state,
            zip: practice.address.zip,
          },
          phones: practice.phone ? [{ number: practice.phone }] : [],
        })),
      }));

      console.log("Transformed providers:", transformedProviders);
      setProviders(transformedProviders);
      setLoading(false);
    } catch (err) {
      console.error("Search error details:", err);

      // Check if it's a network error (backend not running)
      if (
        err.message.includes("fetch") ||
        err.message.includes("Failed to fetch")
      ) {
        setError(
          "Cannot connect to server. Make sure your backend is running on port 8000."
        );
      } else {
        setError(
          `Search failed: ${err.message}. Please try different search criteria.`
        );
      }
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div style={modalStyles.overlay} onClick={onClose}>
      <div style={modalStyles.modal} onClick={(e) => e.stopPropagation()}>
        <button
          style={modalStyles.closeButton}
          onClick={onClose}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#f3f4f6";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "transparent";
          }}
        >
          ✕
        </button>

        <h2 style={modalStyles.modalTitle}>Find Healthcare Providers</h2>

        <form style={modalStyles.searchForm} onSubmit={searchProviders}>
          <div style={modalStyles.inputGroup}>
            <label style={modalStyles.label}>
              Location (City, State or ZIP)
            </label>
            <input
              type="text"
              name="location"
              value={searchParams.location}
              onChange={handleInputChange}
              placeholder="e.g., Berkeley, CA or 94704 or San Francisco"
              style={modalStyles.input}
            />
          </div>

          <div style={modalStyles.inputGroup}>
            <label style={modalStyles.label}>Specialty</label>
            <select
              name="specialty"
              value={searchParams.specialty}
              onChange={handleInputChange}
              style={modalStyles.select}
            >
              {specialties.map((specialty) => (
                <option key={specialty.value} value={specialty.value}>
                  {specialty.label}
                </option>
              ))}
            </select>
          </div>

          <div style={modalStyles.inputGroup}>
            <label style={modalStyles.label}>Provider Name (optional)</label>
            <input
              type="text"
              name="name"
              value={searchParams.name}
              onChange={handleInputChange}
              placeholder="Doctor's first or last name"
              style={modalStyles.input}
            />
          </div>

          <button
            type="submit"
            style={modalStyles.searchButton}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#7c3aed";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#8b5cf6";
            }}
          >
            Search Providers
          </button>
        </form>

        {error && <div style={modalStyles.error}>{error}</div>}

        {loading && (
          <div style={modalStyles.loading}>
            <div>🔍 Searching for providers...</div>
          </div>
        )}

        {providers.length > 0 && (
          <div style={modalStyles.resultsContainer}>
            <h3 style={{ marginBottom: "1rem", color: "#1f2937" }}>
              Found {providers.length} providers
            </h3>
            {providers.map((provider) => (
              <div key={provider.uid} style={modalStyles.resultCard}>
                <div style={modalStyles.providerName}>
                  Dr. {provider.profile.first_name} {provider.profile.last_name}
                  , {provider.profile.title}
                </div>
                {provider.specialties.length > 0 && (
                  <div style={modalStyles.providerInfo}>
                    <strong>Specialty:</strong> {provider.specialties[0].name}
                  </div>
                )}
                {provider.practices.length > 0 && (
                  <>
                    <div style={modalStyles.providerInfo}>
                      <strong>Practice:</strong> {provider.practices[0].name}
                    </div>
                    <div style={modalStyles.providerInfo}>
                      <strong>Address:</strong>{" "}
                      {provider.practices[0].visit_address.street},{" "}
                      {provider.practices[0].visit_address.city},{" "}
                      {provider.practices[0].visit_address.state}{" "}
                      {provider.practices[0].visit_address.zip}
                    </div>
                    {provider.practices[0].phones.length > 0 && (
                      <div style={modalStyles.providerInfo}>
                        <strong>Phone:</strong>{" "}
                        {provider.practices[0].phones[0].number}
                      </div>
                    )}
                  </>
                )}
                {provider.profile.bio && (
                  <div
                    style={{ ...modalStyles.providerInfo, marginTop: "0.5rem" }}
                  >
                    {provider.profile.bio}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
