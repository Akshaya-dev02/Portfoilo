function Location() {
  return (
    <section id="location" className="section">
      <h2>Find Us</h2>

      <iframe
        src="https://www.google.com/maps?q=Blue+Tokai+Coffee+Roasters+Indiranagar+Bangalore&output=embed"
        width="100%"
        height="450"
        loading="lazy"
        title="Cafe Location"
        style={{
          border: "0",
          borderRadius: "20px",
        }}
      />

      <br />
      <br />

      <a
        href="https://maps.google.com/?q=Blue+Tokai+Coffee+Roasters+Indiranagar+Bangalore"
        target="_blank"
        rel="noreferrer"
      >
        <button className="map-btn">
          📍 Open in Google Maps
        </button>
      </a>
    </section>
  );
}

export default Location;