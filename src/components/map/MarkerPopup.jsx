import React from "react";
import { Marker} from "react-leaflet";
import {Icon_Icon}from './Icon_Icon'

const MarkerPopup = () => {
  return(
     <Marker position={{lat:"-16.3988032",lng:"-71.5390943"}} icon = {Icon_Icon}
/>
  );

};



/* 


const VenueMarkers = (props) => {
  const { venues } = props;
  const markers = venues.map((venue, i) => (
    <Marker key={i} position={venue.geometry} icon={VenueLocationIcon}>
      <MarkerPopup data={venue} />
    </Marker>
  ));
  return <>{markers}</>;
};


const MarkerPopup = () => {
  return(
     <Marker position={{lat:"-16.3988032",lng:"-71.5390943"}} icon = {Icon_Icon}
/>
  );

};



const MarkerPopup = (props) => {
  const { distrito } = props;
  const markers = distrito.map((place,i) =>(
    <Marker 
      key={i}
    position={(state.distrito.latitud),(state.distrito.longitud)}
    
    icon = {Icon_Icon}
  />

  ));
  return markers
};



const MarkerPopup = (props) => {
  const { places } = props;
  const markers = places.map((place,i) =>(
    <Marker 
      key={i}
    position={(place.distrito.rutas.paraderos.latitud),(place.distrito.rutas.paraderos.longitud)}
    
    icon = {Icon_Icon}
  />

  ));
  return markers
};




const MarkerPopup = (props) => {
  const { name } = props.data;
  return (
    <Popup>
      <div>{name}</div>
    </Popup>
  );
};


*/

export default MarkerPopup;
