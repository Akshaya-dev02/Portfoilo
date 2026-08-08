const reviews = [
  {
    name: "Rahul",
    rating: 5,
    review:
      "Amazing coffee and atmosphere."
  },
  {
    name: "Priya",
    rating: 5,
    review:
      "Loved the cheesecake."
  },
  {
    name: "Aman",
    rating: 4,
    review:
      "Great workspace and WiFi."
  }
];

function Reviews() {
  return (
    <section
      id="reviews"
      className="section"
    >
      <h2>Customer Reviews</h2>

      <div className="grid">
        {reviews.map((r, index) => (
          <div className="review-card"
            key={index}
          >
            <h3>{r.name}</h3>

            <p>
              {"⭐".repeat(r.rating)}
            </p>

            <p>{r.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;