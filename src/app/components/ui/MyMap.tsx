'use client';

import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import React from 'react';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const center = {
  lat: 43.668980,  // Belgrade for example
  lng: 21.157874,
};

const MyMap = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!, // from .env
  });

  if (!isLoaded) return <div className="w-full h-full bg-white animate-pulse">
  <div className="h-full bg-gray-300 rounded w-full"></div>
</div>;

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={6}>
      <Marker position={center} />
    </GoogleMap>
  );
};

export default MyMap;
