import AnimateOnScroll from "./AnimateOnScroll";
import "../styles/Tools.css";

function Tools() {
  const tools = [
    { name: "VS Code", icon: "💻", category: "Editor" },
    { name: "Git", icon: "🔀", category: "Version Control" },
    { name: "GitHub", icon: "🐙", category: "Version Control" },
    { name: "Canva", icon: "🎨", category: "Visual creation" },
    { name: "Jupyter", icon: "📓", category: "Data Science" },
    { name: "Figma", icon: "🎨", category: "Design" },
    { name: "npm", icon: "📦", category: "Package Manager" },
    { name: "Vite", icon: "⚡", category: "Build Tool" },
  ];

  return (
    <section id="tools">
      <AnimateOnScroll animation="fade-down">
        <div className="section-header">
          <span className="section-label">Tools</span>
          <h2>Tools I Use</h2>
          <p>Platforms and software that power my workflow.</p>
        </div>
      </AnimateOnScroll>

      <div className="tools-grid">
        {tools.map((tool, index) => (
          <AnimateOnScroll
            key={tool.name}
            animation="scale-up"
            delay={index * 80}
          >
            <div className="tool-card">
              <span className="tool-icon" aria-hidden="true">
                {tool.icon}
              </span>
              <h3>{tool.name}</h3>
              <span className="tool-category">{tool.category}</span>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
}

export default Tools;
