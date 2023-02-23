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

let DefaultIcon = Leaflet.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [24, 36],
  iconAnchor: [12, 36],
});
// created an on change, passed to flight search and then passed to map
Leaflet.Marker.prototype.options.icon = DefaultIcon;

const Map = ({ departValue, destinationValue }) => {
  //JOURNEY START AND JOURNEY END
  console.log(departValue);
  let journeyStart = departValue;
  let journeyEnd = destinationValue;

  // POLYLINE BETWEEN END AND START
  const positions = [journeyStart, journeyEnd];

  const pathOptions = {
    // color: "blue",   moved to css file
    // fillColor: "blue", moved to css file
    weight: 5,
    opacity: 1,
    fillOpacity: 1,
    smoothFactor: 100,
    dashArray: "10 8",
    className: "polyline",
  };

  const mapCentre = [
    (journeyStart[0] + journeyEnd[0]) / 2,
    (journeyStart[1] + journeyEnd[1]) / 2,
  ];

  return (
    <MapContainer
      center={mapCentre}
      zoom={2}
      scrollWheelZoom={false}
      className="map-container"
    >
      {/* <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      /> */}

      {/* CARTO GREY VARIANT */}

      <TileLayer
        attribution='&copy; <a href="https://carto.com/attribution/">Carto</a> | &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />

      {/* WIKIMEDIA MAP VARIANT */}
      {/* <TileLayer
        attribution='&copy; <a href="https://wikimediafoundation.org/wiki/Maps_Terms_of_Use">Wikimedia</a>'
        url="https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}{r}.png"
         /> */}

      {/* CARTO MAP VARIANT */}
      {/* <TileLayer
        attribution='&copy; <a href="https://carto.com/attribution/">CartoDB</a>'
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
      /> */}

      {/* STAMEN MAP VARIANT */}
      {/* <TileLayer
        attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.'
        url="https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.png"
      /> */}

      {/* SAT MAP VARIANT */}
      {/* <TileLayer
        attribution='&copy; <a href="https://www.google.com/maps">Google Maps</a>'
        url="https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
        maxZoom={20}
      /> */}

      <Marker position={journeyStart}>
        <Popup className="popup">
          Departure Airport <br />
        </Popup>
      </Marker>
      <Marker position={journeyEnd}>
        <Popup className="popup">
          Arrival Airport <br />
        </Popup>
      </Marker>
      <Polyline positions={positions} pathOptions={pathOptions} />
    </MapContainer>
  );
};

export default Map;
