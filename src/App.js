import React from "react";
import { MapContainer, TileLayer, Polygon, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { saudiData } from "./data3";
import "./App.css";
import CustomMap from "./CustomMap";


const center = [23.713547526455798, 44.85715900050768];

const App = () => {
  return (
    <div className="container">
      <CustomMap />

      {/* <MapContainer
        center={center}
        zoom={5.4}
        style={{ height: "70vh", width: "99vw" }}
        scrollWheelZoom={false}
        touchZoom={false}
        doubleClickZoom={false}
        dragging={false}
        zoomControl={false}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        />

        {saudiData.features.map((state) => {
          const coordinates = state.geometry.coordinates[0].map((item) => [
            item[1],
            item[0],
          ]);
          return (

            <Polygon
              pathOptions={{
                fillColor: "#FD8D3C",
                color: "white",
                fillOpacity: 0.7,
                weight: 4,
                opacity: 1,
                dashArray: 3,
              }}
              positions={coordinates}
              eventHandlers={{
                mouseover: (e) => {
               
                  e.target
                    .bindPopup(state.properties.name_arabic, {
                      closeButton: false,
                      maxWidth: "320px",
                      minWidth: "320px",
                      className: "popup",

                      
                    })
                    .openPopup();
                  const layer = e.target;
                  layer.setStyle({
                    weight: 4,
                    color: "white",
                    dashArray: "",
                    fillOpacity: 0.7,
                    fillColor: "#FACDCC",
                   
                  });
                },
                mouseout: (e) => {
                  const layer = e.target;
                  layer.setStyle({
                    fillColor: "#FD8D3C",
                    color: "white",
                    fillOpacity: 0.7,
                    weight: 4,
                    opacity: 1,
                    dashArray: 3,
                  });
                },
              }}
            />
          );
        })}
      </MapContainer> */}
      

      </div>
  
  );
};

export default App;
