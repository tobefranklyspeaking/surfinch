import React, { useState } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from "react-google-maps";
import HeatmapLayer from "react-google-maps/lib/components/visualization/HeatmapLayer";
import API_KEY from "../../../config.js";


const DisplayMap = (props) => {
  const [selectedBird, setSelectedBird] = useState(null);

  const currentZoom = props.props.zoom;
  const currentCenter = props.props.center;
  const currentUserData = props.props.userData;
  const currentFriendData = props.props.friendData;
  const currentHeatMap = props.props.heatmapLayer;

  console.log(props.props);

  return (
    <GoogleMap
      defaultZoom={props.props.zoom}
      defaultCenter={currentCenter}>
        {currentUserData &&
        currentUserData.map((bird, index) => (
        <Marker
        key={index}
        position={{
          lat: bird.latitude,
          lng: bird.long
        }}
        onClick={() => {
          setSelectedBird(bird);
        }}
        />
        ))}
        {currentFriendData &&
        currentFriendData.map((bird, index) => (
        <Marker
        key={index}
        position={{
          lat: bird.latitude,
          lng: bird.long
        }}
        onClick={() => {
          setSelectedBird(bird);
        }}
        />
        ))}
      {selectedBird && (
        <InfoWindow position={{
          lat: selectedBird.latitude,
          lng: selectedBird.long
        }}
        onCloseClick={() => {
          setSelectedBird(null);
        }}
        >
          <div>bird details
            <h2>{selectedBird["bird_name"]}</h2>
            <p>{selectedBird["bird_notes"]}</p>
          </div>
        </InfoWindow>
      )}
      {currentHeatMap &&
      <HeatmapLayer
      data={currentHeatMap.map((point) => (
        new google.maps.LatLng(point[0], point[1])
      ))}
      />
      }
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(props => (<DisplayMap props={props}/>)));

const Map = (props) => {

  const defaultZoom = props.defaultZoom || 5;
  const defaultCenter = props.defaultCenter || { lat: 32.7767, lng: -96.7970 };
  const userMarkers = props.userMarkers || null;
  const friendMarkers = props.friendMarkers || null;
  const heatMap = props.heatMap || null;


  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <WrappedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,visualization,drawing,places&key=${API_KEY}`}
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
        zoom={defaultZoom}
        center={defaultCenter}
        userData={userMarkers}
        friendData={friendMarkers}
        heatmapLayer={heatMap}
      />
    </div>
  )
}

export default Map;

/*
Props formatting:
defaultZoom: number - the higher the number the more zoomed in -- default is 5
defaultCenter: -object - { lat: integer, lng: integer } - default: { lat: 32.7767, lng: -96.7970 }
userMarker: array of objects [{
  bird_name: string,
  bird_notes: string,
  bird_pics: string,
  long: int,
  latitude: int,
},
{
  bird_name: string,
  bird_notes: string,
  bird_pics: string,
  long: int,
  latitude: int,
}]

friendMarker: array of objects [{
  friend_name: text,
  bird_name: string,
  bird_notes: string,
  bird_pics: string,
  long: int,
  latitude: int,
},
{
  friend_name: text,
  bird_name: string,
  bird_notes: string,
  bird_pics: string,
  long: int,
  latitude: int,
}]

heatMap: array of arrays:
[[lat, lng], [lat, lng], [lat, lng]]



example:

   const sampleFriendData = [{
    bird_name: "red bird",
    bird_notes: "looks cool",
    bird_pics: "string",
    long: 32.822376,
    latitude: -96.807374,
  },
  {
    bird_name: "blue bird",
    bird_notes: "has blue wings",
    bird_pics: "string",
    long: 32.820989,
    latitude: -96.791009,
  }];

  const heatData = [[32.7769, -96.7970], [32.7767, -96.7970], [32.7790, -96.7970], [32.7794, -96.7970]];

<div><Map userMarkers={sampleFriendData} heatMap={heatData}/><div/>
*/