import React from "react";
import Leaflet from "leaflet";
import { MapContainer, TileLayer, useMap, Popup, Marker } from "react-leaflet";
import "../Components/leaflet.css";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = Leaflet.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [24, 36],
  iconAnchor: [12, 36],
});

Leaflet.Marker.prototype.options.icon = DefaultIcon;

const Map = () => {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          Start Point <br />
        </Popup>
      </Marker>

      <Marker position={[45.505, -0.09]}>
        <Popup>
          End Point <br />
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
