import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export default function About() {
  const { t, i18n } = useTranslation()

  useEffect(() => {
    document.title = t('pageTitle.about')
  }, [i18n.language])

  return (
    <main>

      {/* HERO */}
      <section id="about-hero">
        <div id="about-hero-content">
          <p className="section-tag-light">{t('about.tag')}</p>
          <h1 className="page-hero-title">{t('about.heroTitle')}</h1>
          <p className="page-hero-text">{t('about.heroSubtitle')}</p>
        </div>
        <span className="page-hero-credit">{t('about.credit')}</span>
      </section>

      {/* INTRO */}
      <section id="about-intro">
        <div id="about-intro-text">
          <p className="section-tag">{t('about.introTag')}</p>
          <h2>{t('about.introTitle')}</h2>
          <p>{t('about.introText1')}</p>
          <p>{t('about.introText2')}</p>
        </div>
        <div id="about-intro-stats">
          <div className="intro-stat">
            <span className="intro-stat-num">45+</span>
            <span className="intro-stat-label">{t('about.statBanks')}</span>
          </div>
          <div className="intro-stat">
            <span className="intro-stat-num">20+</span>
            <span className="intro-stat-label">{t('about.statYears')}</span>
          </div>
          <div className="intro-stat">
            <span className="intro-stat-num">98%</span>
            <span className="intro-stat-label">{t('about.statApproval')}</span>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section id="about-values">
        <p className="section-tag">{t('about.valuesTag')}</p>
        <h2 className="section-title section-title-spaced">{t('about.valuesTitle')}</h2>
        <div id="values-grid">
          <div className="value-card card-simple">
            <div className="value-icon-circle icon-circle">🌍</div>
            <h3 card-simple-title>{t('about.value1.title')}</h3>
            <p card-simple-text>{t('about.value1.text')}</p>
          </div>
          <div className="value-card card-simple">
            <div className="value-icon-circle icon-circle">🔍</div>
            <h3 card-simple-title>{t('about.value2.title')}</h3>
            <p card-simple-text>{t('about.value2.text')}</p>
          </div>
          <div className="value-card card-simple">
            <div className="value-icon-circle icon-circle">🏦</div>
            <h3 card-simple-title>{t('about.value3.title')}</h3>
            <p card-simple-text>{t('about.value3.text')}</p>
          </div>
          <div className="value-card card-simple">
            <div className="value-icon-circle icon-circle">📞</div>
            <h3 card-simple-title>{t('about.value4.title')}</h3>
            <p card-simple-text>{t('about.value4.text')}</p>
          </div>
        </div>
      </section>

    </main>
  )
}