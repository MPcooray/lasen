import ContactPanel from "../components/ContactPanel";
import EngineeringBench from "../components/EngineeringBench";
import ProbeCursor from "../components/ProbeCursor";
import Readout from "../components/Readout";
import SiteNav from "../components/SiteNav";

export default function HomePage() {
  const year = new Date().getFullYear();

  return (
    <>
      <a className="skip" href="#about">
        Skip to content
      </a>
      <SiteNav />
      <ProbeCursor />
      <Readout />

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="kicker">Engineering undergraduate</p>
            <h1>
              Lasen
              <br />
              Wikramawardena
            </h1>
            <p className="role">
              Electrical &amp; Electronic Engineering
              <br />
              University of Sri Jayewardenepura
            </p>
            <p className="lede">Engineering ideas into practical solutions.</p>
            <div className="hero-actions">
              <a className="button" href="#engineering">
                View work
              </a>
              <a className="text-link" href="#contact">
                Contact
              </a>
            </div>
            <p className="place">Ratmalana, Sri Lanka</p>
          </div>

          <div className="hero-visual">
            <p className="ghost" aria-hidden="true">
              ENGINEER<span className="mark">.</span>
            </p>
            <figure className="portrait">
              <img src="/lasen.jpg" alt="Lasen Wikramawardena" width="886" height="1024" />
              <figcaption>
                <span>BScEngHons</span>
                <span>EEE</span>
              </figcaption>
            </figure>
            <svg className="trace" viewBox="0 0 280 80" aria-hidden="true">
              <path d="M8 40 H48 l10-16 10 32 10-32 10 32 10-16 H140" />
              <path d="M140 28 v24 M156 28 v24 M140 40 H156" />
              <path d="M156 40 H210" />
              <circle cx="226" cy="40" r="12" />
              <path d="M238 40 H272" />
            </svg>
          </div>
        </section>

        <section id="about" className="section">
          <header className="section-head">
            <span>01 / About</span>
            <h2>About</h2>
          </header>
          <div className="split">
            <p className="statement">From the school ground to the engineering faculty.</p>
            <div className="prose">
              <p>
                I am Lasen Wikramawardena, an electrical and electronic engineering undergraduate in the
                Faculty of Engineering at the University of Sri Jayewardenepura. I live in Ratmalana.
              </p>
              <p>
                The degree is a four-year Bachelor of the Science of Engineering Honours. The work runs
                from circuit fundamentals and electronic signals through digital systems to power and
                telecommunication.
              </p>
              <p>
                Before university I studied at Isipathana College from Grade 1 to Grade 11, where I played
                table tennis and cricket, then completed the G.C.E. Advanced Level at Ananda College.
              </p>
            </div>
          </div>
        </section>

        <section id="education" className="section">
          <header className="section-head">
            <span>02 / Education</span>
            <h2>Education</h2>
          </header>
          <ol className="records">
            <li>
              <p className="when">Present</p>
              <div>
                <h3>University of Sri Jayewardenepura</h3>
                <p className="meta">Faculty of Engineering · BScEngHons · Electrical &amp; Electronic Engineering</p>
                <p>
                  A four-year honours degree. The curriculum is kept to SLQF and IESL requirements, and to
                  the Washington Accord standard for engineering programmes.
                </p>
              </div>
            </li>
            <li>
              <p className="when">A/L</p>
              <div>
                <h3>Ananda College</h3>
                <p className="meta">Colombo · Grade 12 through the Advanced Level</p>
                <p>I joined in Grade 12 and stayed until I finished the G.C.E. Advanced Level.</p>
              </div>
            </li>
            <li>
              <p className="when">Grade 1–11</p>
              <div>
                <h3>Isipathana College</h3>
                <p className="meta">Colombo · Grade 1 to Grade 11</p>
                <p>I studied here from Grade 1, and played table tennis and cricket.</p>
              </div>
            </li>
          </ol>
        </section>

        <section id="engineering" className="section">
          <header className="section-head">
            <span>03 / Engineering</span>
            <h2>Engineering</h2>
          </header>
          <p className="section-note">
            The scope of the degree, set out as working sheets. Completed builds can replace these as they
            are ready to show.
          </p>
          <EngineeringBench />
        </section>

        <section id="skills" className="section">
          <header className="section-head">
            <span>04 / Skills</span>
            <h2>Skills</h2>
          </header>
          <div className="skill-grid">
            <div>
              <h3>Engineering</h3>
              <ul>
                <li>Circuit fundamentals</li>
                <li>Analog and digital electronics</li>
                <li>Signals and processing</li>
                <li>Power and telecommunication systems</li>
              </ul>
            </div>
            <div>
              <h3>Practice</h3>
              <ul>
                <li>Analysis on paper</li>
                <li>Measurement on the bench</li>
                <li>Reading a result against the instrument</li>
                <li>Moving from a component to a system</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="activities" className="section">
          <header className="section-head">
            <span>05 / Activities</span>
            <h2>Activities</h2>
          </header>
          <ol className="timeline">
            <li>
              <span>Present</span>
              <div>
                <h3>Faculty of Engineering, USJ</h3>
                <p>Electrical and electronic engineering honours degree.</p>
              </div>
            </li>
            <li>
              <span>A/L</span>
              <div>
                <h3>Ananda College</h3>
                <p>Grade 12 through the G.C.E. Advanced Level.</p>
              </div>
            </li>
            <li>
              <span>Primary</span>
              <div>
                <h3>Isipathana College</h3>
                <p>Grade 1 to Grade 11. Table tennis and cricket.</p>
              </div>
            </li>
          </ol>
        </section>

        <section id="volunteering" className="section">
          <header className="section-head">
            <span>06 / Volunteering</span>
            <h2>Volunteering</h2>
          </header>
          <ol className="timeline">
            <li>
              <span>University</span>
              <div>
                <h3>University of Sri Jayewardenepura</h3>
                <p>Volunteer work during the engineering degree, in the Faculty of Engineering.</p>
              </div>
            </li>
          </ol>
        </section>

        <section id="contact" className="section">
          <header className="section-head">
            <span>07 / Contact</span>
            <h2>Contact</h2>
          </header>
          <ContactPanel />
        </section>
      </main>

      <footer className="site-footer">
        <p>© {year} Lasen Wikramawardena</p>
        <p>Electrical &amp; Electronic Engineering · University of Sri Jayewardenepura</p>
        <p>
          <a href="/remembered.html">Light engineering version</a>
        </p>
      </footer>
    </>
  );
}
