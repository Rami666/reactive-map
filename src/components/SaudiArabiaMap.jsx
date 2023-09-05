import React from "react";
// eslint-disable-next-line
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Button, Modal } from "react-bootstrap";

const SaudiArabiaMap = () => {
  // Define your city data with coordinates and popup content
  const cities = [
    {
      name: "Riyadh",
      coordinates: [24.7136, 46.6753],
      popupContent: "Welcome to Riyadh!",
    },
    // Add more cities here
    {
      name: "Jeddah",
      coordinates: [21.4858, 39.1925],
      popupContent: "Welcome to Jeddah!",
    },
    {
      name: "Dammam",
      coordinates: [26.3927, 49.9777],
      popupContent: "Welcome to Dammam!",
    },
    {
      name: "Makkah",
      coordinates: [21.3891, 39.8579],
      popupContent: "Welcome to Makkah!",
    },
    {
      name: "Medina",
      coordinates: [24.5247, 39.5692],
      popupContent: "Welcome to Medina!",
    },
    {
      name: "Taif",
      coordinates: [21.2703, 40.4158],
      popupContent: "Welcome to Taif!",
    },
    {
      name: "Tabuk",
      coordinates: [28.3835, 36.5662],
      popupContent: "Welcome to Tabuk!",
    },
  ];

  const [selectedCity, setSelectedCity] = React.useState(null);

  return (
    <div>
      <Map
        center={[24.7136, 46.6753]}
        zoom={6}
        style={{ height: "500px", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {cities.map((city, index) => (
          <Marker
            key={index}
            position={city.coordinates}
            onMouseOver={() => setSelectedCity(city)}
            onMouseOut={() => setSelectedCity(null)}
          >
            {selectedCity === city && (
              <Popup>
                <p>{city.popupContent}</p>
              </Popup>
            )}
          </Marker>
        ))}
      </Map>
    </div>
  );
};

export default SaudiArabiaMap;
