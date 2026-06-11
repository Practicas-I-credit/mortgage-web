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

      {/* PAIN POINTS */}
      <section id="pain-points">
        <p className="section-tag">Common challenges</p>
        <h2>We know the challenges you face</h2>
        <p className="section-sub">Buying property in Spain as a foreigner can be complex. We simplify every step.</p>
        <div id="pain-grid">
          <div className="pain-card">
            <div className="pain-card-top">
              <div className="pain-card-icon">🗺️</div>
              <span className="pain-badge">Distance</span>
            </div>
            <h3>You live far away</h3>
            <p>Managing a mortgage process from the US is overwhelming. We handle everything remotely so you don't have to travel until signing day.</p>
            <div className="pain-card-footer">✓ We manage it remotely</div>
          </div>
          <div className="pain-card">
            <div className="pain-card-top">
              <div className="pain-card-icon">📋</div>
              <span className="pain-badge">Paperwork</span>
            </div>
            <h3>Spanish bureaucracy</h3>
            <p>NIE, notary, taxes, bank requirements — the paperwork is endless. Our experts guide you through every step in English.</p>
            <div className="pain-card-footer">✓ Full guidance in English</div>
          </div>
          <div className="pain-card">
            <div className="pain-card-top">
              <div className="pain-card-icon">🏦</div>
              <span className="pain-badge">Bank access</span>
            </div>
            <h3>Banks reject foreigners</h3>
            <p>Spanish banks are cautious with non-residents. We have exclusive agreements with 45+ banks to get you approved.</p>
            <div className="pain-card-footer">✓ 45+ partner banks</div>
          </div>
          <div className="pain-card">
            <div className="pain-card-top">
              <div className="pain-card-icon">💸</div>
              <span className="pain-badge">Costs</span>
            </div>
            <h3>Hidden costs</h3>
            <p>Taxes, fees, insurance — costs add up fast. We give you a full transparent breakdown before you commit to anything.</p>
            <div className="pain-card-footer">✓ 100% transparent pricing</div>
          </div>
        </div>
      </section>
      
      {/* HOW IT WORKS */}
      <section id="como-funciona">
        <p className="section-tag">The process</p>
        <h2>How we get you your mortgage</h2>
        <p className="section-sub">Simple, transparent and fully managed in English from start to finish.</p>
        <div id="steps">
          <div className="step">
            <div className="step-num">1</div>
            <div className="step-body">
              <h3>Free consultation</h3>
              <p>Tell us your situation — where you live, what property you want, your budget. We assess your eligibility at no cost.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">2</div>
            <div className="step-body">
              <h3>We find the best offer</h3>
              <p>We negotiate with 45+ Spanish banks on your behalf and bring you the best conditions available for your profile.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">3</div>
            <div className="step-body">
              <h3>We handle the paperwork</h3>
              <p>NIE, documentation, bank forms — we manage everything. You just review and approve at each stage.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">4</div>
            <div className="step-body">
              <h3>Sign and get your keys</h3>
              <p>We accompany you to the notary — in person or remotely via Power of Attorney. Your Spanish home is ready.</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}