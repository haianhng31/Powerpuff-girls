import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder";

const TravelTab = () => {
  useEffect(() => {
    const bounds = L.latLngBounds(
      L.latLng(-85, -180),
      L.latLng(85, 180)
    );

    const map = L.map("map", {
      maxBounds: bounds,
      maxBoundsViscosity: 1.0, 
      minZoom: 3,
      maxZoom: 18,
      worldCopyJump: false, 
    }).setView([40.758, -73.9855], 12);

    const streets = L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        attribution: "© OpenStreetMap contributors",
        noWrap: true,
      }
    );

    const terrain = L.tileLayer(
      "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
      {
        attribution: "© OpenTopoMap contributors",
        noWrap: true,
      }
    );

    const satellite = L.tileLayer(
      "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
      {
        attribution: "© Esri",
        noWrap: true,
      }
    );

    streets.addTo(map);

    L.control
      .layers(
        {
          Streets: streets,
          Terrain: terrain,
          Satellite: satellite,
        },
        {}
      )
      .addTo(map);

    L.Control.geocoder({
      defaultMarkGeocode: true,
    }).addTo(map);

    const redPin = L.icon({
      iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
      iconSize: [30, 40],
      iconAnchor: [15, 45],
      popupAnchor: [0, -40],
    });

    const locations = [
      { lat: 40.7580, lng: -73.9855, popup: "Times Square" },
      { lat: 40.73061, lng: -73.935242, popup: "Brooklyn" },
      { lat: 40.7128, lng: -74.0060, popup: "Lower Manhattan" },
    ];

    locations.forEach(({ lat, lng, popup }) => {
      L.marker([lat, lng], { icon: redPin })
        .addTo(map)
        .bindTooltip(popup, {
          permanent: true,
          direction: "right",
          offset: [10, 0],
          className: "custom-tooltip",
        });
    });

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div className="p-6 h-screen">
      <h1 className="text-3xl font-bold mb-6">Safety Map</h1>
      <div
        id="map"
        className="w-full h-[80vh] rounded-2xl shadow-lg z-0"
      ></div>
    </div>
  );
};

export default TravelTab;
