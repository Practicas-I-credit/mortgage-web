import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function Contact() {
  const { t } = useTranslation()
  const [enviado, setEnviado] = useState(false)
  const [enviando, setEnviando] = useState(false)
  const [errores, setErrores] = useState({})
  const [terms, setTerms] = useState(false)
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    telefono: '',
    servicio: '',
    mensaje: ''
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setErrores({ ...errores, [e.target.name]: '' })
  }

  const validar = () => {
    const nuevosErrores = {}

    if (!form.nombre.trim()) {
      nuevosErrores.nombre = t('contact.errorName')
    } else if (form.nombre.trim().length < 3) {
      nuevosErrores.nombre = t('contact.errorNameMin')
    }

    if (!form.email.trim()) {
      nuevosErrores.email = t('contact.errorEmailRequired')
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nuevosErrores.email = t('contact.errorEmailInvalid')
    }

    if (form.telefono && !/^[+\d\s]{7,15}$/.test(form.telefono)) {
      nuevosErrores.telefono = t('contact.errorPhone')
    }

    if (!form.servicio) {
      nuevosErrores.servicio = t('contact.errorService')
    }

    if (!form.mensaje.trim()) {
      nuevosErrores.mensaje = t('contact.errorMessageRequired')
    } else if (form.mensaje.trim().length < 20) {
      nuevosErrores.mensaje = t('contact.errorMessageMin')
    }

    if (!terms) {
      nuevosErrores.terms = t('contact.errorTerms')
    }

    return nuevosErrores
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const erroresValidacion = validar()

    if (Object.keys(erroresValidacion).length > 0) {
      setErrores(erroresValidacion)
      return
    }

    setEnviando(true)
    const data = new FormData()
    Object.entries(form).forEach(([key, value]) => data.append(key, value))

    const response = await fetch('https://formspree.io/f/mdavwyqd', {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' }
    })

    if (response.ok) {
      setEnviado(true)
    } else {
      setErrores({ general: t('contact.errorGeneral') })
    }
    setEnviando(false)
  }

  return (
    <main>

      {/* HERO */}
      <section id="contact-hero">
        <div id="contact-hero-content">
          <p className="section-tag-light">{t('contact.tag')}</p>
          <h1 className="page-hero-title">{t('contact.heroTitle1')} <span id="hero-accent-light">{t('contact.heroAccent')}</span></h1>
          <p className="page-hero-text">{t('contact.heroSubtitle')}</p>
        </div>
        <span className="page-hero-credit">{t('contact.credit')}</span>
      </section>

      {/* BAND */}
      <div className="trust-band">
        <div className="band-item"><span>⏱️</span> {t('contact.bandReply')}</div>
        <div className="band-item"><span>✅</span> {t('contact.bandFree')}</div>
        <div className="band-item"><span>📞</span> +34 910 605 055</div>
        <div className="band-item"><span>📍</span> {t('trustBand.address')}</div>
      </div>

      {/* CONTENT */}
      <section id="contact-grid">

        {/* INFO */}
        <div id="contact-info">
          <h2>{t('contact.otherWays')}</h2>
          <div id="contact-items">
            <a href="https://wa.me/34609452314" className="contact-item contact-whatsapp">
              <img src="/images/WhatsApp.svg" alt="WhatsApp" width="20" height="20" />
              {t('contact.whatsapp')}
            </a>
            <a href="tel:+34910605055" className="contact-item contact-tel">
              📞 +34 910 605 055
            </a>
            <a href="tel:+34609452314" className="contact-item contact-tel">
              📱 +34 609 452 314
            </a>
            <a href="mailto:info@i-credit.es" className="contact-item contact-email">
              ✉️ info@i-credit.es
            </a>
          </div>

          <div id="contact-hours">
            <h3>{t('contact.hoursTitle')}</h3>
            <p>{t('contact.hours1')}</p>
            <p>{t('contact.hours2')}</p>
            <p>{t('contact.hours3')}</p>
            <p id="contact-tz">{t('contact.hoursTz')}</p>
          </div>

          <div id="contact-address">
            <h3>{t('contact.addressTitle')}</h3>
            <p>{t('contact.address1')}</p>
            <p>{t('contact.address2')}</p>
            <p>{t('contact.address3')}</p>
          </div>
        </div>

        {/* FORM */}
        <div id="contact-form-wrap">
          {enviado ? (
            <div id="form-success">
              <span>✅</span>
              <h3>{t('contact.successTitle')}</h3>
              <p>{t('contact.successText')}</p>
            </div>
          ) : (
            <form id="contact-form" onSubmit={handleSubmit} noValidate>

              {errores.general && (
                <div className="error-general">{errores.general}</div>
              )}

              <div className="form-group">
                <label>{t('contact.formName')}</label>
                <input
                  type="text" name="nombre"
                  placeholder={t('contact.formNamePlaceholder')}
                  value={form.nombre}
                  onChange={handleChange}
                  className={errores.nombre ? 'input-error' : ''}
                />
                {errores.nombre && <span className="error-msg">{errores.nombre}</span>}
              </div>

              <div className="form-group">
                <label>{t('contact.formEmail')}</label>
                <input
                  type="email" name="email"
                  placeholder={t('contact.formEmailPlaceholder')}
                  value={form.email}
                  onChange={handleChange}
                  className={errores.email ? 'input-error' : ''}
                />
                {errores.email && <span className="error-msg">{errores.email}</span>}
              </div>

              <div className="form-group">
                <label>{t('contact.formPhone')} <span className="opcional">{t('contact.formOptional')}</span></label>
                <input
                  type="tel" name="telefono"
                  placeholder={t('contact.formPhonePlaceholder')}
                  value={form.telefono}
                  onChange={handleChange}
                  className={errores.telefono ? 'input-error' : ''}
                />
                {errores.telefono && <span className="error-msg">{errores.telefono}</span>}
              </div>

              <div className="form-group">
                <label>{t('contact.formService')}</label>
                <select
                  name="servicio"
                  value={form.servicio}
                  onChange={handleChange}
                  className={errores.servicio ? 'input-error' : ''}
                >
                  <option value="">{t('contact.formServiceSelect')}</option>
                  <option value="hipoteca">{t('contact.formServiceMortgage')}</option>
                  <option value="subrogacion">{t('contact.formServiceSwitching')}</option>
                  <option value="personal">{t('contact.formServicePersonal')}</option>
                  <option value="reunificacion">{t('contact.formServiceConsolidation')}</option>
                </select>
                {errores.servicio && <span className="error-msg">{errores.servicio}</span>}
              </div>

              <div className="form-group">
                <label>{t('contact.formMessage')}</label>
                <textarea
                  name="mensaje" rows="4"
                  placeholder={t('contact.formMessagePlaceholder')}
                  value={form.mensaje}
                  onChange={handleChange}
                  className={errores.mensaje ? 'input-error' : ''}
                />
                {errores.mensaje && <span className="error-msg">{errores.mensaje}</span>}
              </div>

              <div className="form-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={terms}
                    onChange={(e) => {
                      setTerms(e.target.checked)
                      setErrores({ ...errores, terms: '' })
                    }}
                  />
                  {t('contact.formTerms1')}{' '}
                  <a href="/privacy" target="_blank" rel="noopener noreferrer">{t('contact.formTerms2')}</a>
                  {' '}{t('contact.formTerms3')}
                </label>
                {errores.terms && <span className="error-msg">{errores.terms}</span>}
              </div>

              <button type="submit" id="form-submit" disabled={enviando}>
                {enviando ? t('contact.formSending') : t('contact.formSubmit')}
              </button>

            </form>
          )}
        </div>

      </section>
    </main>
  )
}