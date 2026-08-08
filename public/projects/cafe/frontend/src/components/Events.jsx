function Events() {
  const events = [
    {
      title: "Live Music Night",
      date: "Every Saturday Evening",
      image:
        "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Coffee Workshop",
      date: "First Sunday of Every Month",
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Student Discount Day",
      date: "Every Wednesday",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="section">
      <h2>🎉 Upcoming Events</h2>

      <div className="grid">
        {events.map((event, index) => (
          <div className="card" key={index}>
            <img
              src={event.image}
              alt={event.title}
            />

            <h3>{event.title}</h3>

            <p>{event.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Events;