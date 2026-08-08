import { useEffect, useRef, useState } from "react";

function AnimateOnScroll({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`aos ${animation} ${visible ? "aos-visible" : ""} ${className}`}
      style={{ "--aos-delay": `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default AnimateOnScroll;
