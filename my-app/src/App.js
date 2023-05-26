import "./App.css";
import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "800px",
  height: "800px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};


function App() {
  //isLoaded starts as false, maybe a useEffect to set true instantly???
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAQN7cmsB0x2kvPyG-hqLQ8AJcGIKeVB4E",
  });

  return (
    <>
      {isLoaded && (
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          {/* Child components, such as markers, info windows, etc. */}
          <></>
        </GoogleMap>
      )}
    </>
  );
}

export default App;
