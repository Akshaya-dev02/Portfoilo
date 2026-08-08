function TodaysSpecial() {
  const specials = [
    {
      name: "Caramel Latte",
      price: "₹249",
      desc: "Rich espresso blended with creamy caramel and steamed milk.",
      image:
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Chocolate Brownie",
      price: "₹179",
      desc: "Freshly baked chocolate brownie served warm.",
      image:
        "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Blueberry Cheesecake",
      price: "₹299",
      desc: "Creamy cheesecake topped with fresh blueberries.",
      image:
        "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="section">
      <h2>🍰 Today's Specials</h2>

      <div className="grid">
        {specials.map((item, index) => (
          <div className="card" key={index}>
            <img
              src={item.image}
              alt={item.name}
            />

            <h3>{item.name}</h3>

            <p>{item.desc}</p>

            <h4
              style={{
                color: "#ff9800",
                marginTop: "10px",
              }}
            >
              {item.price}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TodaysSpecial;