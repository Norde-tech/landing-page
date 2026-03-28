import { useState, useEffect } from "react";
import { translations, type Lang } from "./i18n";
import "./App.css";

function App() {
  const [lang, setLang] = useState<Lang>("en");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formSent, setFormSent] = useState(false);
  const [sending, setSending] = useState(false);

  const t = translations[lang];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleLang = () => setLang(lang === "en" ? "uk" : "en");

  const handleNavClick = () => setMobileOpen(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setFormSent(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setFormSent(false), 5000);
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar-inner">
          <a href="#" className="logo">
            <div className="logo-mark">NT</div>
            Norde Tech
          </a>
          <div className="nav-links">
            <a href="#about">{t.nav.about}</a>
            <a href="#services">{t.nav.services}</a>
            <a href="#contact">{t.nav.contact}</a>
            <button className="lang-toggle" onClick={toggleLang}>
              {lang === "en" ? "UA" : "EN"}
            </button>
          </div>
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}
      <div className={`mobile-nav ${mobileOpen ? "open" : ""}`}>
        <a href="#about" onClick={handleNavClick}>{t.nav.about}</a>
        <a href="#services" onClick={handleNavClick}>{t.nav.services}</a>
        <a href="#contact" onClick={handleNavClick}>{t.nav.contact}</a>
        <button className="lang-toggle" onClick={toggleLang}>
          {lang === "en" ? "UA" : "EN"}
        </button>
      </div>

      {/* Hero */}
      <section className="hero">
        <div className="hero-inner">
          <h1>
            {t.hero.title.split(" ").map((word, i, arr) =>
              i >= arr.length - 2 ? (
                <span key={i}>{i === arr.length - 2 ? " " : ""}{word}{i < arr.length - 1 ? " " : ""}</span>
              ) : (
                <span key={i} style={{ WebkitTextFillColor: "initial", background: "none" }}>{word} </span>
              )
            )}
          </h1>
          <p>{t.hero.subtitle}</p>
          <a href="#contact" className="hero-cta">{t.hero.cta} &rarr;</a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section about">
        <div className="section-inner">
          <div className="section-header">
            <h2>{t.about.title}</h2>
          </div>
          <div className="about-content">
            <div className="about-text">
              <p>{t.about.description}</p>
            </div>
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-number">50+</div>
                <div className="stat-label">{t.about.stats.projects}</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">30+</div>
                <div className="stat-label">{t.about.stats.clients}</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">5+</div>
                <div className="stat-label">{t.about.stats.years}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section services">
        <div className="section-inner">
          <div className="section-header">
            <h2>{t.services.title}</h2>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon dev">&#60;/&#62;</div>
              <h3>{t.services.dev.title}</h3>
              <p>{t.services.dev.description}</p>
            </div>
            <div className="service-card">
              <div className="service-icon consulting">&#9881;</div>
              <h3>{t.services.consulting.title}</h3>
              <p>{t.services.consulting.description}</p>
            </div>
            <div className="service-card">
              <div className="service-icon saas">&#9729;</div>
              <h3>{t.services.saas.title}</h3>
              <p>{t.services.saas.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact">
        <div className="section-inner">
          <div className="section-header">
            <h2>{t.contact.title}</h2>
            <p>{t.contact.subtitle}</p>
          </div>
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-details">
                <div className="contact-detail">
                  <div className="contact-detail-icon">&#9993;</div>
                  <span>info@nordetech.com</span>
                </div>
                <div className="contact-detail">
                  <div className="contact-detail-icon">&#9742;</div>
                  <span>+380 (XX) XXX-XX-XX</span>
                </div>
                <div className="contact-detail">
                  <div className="contact-detail-icon">&#9873;</div>
                  <span>Kyiv, Ukraine</span>
                </div>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>{t.contact.name}</label>
                <input
                  type="text"
                  required
                  placeholder={t.contact.namePlaceholder}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>{t.contact.email}</label>
                <input
                  type="email"
                  required
                  placeholder={t.contact.emailPlaceholder}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>{t.contact.message}</label>
                <textarea
                  required
                  placeholder={t.contact.messagePlaceholder}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
              <button type="submit" className="submit-btn" disabled={sending}>
                {sending ? "..." : t.contact.send}
              </button>
              {formSent && <div className="form-success">{t.contact.success}</div>}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-logo">
            <div className="logo-mark">NT</div>
            Norde Tech
          </div>
          <div className="footer-copy">
            &copy; {new Date().getFullYear()} Norde Tech. {t.footer.rights}
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
