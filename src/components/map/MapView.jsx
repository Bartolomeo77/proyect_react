import React from "react";
import { Map ,TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import MarkerPopup from "./MarkerPopup";

const MapView = () => {
  return (
  <Map center={{lat:"-16.3988032",lng:"-71.5390943"}} zoom={13}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <MarkerPopup />
    </Map>
    );
  };
export default MapView;
