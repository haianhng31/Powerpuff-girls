import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder";

const TravelTab = () => {
  useEffect(() => {
    const bounds = L.latLngBounds(L.latLng(-85, -180), L.latLng(85, 180));

    const map = L.map("map", {
      maxBounds: bounds,
      maxBoundsViscosity: 1.0,
      minZoom: 2,                 
      maxZoom: 18,
      worldCopyJump: false,
    });

    map.fitWorld();

    // Detect browser language 
    const userLang = navigator.language || navigator.userLanguage;
    const langCode = (userLang.split("-")[0] || "en").toLowerCase();
    const supportedLangs = ["en", "fr", "es", "de", "ja", "ru", "zh"];
    const chosenLang = supportedLangs.includes(langCode) ? langCode : "en";
    const baseurl = process.env.REACT_APP_DEPLOY || "http://localhost:8000";


    const mapTiler = L.tileLayer(
      `https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=eq9HyAFej0r2JVPD4Iyi&language=${chosenLang}`,
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://www.maptiler.com/">MapTiler</a>',
        noWrap: true,
      }
    ).addTo(map);

    const terrain = L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenTopoMap contributors",
      noWrap: true,
    });

    const satellite = L.tileLayer(
      "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
      { attribution: "© Esri", noWrap: true }
    );

    L.control.layers({ Streets: mapTiler, Terrain: terrain, Satellite: satellite }).addTo(map);

    L.Control.geocoder({ defaultMarkGeocode: false })
      .on("markgeocode", (e) => {
        const bbox = e.geocode && e.geocode.bbox;
        if (bbox) {

          map.fitBounds(bbox, { padding: [50, 50], maxZoom: 6 });
        } else if (e.geocode && e.geocode.center) {

          map.setView(e.geocode.center, 8);
        }
      })
      .addTo(map);

    const greenPin = L.icon({
      iconUrl: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Map_pin_icon_green.svg",
      iconSize: [30, 40],
      iconAnchor: [15, 40],
      popupAnchor: [0, -40],
    });

    const orangePin = L.icon({
      iconUrl: "https://cdn-icons-png.flaticon.com/512/727/727606.png",
      iconSize: [30, 40],
      iconAnchor: [15, 40],
      popupAnchor: [0, -40],
    });

    const redPin = L.icon({
      iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
      iconSize: [30, 40],
      iconAnchor: [15, 40],
      popupAnchor: [0, -40],
    });


    const fetchLocations = async () => {
      try {
        const response = await fetch(baseurl+"/api/locations");
        const locations = await response.json();

        locations.forEach((loc) => {
          const icon =
            loc.status === "safe" ? greenPin :
            loc.status === "moderate" ? orangePin : redPin;

          L.marker([loc.coordinates.lat, loc.coordinates.lng], { icon })
            .addTo(map)
            .bindPopup(`<strong>${loc.name}</strong>`);
        });
      } catch (err) {
        console.error("Error fetching locations:", err);
      }
    };

    fetchLocations();

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div className="p-6 h-screen">
      <h1 className="text-3xl font-bold mb-6">Safety Map</h1>
      <div id="map" className="w-full h-[80vh] rounded-2xl shadow-lg z-0"></div>
    </div>
  );
};

export default TravelTab;
