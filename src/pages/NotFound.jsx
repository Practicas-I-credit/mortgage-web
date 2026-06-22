import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function NotFound() {
  const { t, i18n } = useTranslation()

  useEffect(() => {
    document.title = t('pageTitle.notFound')
  }, [i18n.language])

  return (
    <main id="not-found">
      <div id="not-found-content">
        <span id="not-found-code">404</span>
        <h1>{t('notFound.title')}</h1>
        <p>{t('notFound.text')}</p>
        <Link to="/" id="not-found-btn">{t('notFound.btn')}</Link>
      </div>
    </main>
  )
}