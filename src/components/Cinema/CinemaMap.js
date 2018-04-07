import React from 'react';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const CinemaMap = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyDgZCMsOED9D92Lx5kpYNBP7VVEUXAsk2I&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{height: '100%'}} />,
    containerElement: <div style={{height: '300px', position: 'relative', marginTop: 10, overflow: 'hidden'}} />,
    mapElement: <div style={{height: '100%'}} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
    <GoogleMap defaultZoom={16} defaultCenter={{ lat: props.lat, lng: props.lng }} >
        <Marker
        position={{ lat: props.lat, lng: props.lng }}
        />
  </GoogleMap>
));

export default CinemaMap;