import {Marker, useMap} from "react-leaflet"

import React from 'react'

const LocationMarker = ({position }) => {
const map = useMap();
map.flyTo([position.lat,position.lng],13, {animate:true})
  return position === null ? null : 
  <Marker position={position}></Marker>
}

export default LocationMarker
