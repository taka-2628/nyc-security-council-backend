import { useState } from "react";
import { createRoot } from 'react-dom/client';
import Map, {Source, Layer} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import '../stylesheets/Map.css';

import NavFullScreen from "./NavFullScreen";
import MapControlPanel from "./MapControlPanel";

function MapContainer( { MAPBOX_TOKEN } ){
  const [viewport, setViewport] = useState();
  
  const settings = {
    scrollZoom: true,
    boxZoom: true,
    dragRotate: true,
    dragPan: true,
    keyboard: true,
    doubleClickZoom: true,
    touchZoomRotate: true,
    touchPitch: true,
    minZoom: 11,
    maxZoom: 20,
    minPitch: 0,
    maxPitch: 85
  }

  const geojson = {
    type: 'FeatureCollection',
    features: [
      {type: 'Feature', geometry: {type: 'Point', coordinates: [-122.4, 37.8]}}
    ]
  };
  
  const layerStyle = {
    id: 'point',
    type: 'circle',
    paint: {
      'circle-radius': 10,
      'circle-color': '#007cbf'
    }
  };
  
  return(
    <div id="map-container">
      <NavFullScreen />
      <MapControlPanel />
      <Map 
        initialViewState={{
          longitude: -73.96,
          latitude: 40.75,
          zoom: 12,
          pitch: 50
        }}
        {...settings}
        mapStyle="mapbox://styles/mapbox/dark-v9"
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        <Source id="my-data" type="geojson" data={geojson}>
          <Layer {...layerStyle} />
        </Source>
      </Map>
    </div>
  )
}

export default MapContainer;