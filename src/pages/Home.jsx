export default function Home() {
  return (
    <main>

      {/* HERO */}
      <section id="hero">
        <div id="hero-overlay" />

        <div id="hero-content">
          <div id="hero-badge">
            🏦 Licensed by Bank of Spain · D727
          </div>
          <h1>Your <span id="hero-accent">Spanish mortgage</span>,<br />explained in English</h1>
          <p>Whether you live in the US or already in Spain — we help you get the best mortgage to buy your home here. Expert advice, 45+ partner banks, zero surprises.</p>
          <div id="hero-btns">
            <a href="/contact" id="btn-primary">Get a free quote</a>
            <a href="/services" id="btn-secondary">How it works</a>
          </div>
          <p id="hero-note">✓ US residents &nbsp;·&nbsp; ✓ Expats in Spain &nbsp;·&nbsp; ✓ Free consultation</p>
        </div>

        {/* GLASS CARD */}
        <div id="hero-glass">
          <p id="glass-title">Mortgage estimate</p>
          <div className="glass-row">
            <span className="glass-label">Property value</span>
            <span className="glass-val">€350,000</span>
          </div>
          <div className="glass-row">
            <span className="glass-label">Down payment</span>
            <span className="glass-val">30%</span>
          </div>
          <div className="glass-row">
            <span className="glass-label">Fixed rate</span>
            <span className="glass-val">3.2%</span>
          </div>
          <div className="glass-row">
            <span className="glass-label">Term</span>
            <span className="glass-val">25 years</span>
          </div>
          <div id="glass-result">
            <span>Monthly payment</span>
            <strong>~€1,190</strong>
          </div>
        </div>
      </section>

      {/* TRUST BAND */}
      <div id="trust-band">
        <div className="band-item"><span>✅</span> 98% approval rate</div>
        <div className="band-item"><span>🏦</span> 45+ partner banks</div>
        <div className="band-item"><span>📞</span> +34 910 605 055</div>
        <div className="band-item"><span>📍</span> Madrid, Paseo de la Infanta Isabel 27</div>
      </div>

      {/* STATS */}
      <div id="stats">
        <div className="stat-card">
          <span className="stat-num">98%</span>
          <span className="stat-label">Mortgage approval rate</span>
        </div>
        <div className="stat-card">
          <span className="stat-num">45+</span>
          <span className="stat-label">Partner banks in Spain</span>
        </div>
        <div className="stat-card">
          <span className="stat-num">20+</span>
          <span className="stat-label">Years of experience</span>
        </div>
      </div>

    </main>
  )
}