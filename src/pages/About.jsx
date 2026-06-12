export default function About() {
  return (
    <main>

      {/* HERO */}
      <section id="about-hero">
        <div id="about-hero-content">
          <p className="section-tag-light">About us</p>
          <h1>We know the way to your dream home</h1>
          <p>Specialized mortgage advisors helping Americans navigate the Spanish property market — wherever you call home.</p>
        </div>
        <span className="page-hero-credit">Barcelona, Spain</span>
      </section>

      {/* INTRO */}
      <section id="about-intro">
        <div id="about-intro-text">
          <p className="section-tag">Who we are</p>
          <h2>Always tailored to your needs</h2>
          <p>No matter how complex your situation seems, don't hesitate to bring it to us — for us, the client is always the absolute priority. We ensure your complete peace of mind throughout the entire process.</p>
          <p>As specialized mortgage advisors, we help our clients secure the best financial terms, generating significant savings over the life of their loan.</p>
        </div>
        <div id="about-intro-stats">
          <div className="intro-stat">
            <span className="intro-stat-num">45+</span>
            <span className="intro-stat-label">Partner banks nationwide</span>
          </div>
          <div className="intro-stat">
            <span className="intro-stat-num">20+</span>
            <span className="intro-stat-label">Years of experience</span>
          </div>
          <div className="intro-stat">
            <span className="intro-stat-num">98%</span>
            <span className="intro-stat-label">Approval rate</span>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section id="about-values">
        <p className="section-tag">What sets us apart</p>
        <h2>How we work for you</h2>
        <div id="values-grid">
          <div className="value-card">
            <div className="value-icon-circle">🌍</div>
            <h3>Nationwide coverage</h3>
            <p>We work across all of Spain — wherever your dream property is located.</p>
          </div>
          <div className="value-card">
            <div className="value-icon-circle">🔍</div>
            <h3>Detailed needs analysis</h3>
            <p>We study your situation in depth before recommending any solution.</p>
          </div>
          <div className="value-card">
            <div className="value-icon-circle">🏦</div>
            <h3>Tailored bank matching</h3>
            <p>We search across all partner banks to find the offer that truly fits you.</p>
          </div>
          <div className="value-card">
            <div className="value-icon-circle">📞</div>
            <h3>Continuous support</h3>
            <p>We keep you informed and by your side throughout the entire process.</p>
          </div>
        </div>
      </section>

    </main>
  )
}