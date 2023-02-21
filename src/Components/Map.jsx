import React from "react";
import Leaflet from "leaflet";
import {
  MapContainer,
  TileLayer,
  Popup,
  Marker,
  Polyline,
} from "react-leaflet";
import "./leaflet.css";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { mapData } from "./map-helper";

let DefaultIcon = Leaflet.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [24, 36],
  iconAnchor: [12, 36],
});

Leaflet.Marker.prototype.options.icon = DefaultIcon;

const Map = () => {
  //JOURNEY START AND JOURNEY END
  // let journeyStart = [51.505, -0.09];
  // let journeyEnd = [45.505, -0.09];
  const index = 2;
  let journeyStart = mapData[index].journeyStart;
  let journeyEnd = mapData[index].journeyEnd;

  // POLYLINE BETTWEEN END AND START
  const positions = [journeyStart, journeyEnd];

  const pathOptions = {
    color: "blue",
    fillColor: "blue",
    weight: 3,
    opacity: 1,
    fillOpacity: 1,
    smoothFactor: 100,
  };

  return (
    <MapContainer
      center={journeyStart}
      zoom={2}
      scrollWheelZoom={false}
      className="map-container"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Satellite View mapping */}

      {/* <TileLayer
        attribution='&copy; <a href="https://www.google.com/maps">Google Maps</a>'
        url="https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
        maxZoom={20}
      /> */}

      <Marker position={journeyStart}>
        <Popup>
          Journey start <br />
        </Popup>
      </Marker>

      <Marker position={journeyEnd}>
        <Popup>
          Journey end <br />
        </Popup>
      </Marker>

      <Polyline positions={positions} pathOptions={pathOptions} />
    </MapContainer>
  );
};

export default Map;
