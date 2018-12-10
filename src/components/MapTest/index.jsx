import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

//const { Map: LeafletMap, TileLayer, Marker, Popup } = ReactLeaflet

class MapTest extends Component {
  state = {
    lat: 60.10,
    lng: 21.00,
    zoom: 8
  }


  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>

      </Map>
    )
  }
}

export default MapTest

