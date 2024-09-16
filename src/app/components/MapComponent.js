"use client";
import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (!mapRef.current) {
        // Initialize the map with desired options
        mapRef.current = L.map("map", {
          center: [58.530561, 15.064665], // Center coordinates
          zoom: 18, // Initial zoom level
          scrollWheelZoom: false, // Disable zooming with mouse wheel
          dragging: false, // Disable dragging the map
        });

        // Add OpenStreetMap tile layer
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(mapRef.current);

        // Define a custom red marker icon
        const redIcon = L.icon({
          iconUrl: "https://img.icons8.com/ios-filled/50/ff0000/marker.png",
          iconSize: [32, 32], // Size of the icon
          iconAnchor: [16, 32], // Point of the icon which will correspond to marker's location
          popupAnchor: [0, -32], // Point from which the popup should open relative to the iconAnchor
        });

        // Add marker with popup
        L.marker([58.530561, 15.064665], { icon: redIcon })
          .addTo(mapRef.current)
          .bindPopup("Pall Hotellet.se")
          .openPopup();
      }
    }
  }, []);

  return <div id="map" className="h-full" style={{ height: '500px' }} />;
};

export default MapComponent;
