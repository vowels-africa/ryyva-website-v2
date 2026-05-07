"use client";

import { useEffect, useRef } from "react";

const LAT = -33.9071185;
const LNG = 18.4223212;
const ZOOM = 17;

export default function LeafletMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<import("leaflet").Map | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Leaflet stamps the DOM node; bail if it's already been initialized
    // (React StrictMode mounts twice in dev)
    if ((container as HTMLElement & { _leaflet_id?: number })._leaflet_id) return;

    let map: import("leaflet").Map;

    import("leaflet").then((L) => {
      if ((container as HTMLElement & { _leaflet_id?: number })._leaflet_id) return;

      map = L.map(container, {
        center: [LAT, LNG],
        zoom: ZOOM,
        zoomControl: true,
        scrollWheelZoom: true,
        attributionControl: false,
      });

      mapRef.current = map;

      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
      }).addTo(map);

      const greenIcon = L.divIcon({
        className: "",
        html: `<svg width="28" height="38" viewBox="0 0 28 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <filter id="s" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="2" stdDeviation="2.5" flood-color="#00000050"/>
          </filter>
          <path d="M14,37 C14,37 2,22 2,14 a12,12 0 1,1 24,0 C26,22 14,37 14,37Z"
                fill="#1d9e75" filter="url(#s)"/>
          <circle cx="14" cy="14" r="5" fill="white"/>
        </svg>`,
        iconSize: [28, 38],
        iconAnchor: [14, 37],
      });

      L.marker([LAT, LNG], { icon: greenIcon }).addTo(map);
    });

    return () => {
      map?.remove();
      mapRef.current = null;
    };
  }, []);

  return <div ref={containerRef} className="w-full h-full" />;
}
