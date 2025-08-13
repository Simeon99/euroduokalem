export const GA_MEASUREMENT_ID = "G-G2Y2T899PT"; 

// Logovanje pregleda stranice
export const pageview = (url) => {
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

// Logovanje događaja
export const event = ({ action, params }) => {
  window.gtag("event", action, params);
};
