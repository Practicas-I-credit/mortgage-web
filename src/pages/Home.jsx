import { useTranslation } from 'react-i18next'
import MortgageCalculator from '../components/MortgageCalculator'

export default function Home() {
  const { t } = useTranslation()

  return (
    <main>

      {/* HERO */}
      <section id="hero">
        <div id="hero-content">
          <div id="hero-badge">
            🏦 {t('hero.badge')}
          </div>
          <h1>{t('hero.title1')} <span id="hero-accent">{t('hero.titleAccent')}</span>,<br />{t('hero.title2')}</h1>
          <p>{t('hero.subtitle')}</p>
          <div id="hero-btns">
            <a href="/contact" id="btn-primary">{t('hero.btnPrimary')}</a>
            <a href="/services" id="btn-secondary">{t('hero.btnSecondary')}</a>
          </div>
          <p id="hero-note">✓ {t('hero.note')} &nbsp;·&nbsp; ✓ {t('hero.note2')} &nbsp;·&nbsp; ✓ {t('hero.note3')}</p>
        </div>

        {/* GLASS CARD */}
        <MortgageCalculator />

        <span id="hero-credit">{t('hero.credit')}</span>
      </section>

      {/* TRUST BAND */}
      <div className="trust-band">
        <div className="band-item"><span>✅</span> {t('trustBand.approval')}</div>
        <div className="band-item"><span>🏦</span> {t('trustBand.banks')}</div>
        <div className="band-item"><span>📞</span> {t('trustBand.phone')}</div>
        <div className="band-item"><span>📍</span> {t('trustBand.address')}</div>
      </div>

      {/* STATS */}
      <div id="stats">
        <div className="stat-card">
          <span className="stat-num">98%</span>
          <span className="stat-label">{t('stats.approvalLabel')}</span>
        </div>
        <div className="stat-card">
          <span className="stat-num">45+</span>
          <span className="stat-label">{t('stats.banksLabel')}</span>
        </div>
        <div className="stat-card">
          <span className="stat-num">20+</span>
          <span className="stat-label">{t('stats.yearsLabel')}</span>
        </div>
      </div>

      {/* PAIN POINTS */}
      <section id="pain-points">
        <p className="section-tag">{t('painPoints.tag')}</p>
        <h2 className="section-title">{t('painPoints.title')}</h2>
        <p className="section-sub">{t('painPoints.subtitle')}</p>
        <div id="pain-grid">
          <div className="pain-card card-simple">
            <div className="pain-icon-circle icon-circle">🗺️</div>
            <h3 className="card-simple-title">{t('painPoints.distance.title')}</h3>
            <p card-simple-text>{t('painPoints.distance.text')}</p>
          </div>
          <div className="pain-card card-simple">
            <div className="pain-icon-circle icon-circle">📋</div>
            <h3 className="card-simple-title">{t('painPoints.paperwork.title')}</h3>
            <p card-simple-text>{t('painPoints.paperwork.text')}</p>
          </div>
          <div className="pain-card card-simple">
            <div className="pain-icon-circle icon-circle">🏦</div>
            <h3 className="card-simple-title">{t('painPoints.banks.title')}</h3>
            <p card-simple-text>{t('painPoints.banks.text')}</p>
          </div>
          <div className="pain-card card-simple">
            <div className="pain-icon-circle icon-circle">💸</div>
            <h3 className="card-simple-title">{t('painPoints.costs.title')}</h3>
            <p card-simple-text>{t('painPoints.costs.text')}</p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="como-funciona">
        <p className="section-tag">{t('howItWorks.tag')}</p>
        <h2 className="section-title">{t('howItWorks.title')}</h2>
        <p className="section-sub">{t('howItWorks.subtitle')}</p>
        <div id="steps">
          <div className="step">
            <div className="step-num icon-circle">1</div>
            <div className="step-body">
              <h3>{t('howItWorks.step1.title')}</h3>
              <p>{t('howItWorks.step1.text')}</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num icon-circle">2</div>
            <div className="step-body">
              <h3>{t('howItWorks.step2.title')}</h3>
              <p>{t('howItWorks.step2.text')}</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num icon-circle">3</div>
            <div className="step-body">
              <h3>{t('howItWorks.step3.title')}</h3>
              <p>{t('howItWorks.step3.text')}</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num icon-circle">4</div>
            <div className="step-body">
              <h3>{t('howItWorks.step4.title')}</h3>
              <p>{t('howItWorks.step4.text')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials">
        <p className="section-tag">{t('testimonials.tag')}</p>
        <h2 className="section-title section-title-spaced">{t('testimonials.title')}</h2>
        <div id="testimonials-grid">
          <div className="testimonial-card">
            <div className="quote-mark">"</div>
            <p className="testimonial-text">{t('testimonials.rafael.text')}</p>
            <div className="testimonial-author">
              <p className="author-name">Rafael M.</p>
              <p className="author-location">{t('testimonials.rafael.location')}</p>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="quote-mark">"</div>
            <p className="testimonial-text">{t('testimonials.boris.text')}</p>
            <div className="testimonial-author">
              <p className="author-name">Boris R.</p>
              <p className="author-location">{t('testimonials.boris.location')}</p>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="quote-mark">"</div>
            <p className="testimonial-text">{t('testimonials.roberto.text')}</p>
            <div className="testimonial-author">
              <p className="author-name">Roberto D.</p>
              <p className="author-location">{t('testimonials.roberto.location')}</p>
            </div>
          </div>
        </div>
        <a href="https://g.co/kgs/woMS9Dy"
          target="_blank"
          rel="noopener noreferrer"
          id="google-reviews-link"
        >
          {t('testimonials.googleLink')} →
        </a>
      </section>

      {/* CTA FINAL */}
      <section id="cta-final">
        <h2>{t('ctaFinal.title')}</h2>
        <p>{t('ctaFinal.subtitle')}</p>
        <div id="cta-btns">
          <a href="/contact" id="btn-primary">{t('hero.btnPrimary')}</a>
          <a href="https://wa.me/34609452314" id="btn-whatsapp" target="_blank" rel="noopener noreferrer">
            <img src="/images/WhatsApp.svg" alt="WhatsApp" width="20" height="20" />
            {t('ctaFinal.whatsapp')}
          </a>
        </div>
      </section>

    </main>
  )
}