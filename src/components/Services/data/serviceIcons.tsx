import type { JSX } from "react";

/*
  Íconos de cada servicio, en el mismo orden que los items traducidos en i18n
  ("Services.items"). Se mantienen fuera de las traducciones porque son
  presentación, no contenido. Trazo con currentColor / stroke para colorearlos
  desde el CSS de la tarjeta.
*/
export const serviceIcons: JSX.Element[] = [
  // Desarrollo Web
  <svg key="web" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="4" width="18" height="14" rx="2" />
    <path d="M3 8h18M8 21h8M12 18v3" />
  </svg>,
  // Aplicaciones Móviles
  <svg key="mobile" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="7" y="2" width="10" height="20" rx="2.5" />
    <path d="M11 18h2" />
  </svg>,
  // Backend & APIs
  <svg key="backend" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M8 6l-5 6 5 6M16 6l5 6-5 6M13 4l-2 16" />
  </svg>,
  // Producto End-to-End
  <svg key="product" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z" />
    <path d="M9 12l2 2 4-4" />
  </svg>,
  // Consultoría & Calidad
  <svg key="quality" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 3v3M12 18v3M3 12h3M18 12h3M6 6l2 2M16 16l2 2M18 6l-2 2M8 16l-2 2" />
    <circle cx="12" cy="12" r="3.2" />
  </svg>,
  // Optimización & Escala
  <svg key="scale" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M4 19V5M4 19h16" />
    <path d="M7 15l4-4 3 3 5-6" />
  </svg>,
];
