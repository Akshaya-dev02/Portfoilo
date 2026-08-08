import { useState } from "react";

function Reservation() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    guests: "",
    date: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.guests ||
      !form.date
    ) {
      alert("⚠️ Please fill all fields");
      return;
    }

    alert("✅ Table booked successfully!");
    
    setForm({
      name: "",
      email: "",
      guests: "",
      date: ""
    });
  };

  return (
    <section className="section">
      <h2>Book a Table</h2>

      <form
        className="contact-form"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value
            })
          }
        />

        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value
            })
          }
        />

        <input
          type="number"
          placeholder="Guests"
          value={form.guests}
          onChange={(e) =>
            setForm({
              ...form,
              guests: e.target.value
            })
          }
        />

        <input
          type="date"
          value={form.date}
          onChange={(e) =>
            setForm({
              ...form,
              date: e.target.value
            })
          }
        />

        <button type="submit">
          Book Table
        </button>
      </form>
    </section>
  );
}

export default Reservation;