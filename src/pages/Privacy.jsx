import { useTranslation } from 'react-i18next'

export default function Privacy() {
  const { t } = useTranslation()

  return (
    <main>
      <section id="privacy">
        <h1>{t('privacy.title')}</h1>
        <p className="privacy-date">{t('privacy.lastUpdated')}</p>

        <h2>{t('privacy.s1Title')}</h2>
        <p>{t('privacy.s1Text')} <a href="mailto:info@i-credit.es">info@i-credit.es</a></p>

        <h2>{t('privacy.s2Title')}</h2>
        <p>{t('privacy.s2Text')}</p>

        <h2>{t('privacy.s3Title')}</h2>
        <p>{t('privacy.s3Text')}</p>

        <h2>{t('privacy.s4Title')}</h2>
        <p>{t('privacy.s4Text')}</p>

        <h2>{t('privacy.s5Title')}</h2>
        <p>{t('privacy.s5Text')}</p>

        <h2>{t('privacy.s6Title')}</h2>
        <p>{t('privacy.s6Text')} <a href="mailto:info@i-credit.es">info@i-credit.es</a></p>

        <h2>{t('privacy.s7Title')}</h2>
        <p>{t('privacy.s7Text')}</p>

        <h2>{t('privacy.s8Title')}</h2>
        <p>{t('privacy.s8Text')} <a href="mailto:info@i-credit.es">info@i-credit.es</a> {t('privacy.s8Text2')}</p>
      </section>
    </main>
  )
}