import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import LocationMarker from "./LocationMarker";
import FireListing from './FireListing';

const Map = ({ center, zoom, eventData }) => {
/*  flyToLocation(e) {
    // console.log(e.target.parentNode.id)
    this.setState({
      selected_feature: this.state.event.filter(d => parseInt(ev.properties.Name) === parseInt(e.target.parentNode.id))[0]
    });
  }; */
  const markers = eventData.map((ev) => {

   // if(ev.state === 'CALIFORNIA' | ev.state === 'OREGON' | ev.state === 'WASHINGTON' | ev.state === 'NEVADA' | ev.state === 'IDAHO' | ev.state === 'MONTANA' | ev.state === 'UTAH' | ev.state === 'ARIZONA') {
    if(ev.contained !== "100" | ev.size !== "0 Acres") {
      const [lng, lat] = [ev.lng, ev.lat];
      return (
        <LocationMarker key={ev.name} lng={lng} lat={lat} info={{ name: ev.name, summary: ev.summary, size: ev.size, contained: ev.contained}} />
      );
    }
  });

  return (
    <MapContainer style={{ height: "100vh" }} center={center} zoom={zoom}>
      <TileLayer
        //url="https://api.mapbox.com/styles/v1/kcdeleon/ckqqdo2rq4lp519qfvfp76qiq/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoia2NkZWxlb24iLCJhIjoiY2txcWRxeDMxMjVmcjJ3bzFrNXVja2gxdSJ9.Ngo-IZUCAm3bsy4eMzoSlw"
        url="https://api.mapbox.com/styles/v1/kcdeleon/cksfbbs4x41im17pdwjb2cphd/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoia2NkZWxlb24iLCJhIjoiY2o2OG5yMTF3MGhkODMycGxnamZwaGsydiJ9._CkK8kkDpQ_88-_aiV4YMg" />
        //attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      //  />
      {markers}
    </MapContainer>
  /*  <FireListing
      data={this.props.eventData}
      flyToLocation={this.props.flyToLocation}>
    </FireListing>  */
  );
};

Map.defaultProps = {
  center: {
      lat: 38.104,
      lng: -121.542
  },
  zoom: 7
}

export default Map;
