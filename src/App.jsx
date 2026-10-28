
import { useState } from "react";
import {
  BookOpen,
  BrainCircuit,
  ChartNoAxesColumnIncreasing,
  GraduationCap,
  Menu,
  X
} from "lucide-react";

const subjects = [
  { name: "Mathematics", subtitle: "Build confidence with every problem", icon: "∑" },
  { name: "Science", subtitle: "Understand concepts, not just answers", icon: "⚛" },
  { name: "English", subtitle: "Grammar, prose and writing skills", icon: "A" },
  { name: "Kannada", subtitle: "Learn and revise your syllabus", icon: "ಅ" },
  { name: "Hindi", subtitle: "Strengthen language and literature", icon: "अ" },
  { name: "Social Science", subtitle: "History, geography and civics", icon: "◎" }
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app-shell">
      <header className="topbar">
        <a className="brand" href="/" aria-label="Tyaari.ai home">
          <span className="brand-mark">
            <GraduationCap size={23} />
          </span>
          <span>Tyaari<span className="brand-ai">.ai</span></span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"}>
          <a href="#subjects" onClick={() => setMenuOpen(false)}>Subjects</a>
          <a href="#how-it-works" onClick={() => setMenuOpen(false)}>How it works</a>
          <a href="#progress" onClick={() => setMenuOpen(false)}>Your progress</a>
          <button className="button button-primary" onClick={() => {
            document.getElementById("subjects")?.scrollIntoView({ behavior: "smooth" });
            setMenuOpen(false);
          }}>
            Start learning
          </button>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <div className="eyebrow">
              <BrainCircuit size={16} />
              Your personal SSLC learning companion
            </div>

            <h1>Your SSLC journey.<br />
              <span>One concept at a time.</span>
            </h1>

            <p className="hero-description">
              Understand every concept, practise with purpose, and prepare
              for your Karnataka SSLC exams with a learning plan built around you.
            </p>

            <button className="button button-primary hero-button" onClick={() => {
              document.getElementById("subjects")?.scrollIntoView({ behavior: "smooth" });
            }}>
              Explore your subjects <span aria-hidden="true">→</span>
            </button>

            <div className="hero-note">
              <span className="status-dot" />
              Six subjects. A plan that fits you.
            </div>
          </div>

          <div className="hero-art" aria-hidden="true">
            <div className="art-glow" />
            <div className="art-card art-card-back">
              <ChartNoAxesColumnIncreasing size={22} />
              <span>Keep making progress</span>
              <div className="mini-bars">
                {[35, 55, 43, 72, 60, 90, 78].map((height, index) => (
                  <i key={index} style={{ height: `${height}%` }} />
                ))}
              </div>
            </div>
            <div className="art-card art-card-main">
              <div className="art-icon"><BookOpen size={30} /></div>
              <span className="art-label">TODAY'S MINDSET</span>
              <h3>Small steps.<br />Big results.</h3>
              <p>Learn it. Practise it. Master it.</p>
              <div className="art-progress"><i /></div>
            </div>
            <div className="floating-star">✦</div>
          </div>
        </section>

        <section className="subjects-section" id="subjects">
          <div className="section-heading">
            <div>
              <span className="section-kicker">YOUR LEARNING SPACE</span>
              <h2>Six subjects. One goal.</h2>
              <p>Choose a subject to begin your learning journey.</p>
            </div>
            <span className="subject-count">06 SUBJECTS</span>
          </div>

          <div className="subject-grid">
            {subjects.map((subject, index) => (
              <article className="subject-card" key={subject.name}>
                <div className={`subject-icon subject-icon-${index}`}>
                  {subject.icon}
                </div>
                <h3>{subject.name}</h3>
                <p>{subject.subtitle}</p>
                <button
                  className="subject-link"
                  onClick={() => alert("The " + subject.name + " learning module will be connected after Firebase setup.")}
                >
                  Explore subject <span aria-hidden="true">→</span>
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="learning-banner" id="how-it-works">
          <div className="banner-icon"><BrainCircuit size={27} /></div>
          <div>
            <span className="section-kicker">LEARN SMARTER</span>
            <h2>Understand first. Practise next. Improve every day.</h2>
            <p>Our goal is to help you identify what you know and what to learn next.</p>
          </div>
        </section>

        <section className="progress-section" id="progress">
          <div className="progress-symbol"><ChartNoAxesColumnIncreasing size={23} /></div>
          <div>
            <h2>Your progress starts here.</h2>
            <p>Once your account is connected, your learning history and mastery will appear here.</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="brand footer-brand" href="/">
          <span className="brand-mark"><GraduationCap size={19} /></span>
          <span>Tyaari<span className="brand-ai">.ai</span></span>
        </a>
        <p>Built for learning. Designed for progress.</p>
        <span>© {new Date().getFullYear()} Tyaari.ai</span>
      </footer>
    </div>
  );
}
