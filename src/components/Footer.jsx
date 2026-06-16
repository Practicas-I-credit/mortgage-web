import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer>
      <span>{t('footer.rights')}</span>
      <Link to="/privacy" id="footer-privacy">{t('footer.privacy')}</Link>
      <div id="footer-copy">
        {t('footer.info')}
      </div>
    </footer>
  )
}