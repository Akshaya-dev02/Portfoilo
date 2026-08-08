const images = [
  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80"
];
function Gallery() {
  return (
    <section id="gallery" className="section">
      <h2>Gallery</h2>

      <div className="gallery">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Cafe"
          />
        ))}
      </div>
    </section>
  );
}

export default Gallery;