import AnimateOnScroll from "./AnimateOnScroll";
import "../styles/Footer.css";

function Footer() {
  return (
    <AnimateOnScroll animation="fade-up">
      <footer>
        <p>
          © 2026 <strong>Perala Akshaya</strong> · Portfolio Website
        </p>
      </footer>
    </AnimateOnScroll>
  );
}

export default Footer;
