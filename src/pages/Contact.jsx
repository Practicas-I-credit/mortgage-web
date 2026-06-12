import { useState } from 'react'

export default function Contact() {
  const [enviado, setEnviado] = useState(false)
  const [enviando, setEnviando] = useState(false)
  const [errores, setErrores] = useState({})
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
      nuevosErrores.nombre = 'Name is required'
    } else if (form.nombre.trim().length < 3) {
      nuevosErrores.nombre = 'Name must be at least 3 characters'
    }

    if (!form.email.trim()) {
      nuevosErrores.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nuevosErrores.email = 'Enter a valid email'
    }

    if (form.telefono && !/^[+\d\s]{7,15}$/.test(form.telefono)) {
      nuevosErrores.telefono = 'Enter a valid phone number'
    }

    if (!form.servicio) {
      nuevosErrores.servicio = 'Select a service'
    }

    if (!form.mensaje.trim()) {
      nuevosErrores.mensaje = 'Tell us about your situation'
    } else if (form.mensaje.trim().length < 20) {
      nuevosErrores.mensaje = 'Please add a bit more detail (minimum 20 characters)'
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
      setErrores({ general: 'There was an error sending your message. Please try again or contact us directly.' })
    }
    setEnviando(false)
  }

  return (
    <main>

      {/* HERO */}
      <section id="contact-hero">
        <div id="contact-hero-content">
          <p className="section-tag-light">Get in touch</p>
          <h1>Let's talk about your <span id="hero-accent-light">Spanish mortgage</span></h1>
          <p>Tell us about your situation and we'll get back to you within 24 hours — in English.</p>
        </div>
        <span className="page-hero-credit">Málaga, Spain</span>
      </section>

      {/* BAND */}
      <div id="contact-band">
        <div className="band-item"><span>⏱️</span> Reply within 24h</div>
        <div className="band-item"><span>✅</span> Free consultation</div>
        <div className="band-item"><span>📞</span> +34 910 605 055</div>
        <div className="band-item"><span>📍</span> Madrid, Paseo de la Infanta Isabel 27</div>
      </div>

      {/* CONTENT */}
      <section id="contact-grid">

        {/* INFO */}
        <div id="contact-info">
          <h2>Other ways to reach us</h2>
          <div id="contact-items">
            <a href="https://wa.me/34609452314" className="contact-item contact-whatsapp">
              <img src="/images/WhatsApp.svg" alt="WhatsApp" width="20" height="20" />
              WhatsApp — instant reply
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
            <h3>Office hours</h3>
            <p>Monday to Thursday: 9:00 AM – 6:00 PM</p>
            <p>Friday: 9:00 AM – 3:00 PM</p>
            <p>Saturday and Sunday: closed</p>
            <p id="contact-tz">(Madrid time — CET/CEST)</p>
          </div>

          <div id="contact-address">
            <h3>Visit us</h3>
            <p>Paseo de la Infanta Isabel, 27</p>
            <p>1st floor, exterior left</p>
            <p>28014 — Madrid, Spain</p>
          </div>
        </div>

        {/* FORM */}
        <div id="contact-form-wrap">
          {enviado ? (
            <div id="form-success">
              <span>✅</span>
              <h3>Message received!</h3>
              <p>We'll get back to you within 24 hours. Thank you for reaching out!</p>
            </div>
          ) : (
            <form id="contact-form" onSubmit={handleSubmit} noValidate>

              {errores.general && (
                <div className="error-general">{errores.general}</div>
              )}

              <div className="form-group">
                <label>Full name</label>
                <input
                  type="text" name="nombre"
                  placeholder="Your name"
                  value={form.nombre}
                  onChange={handleChange}
                  className={errores.nombre ? 'input-error' : ''}
                />
                {errores.nombre && <span className="error-msg">{errores.nombre}</span>}
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email" name="email"
                  placeholder="you@email.com"
                  value={form.email}
                  onChange={handleChange}
                  className={errores.email ? 'input-error' : ''}
                />
                {errores.email && <span className="error-msg">{errores.email}</span>}
              </div>

              <div className="form-group">
                <label>Phone / WhatsApp <span className="opcional">(optional)</span></label>
                <input
                  type="tel" name="telefono"
                  placeholder="+1 555 000 0000"
                  value={form.telefono}
                  onChange={handleChange}
                  className={errores.telefono ? 'input-error' : ''}
                />
                {errores.telefono && <span className="error-msg">{errores.telefono}</span>}
              </div>

              <div className="form-group">
                <label>How can we help you?</label>
                <select
                  name="servicio"
                  value={form.servicio}
                  onChange={handleChange}
                  className={errores.servicio ? 'input-error' : ''}
                >
                  <option value="">Select a service</option>
                  <option value="hipoteca">Mortgage loan</option>
                  <option value="subrogacion">Mortgage switching / subrogation</option>
                  <option value="personal">Personal loan</option>
                  <option value="reunificacion">Debt consolidation</option>
                </select>
                {errores.servicio && <span className="error-msg">{errores.servicio}</span>}
              </div>

              <div className="form-group">
                <label>Tell us about your situation</label>
                <textarea
                  name="mensaje" rows="4"
                  placeholder="Are you a US resident or already living in Spain? What's your budget? Any timeline?"
                  value={form.mensaje}
                  onChange={handleChange}
                  className={errores.mensaje ? 'input-error' : ''}
                />
                {errores.mensaje && <span className="error-msg">{errores.mensaje}</span>}
              </div>

              <button type="submit" id="form-submit" disabled={enviando}>
                {enviando ? 'Sending...' : 'Send free inquiry'}
              </button>

            </form>
          )}
        </div>

      </section>
    </main>
  )
}