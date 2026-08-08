import {
  FaCoffee,
  FaLeaf,
  FaWifi,
  FaSmile
} from "react-icons/fa";

function WhyChooseUs() {
  const features = [
    {
      icon: <FaCoffee size={40} />,
      title: "Premium Coffee",
      desc: "Freshly brewed coffee made from carefully selected beans."
    },
    {
      icon: <FaLeaf size={40} />,
      title: "Fresh Ingredients",
      desc: "We use high-quality and fresh ingredients in every dish."
    },
    {
      icon: <FaWifi size={40} />,
      title: "Free Wi-Fi",
      desc: "Work, study, or relax with our high-speed internet."
    },
    {
      icon: <FaSmile size={40} />,
      title: "Friendly Service",
      desc: "Our staff is dedicated to making every visit memorable."
    }
  ];

  return (
    <section className="section">
      <h2>Why Choose Us</h2>

      <div className="grid">
        {features.map((item, index) => (
          <div className="card" key={index}>
            <div
              style={{
                color: "#ff9800",
                marginBottom: "15px"
              }}
            >
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;