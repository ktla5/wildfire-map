import React from "react";
import { Popup } from "react-leaflet";
import './MarkerPopup.css';

const MarkerPopup = ({ info }) => {
	const acres = info.size.split(" ").reverse().slice(1).reverse().join(" ");
	
  return (
    <Popup>
      <div className="poup-text">{info.name}</div>
      <ul>
        <li><strong>Acres burned:</strong> {acres}</li>
        <li><strong>Containment:</strong> {info.contained}%</li>
      </ul>
    </Popup>
  );
};
export default MarkerPopup;
