import { useState } from "react";

const items = [
  // Coffee
  {
    name: "Espresso",
    category: "Coffee",
    price: "₹120",
    image:
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Cappuccino",
    category: "Coffee",
    price: "₹180",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Latte",
    category: "Coffee",
    price: "₹190",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Mocha",
    category: "Coffee",
    price: "₹220",
    image:
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=500&q=80",
  },

  // Desserts
  {
    name: "Chocolate Brownie",
    category: "Dessert",
    price: "₹150",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Blueberry Cheesecake",
    category: "Dessert",
    price: "₹220",
    image:
      "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Red Velvet Cake",
    category: "Dessert",
    price: "₹240",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=500&q=80",
  },

  // Sandwiches
  {
    name: "Veg Sandwich",
    category: "Snacks",
    price: "₹180",
    image:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Paneer Sandwich",
    category: "Snacks",
    price: "₹220",
    image:
      "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "French Fries",
    category: "Snacks",
    price: "₹140",
    image:
      "https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=500&q=80",
  },

  // Pizza
  {
    name: "Margherita Pizza",
    category: "Pizza",
    price: "₹299",
    image:
      "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Veggie Pizza",
    category: "Pizza",
    price: "₹349",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=500&q=80",
  },

  // Beverages
  {
    name: "Mango Smoothie",
    category: "Beverages",
    price: "₹180",
    image:
      "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Chocolate Shake",
    category: "Beverages",
    price: "₹220",
    image:
      "https://tse2.mm.bing.net/th/id/OIP.Pj5E2pmAkGIajT7LT5jrZAAAAA?rs=1&pid=ImgDetMain&o=7&rm=30",
  },
  {
    name: "Oreo Shake",
    category: "Beverages",
    price: "₹230",
    image:
      "https://images.unsplash.com/photo-1641665271888-575e46923776?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b3JlbyUyMHNoYWtlfGVufDB8fDB8fHww",
  },

  // Breakfast
  {
    name: "Pancakes",
    category: "Breakfast",
    price: "₹250",
    image:
      "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Waffles",
    category: "Breakfast",
    price: "₹280",
    image:
      "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Omelette",
    category: "Breakfast",
    price: "₹180",
    image:
      "https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=500&q=80",
  },
];

function Menu() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? items
      : items.filter(
          (item) => item.category === filter
        );

  return (
    <section id="menu" className="section">
      <h2>Our Special Menu</h2>

      <div className="filters">
        <button onClick={() => setFilter("All")}>All</button>
        <button onClick={() => setFilter("Coffee")}>Coffee</button>
        <button onClick={() => setFilter("Dessert")}>Dessert</button>
        <button onClick={() => setFilter("Snacks")}>Snacks</button>
        <button onClick={() => setFilter("Pizza")}>Pizza</button>
        <button onClick={() => setFilter("Beverages")}>Beverages</button>
        <button onClick={() => setFilter("Breakfast")}>Breakfast</button>
      </div>

      <div className="grid">
        {filtered.map((item, index) => (
          <div className="card" key={index}>
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
                borderRadius: "12px",
              }}
            />

            <h3 style={{ marginTop: "15px" }}>
              {item.name}
            </h3>

            <p>{item.category}</p>

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

export default Menu;