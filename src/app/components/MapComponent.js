"use client";
import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (!mapRef.current) {
        mapRef.current = L.map("map").setView([58.530561, 15.064665], 18);

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(mapRef.current);

        const redIcon = L.icon({
          iconUrl: "https://img.icons8.com/ios-filled/50/ff0000/marker.png",
          iconSize: [32, 32],
          iconAnchor: [16, 32],
          popupAnchor: [0, -32],
        });

        L.marker([58.530561, 15.064665], { icon: redIcon })
          .addTo(mapRef.current)
          .bindPopup("Pall Hotellet.se")
          .openPopup();
      }
    }
  }, []);

  return <div id="map" className="h-full" />;
};

export default MapComponent;
