function Team() {
  const members = [
    {
      name: "John Smith",
      role: "Head Barista"
    },
    {
      name: "Sarah Johnson",
      role: "Coffee Specialist"
    },
    {
      name: "Michael Brown",
      role: "Pastry Chef"
    }
  ];

  return (
    <section className="section">
      <h2>Meet Our Team</h2>

      <div className="grid">
        {members.map((member, index) => (
          <div className="card" key={index}>
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Team;