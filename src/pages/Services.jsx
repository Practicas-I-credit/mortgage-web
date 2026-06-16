import { useTranslation } from 'react-i18next'
import FAQ from '../components/FAQ'

export default function Services() {
  const { t } = useTranslation()

  return (
    <main>

      {/* HERO */}
      <section id="services-hero">
        <div id="services-hero-content">
          <p className="section-tag-light">{t('services.tag')}</p>
          <h1 className="page-hero-title">{t('services.heroTitle')}</h1>
          <p className="page-hero-text">{t('services.heroSubtitle')}</p>
        </div>
        <span className="page-hero-credit">{t('services.credit')}</span>
      </section>

      {/* SERVICES GRID */}
      <section id="services-grid-section">
        <p className="section-tag">{t('services.gridTag')}</p>
        <h2 className="section-title">{t('services.gridTitle')}</h2>
        <p className="section-sub">{t('services.gridSubtitle')}</p>

        <div id="services-grid">
          <div className="service-card card-simple">
            <div className="service-icon icon-circle">🏠</div>
            <h3 card-simple-title>{t('services.loans.title')}</h3>
            <p card-simple-text>{t('services.loans.text')}</p>
          </div>
          <div className="service-card card-simple">
            <div className="service-icon icon-circle">🔄</div>
            <h3 card-simple-title>{t('services.switching.title')}</h3>
            <p card-simple-text>{t('services.switching.text')}</p>
          </div>
          <div className="service-card card-simple">
            <div className="service-icon icon-circle">💼</div>
            <h3 card-simple-title>{t('services.personal.title')}</h3>
            <p card-simple-text>{t('services.personal.text')}</p>
          </div>
          <div className="service-card card-simple">
            <div className="service-icon icon-circle">📊</div>
            <h3 card-simple-title>{t('services.consolidation.title')}</h3>
            <p card-simple-text>{t('services.consolidation.text')}</p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section id="why-us">
        <p className="section-tag">{t('services.whyTag')}</p>
        <h2 className="section-title section-title-spaced">{t('services.whyTitle')}</h2>
        <div id="why-grid">
          <div className="why-card card-simple">
            <div className="why-icon-circle icon-circle">⭐</div>
            <h3 card-simple-title>{t('services.why1.title')}</h3>
            <p card-simple-text>{t('services.why1.text')}</p>
          </div>
          <div className="why-card card-simple">
            <div className="why-icon-circle icon-circle">⚡</div>
            <h3 card-simple-title>{t('services.why2.title')}</h3>
            <p card-simple-text>{t('services.why2.text')}</p>
          </div>
          <div className="why-card card-simple">
            <div className="why-icon-circle icon-circle">📄</div>
            <h3 card-simple-title>{t('services.why3.title')}</h3>
            <p card-simple-text>{t('services.why3.text')}</p>
          </div>
          <div className="why-card card-simple">
            <div className="why-icon-circle icon-circle">🤝</div>
            <h3 card-simple-title>{t('services.why4.title')}</h3>
            <p card-simple-text>{t('services.why4.text')}</p>
          </div>
        </div>
      </section>

      <FAQ />

    </main>
  )
}