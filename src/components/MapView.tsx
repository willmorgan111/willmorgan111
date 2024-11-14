import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FIELDS } from "@/lib/constants";

declare global {
  interface Window {
    google: any;
  }
}

export const MapView = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_ACTUAL_API_KEY_HERE`;
    script.async = true;
    script.defer = true;
    script.onload = initMap;
    document.body.appendChild(script);

    return () => {
      const scripts = document.getElementsByTagName("script");
      for (let script of scripts) {
        if (script.src.includes("maps.googleapis.com")) {
          document.body.removeChild(script);
        }
      }
    };
  }, []);

  const initMap = () => {
    if (!mapRef.current) return;

    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: 38.8505, lng: -94.7144 }, // Centered between all fields
      zoom: 17,
      styles: [
        {
          featureType: "all",
          elementType: "geometry",
          stylers: [{ color: "#f5f5f5" }]
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [{ color: "#c9c9c9" }]
        },
        {
          featureType: "poi.park",
          elementType: "geometry",
          stylers: [{ color: "#e5e5e5" }]
        }
      ]
    });

    FIELDS.forEach((field) => {
      const marker = new window.google.maps.Marker({
        position: field.coordinates,
        map,
        title: field.name,
      });

      marker.addListener("click", () => {
        navigate(`/field/${field.id}`);
      });
    });
  };

  return (
    <div ref={mapRef} className="w-full h-[600px] rounded-lg shadow-lg" />
  );
};