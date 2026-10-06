import "./App.css";
import profile from "./profile.jpg.jpeg";

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav>
        <h2>Rubitha.R</h2>

        <div>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="hero">
        <div className="hero-content">
          <p className="hello">HELLO, I'M</p>
          <img
  src={profile}
  alt="Rubitha R"
  className="profile-photo"
/>

          <h1>Rubitha R</h1>

          <h2>Computer Science Engineering Student | Full Stack Developer | AI Enthusiast</h2>

          <p className="intro">
            I build modern web applications and AI-powered
            solutions that solve real-world problems.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View Projects
            </a>

            <a
              href="https://github.com/rubithaaa"
              target="_blank"
              rel="noreferrer"
              className="secondary-btn"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/rubitha2006/"
              target="_blank"
              rel="noreferrer"
              className="secondary-btn"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about">
  <h2>About Me</h2>

  <p>
    I am a Computer Science Engineering student with a strong
    interest in software development, artificial intelligence,
    and full-stack web technologies.
  </p>

  <p>
    I enjoy building practical applications that solve real-world
    problems and continuously strengthen my skills through projects,
    internships, and hackathons.
  </p>

  <p>
    My goal is to grow as a software engineer while contributing
    to innovative and impactful technology solutions.
  </p>
</section>

      {/* Skills */}
      <section id="skills">
  <h2>Technical Skills</h2>

  <div className="skills-container">
    <span>Java</span>
    <span>Python</span>
    <span>JavaScript</span>
    <span>React.js</span>
    <span>Node.js</span>
    <span>Express.js</span>
    <span>MongoDB</span>
    <span>REST APIs</span>
    <span>Git</span>
    <span>GitHub</span>
    <span>SQL</span>
    <span>Machine Learning</span>
  </div>
</section>

      {/* Projects */}
      <section id="projects">
        <h2>Featured Projects</h2>

        <div className="projects-container">

          <div className="project-card">
            <h3>HealthTwin AI</h3>

            <p>
              AI-powered digital health twin concept designed
              to provide personalized health insights using
              multimodal health data.
            </p>

            <span>AI • ML • Digital Twin</span>
          </div>

          <div className="project-card">
            <h3>GitHub Intelligence Platform</h3>

            <p>
              A developer intelligence platform that retrieves
              GitHub profiles, repositories and activity to
              present useful developer insights.
            </p>

            <span>React • Node.js • GitHub API</span>
          </div>

          <div className="project-card">
            <h3>PhishGuard-AI</h3>

            <p>
              Machine learning based phishing URL detection
              system designed to identify potentially malicious
              web links.
            </p>

            <span>Python • Machine Learning</span>
          </div>

          <div className="project-card">
            <h3>SafeHer</h3>

            <p>
              A safety-focused web application designed to
              provide useful emergency assistance features.
            </p>

            <span>React • Web Development</span>
          </div>

        </div>
      </section>

      {/* Experience */}
      <section id="experience">
        <h2>Experience</h2>

        <div className="experience-card">
          <h3>Frontend Developer Intern</h3>

          <h4>Appin Technology</h4>

          <p>
            Worked on frontend development and gained practical
            experience in building web interfaces and
            application features.
          </p>
        </div>

        <div className="experience-card">
          <h3>Full Stack Developer Intern</h3>

          <h4>Ved Grow</h4>

          <p>
            Worked on full-stack development tasks involving
            frontend and backend application development.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <h2>Let's Connect</h2>

        <p>
          Interested in collaborating, building projects,
          or discussing technology?
        </p>

        <div className="contact-links">
          <a href="https://github.com/rubithaaa">
            GitHub
          </a>

          <a href="https://www.linkedin.com/in/rubitha2006/">
            LinkedIn
          </a>

          <a href="mailto:your-email@example.com">
            Email
          </a>
        </div>
      </section>

      <footer>
        <p>© 2026 Rubitha R. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;