import MortgageCalculator from '../components/MortgageCalculator'

export default function Home() {
  return (
    <main>

      {/* HERO */}
      <section id="hero">

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
        <MortgageCalculator />
        <span id="hero-credit">Costa del Sol, Spain</span>
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
            <div className="pain-icon-circle">🗺️</div>
            <h3>You live far away</h3>
            <p>Managing a mortgage process from the US is overwhelming. We handle everything remotely so you don't have to travel until signing day.</p>
          </div>
          <div className="pain-card">
            <div className="pain-icon-circle">📋</div>
            <h3>Spanish bureaucracy</h3>
            <p>NIE, notary, taxes, bank requirements — the paperwork is endless. Our experts guide you through every step in English.</p>
          </div>
          <div className="pain-card">
            <div className="pain-icon-circle">🏦</div>
            <h3>Banks reject foreigners</h3>
            <p>Spanish banks are cautious with non-residents. We have exclusive agreements with 45+ banks to get you approved.</p>
          </div>
          <div className="pain-card">
            <div className="pain-icon-circle">💸</div>
            <h3>Hidden costs</h3>
            <p>Taxes, fees, insurance — costs add up fast. We give you a full transparent breakdown before you commit to anything.</p>
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
              <p>We accompany you to the notary for the final signing. Your Spanish home is ready.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials">
        <p className="section-tag">What our clients say</p>
        <h2>Trusted by clients buying in Spain</h2>
        <div id="testimonials-grid">
          <div className="testimonial-card">
            <div className="quote-mark">"</div>
            <p className="testimonial-text">The team managed my entire home purchase process. Without their help, getting the mortgage approved on the terms I needed wouldn't have been possible. Truly grateful for their patience and dedication.</p>
            <div className="testimonial-author">
              <p className="author-name">Rafael M.</p>
              <p className="author-location">Madrid, Spain</p>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="quote-mark">"</div>
            <p className="testimonial-text">100% recommended. Excellent professionals who guide you through the entire mortgage process from start to finish, always finding the best terms available. Efficient, competitive, and always clear about every step.</p>
            <div className="testimonial-author">
              <p className="author-name">Boris R.</p>
              <p className="author-location">Madrid, Spain</p>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="quote-mark">"</div>
            <p className="testimonial-text">They handled everything with great professionalism, even in a complex case. We stayed in close contact throughout the process and they always looked for the best possible solution for my situation.</p>
            <div className="testimonial-author">
              <p className="author-name">Roberto D.</p>
              <p className="author-location">Madrid, Spain</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="cta-final">
        <h2>Ready to make Spain your home?</h2>
        <p>Get a free, no-obligation consultation with our English-speaking mortgage experts today.</p>
        <div id="cta-btns">
          <a href="/contact" id="btn-primary">Get a free quote</a>
          <a href="https://wa.me/34609452314" id="btn-whatsapp" target="_blank" rel="noopener noreferrer">
            <img src="/images/WhatsApp.svg" alt="WhatsApp" width="20" height="20" />
            Chat on WhatsApp
          </a>
        </div>
      </section>

    </main>
  )
}