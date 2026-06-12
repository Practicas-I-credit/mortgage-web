export default function Services() {
  return (
    <main>

      {/* HERO */}
      <section id="services-hero">
        <div id="services-hero-content">
          <p className="section-tag-light">Our services</p>
          <h1>Mortgage solutions for every situation</h1>
          <p>From your first home in Spain to refinancing an existing mortgage — we have a solution tailored to your needs.</p>
        </div>
        <span className="page-hero-credit">Madrid, Spain</span>
      </section>

      {/* SERVICES GRID */}
      <section id="services-grid-section">
        <p className="section-tag">What we offer</p>
        <h2>Mortgage solutions for every need</h2>
        <p className="section-sub">Whatever your situation, we have a tailored solution backed by 45+ partner banks.</p>

        <div id="services-grid">
          <div className="service-card">
            <div className="service-icon">🏠</div>
            <h3>Mortgage loans</h3>
            <p>Get the best terms for your primary residence, holiday home, or investment property in Spain. We negotiate with 45+ banks to maximize your savings.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🔄</div>
            <h3>Mortgage switching & subrogation</h3>
            <p>Already have a mortgage in Spain? We help you switch to better terms, reducing your monthly payment and overall financial burden.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">💼</div>
            <h3>Personal loans</h3>
            <p>Tailored, fast and professional financing solutions for your specific needs — whether for renovation, furnishing, or other expenses.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">📊</div>
            <h3>Debt consolidation</h3>
            <p>Combine multiple debts into a single, manageable payment with better terms — we find the solution that fits your situation best.</p>
          </div>
        </div>
      </section>
      {/* WHY CHOOSE US */}
      <section id="why-us">
        <p className="section-tag">Why choose us</p>
        <h2>Everything works in your favor</h2>
        <div id="why-grid">
          <div className="why-card">
            <div className="why-icon-circle">⭐</div>
            <h3>Premium, personalized service</h3>
            <p>Specialized advisors with extensive experience in the Spanish mortgage market.</p>
          </div>
          <div className="why-card">
            <div className="why-icon-circle">⚡</div>
            <h3>Fast response, guaranteed success</h3>
            <p>Quick communication and answers — no waiting weeks to hear back.</p>
          </div>
          <div className="why-card">
            <div className="why-icon-circle">📄</div>
            <h3>We handle all the paperwork</h3>
            <p>From the free initial assessment to the final signing — every step managed for you.</p>
          </div>
          <div className="why-card">
            <div className="why-icon-circle">🤝</div>
            <h3>Access to 45+ banks</h3>
            <p>We have agreements with the largest network of banks in Spain to guarantee you the best mortgage.</p>
          </div>
        </div>
      </section>

    </main>
  )
}