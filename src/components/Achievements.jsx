import React, { useState } from "react";
import "../styles/Achievements.css";

import topper1 from "../assets/achievements/topper1.jpeg";
import topper2 from "../assets/achievements/topper2.png";

function Achievements() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section className="achievements-section" id="achievements">
        <div className="achievement-container">
            <span className="section-label">Achievements</span>
          <h2>
            My <span>Achievements</span>
          </h2>

          <p>
            Throughout my academic journey, I have consistently pursued
            excellence in academics and technical skills. I have been honored
            multiple times as a <strong>Semester Topper at SR University</strong>,
            reflecting my dedication, discipline, and passion for learning.
            Alongside academics, I actively solve coding challenges on
            <strong> LeetCode</strong> to strengthen my problem-solving skills
            and continuously improve as a software developer.
          </p>

          <div className="achievement-buttons">
            <button
              className="btn-primary"
              onClick={() => setShowModal(true)}
            >
              View My Achievements
            </button>

            <a
              href="https://leetcode.com/u/akshaya_perala/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              LeetCode Profile
            </a>
          </div>
        </div>
      </section>

      {/* Modal */}

      {showModal && (
        <div
          className="modal-overlay"
          onClick={() => setShowModal(false)}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={() => setShowModal(false)}
            >
              ✕
            </button>

            <h2>🎓 Academic Achievements</h2>

            <div className="achievement-gallery">

              <div className="achievement-card">
                <img src={topper1} alt="Semester Topper Award" />

                <div className="card-body">
                  <h3>🏆 Semester Topper Award</h3>

                  <p>
                    Honored by <strong>SR University</strong> for securing the
                    highest academic performance in the semester through
                    dedication, consistency, and excellence.
                  </p>
                </div>
              </div>

              <div className="achievement-card">
                <img src={topper2} alt="Academic Excellence Award" />

                <div className="card-body">
                  <h3>🏆 Academic Excellence</h3>

                  <p>
                    Received the Semester Topper Award once again for
                    maintaining exceptional academic performance and
                    continuous commitment to learning.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Achievements;