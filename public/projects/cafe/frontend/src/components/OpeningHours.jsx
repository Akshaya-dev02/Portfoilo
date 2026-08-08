function OpeningHours() {
  return (
    <section className="section">
      <h2>Opening Hours</h2>

      <div className="hours-card">
        <div className="hour-row">
          <span>Monday - Friday</span>
          <span>8:00 AM - 10:00 PM</span>
        </div>

        <div className="hour-row">
          <span>Saturday</span>
          <span>8:00 AM - 11:00 PM</span>
        </div>

        <div className="hour-row">
          <span>Sunday</span>
          <span>9:00 AM - 10:00 PM</span>
        </div>

        <div className="hour-row">
          <span>Public Holidays</span>
          <span>9:00 AM - 11:00 PM</span>
        </div>
      </div>
    </section>
  );
}

export default OpeningHours;