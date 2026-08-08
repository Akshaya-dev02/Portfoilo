function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/236x/f4/b4/68/f4b468c720a97521602be6095de1abec.jpg?nii=t')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-content">
        <h1>Blue Tokai Coffee Roasters</h1>
        <p>
          Premium Coffee • Fresh Bakery • Cozy Atmosphere
        </p>

        <div className="btn-group">
          <button>View Menu</button>
          <button>Get Directions</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;