import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function FAQ() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(null)

  const faqs = [
    { q: t('faq.q1.q'), a: t('faq.q1.a') },
    { q: t('faq.q2.q'), a: t('faq.q2.a') },
    { q: t('faq.q3.q'), a: t('faq.q3.a') },
    { q: t('faq.q4.q'), a: t('faq.q4.a') },
    { q: t('faq.q5.q'), a: t('faq.q5.a') },
    { q: t('faq.q6.q'), a: t('faq.q6.a') },
    { q: t('faq.q7.q'), a: t('faq.q7.a') }
  ]

  return (
    <section id="faq">
      <p className="section-tag">{t('faq.tag')}</p>
      <h2>{t('faq.title')}</h2>
      <div id="faq-list">
        {faqs.map((item, i) => (
          <div
            key={i}
            className={`faq-item ${open === i ? 'faq-open' : ''}`}
            onClick={() => setOpen(open === i ? null : i)}
          >
            <div className="faq-question">
              <span>{item.q}</span>
              <span className="faq-icon">{open === i ? '−' : '+'}</span>
            </div>
            {open === i && (
              <p className="faq-answer">{item.a}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}