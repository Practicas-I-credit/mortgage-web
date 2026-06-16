import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function MortgageCalculator() {
  const { t } = useTranslation()
  const [precio, setPrecio] = useState(350000)
  const [plazo, setPlazo] = useState(25)

  const entrada = Math.round(precio * 0.2)
  const capital = precio - entrada
  const tasa = 0.032 / 12
  const meses = plazo * 12
  const cuota = Math.round(
    (capital * tasa * Math.pow(1 + tasa, meses)) /
    (Math.pow(1 + tasa, meses) - 1)
  )

  const fmt = (n) => '€' + n.toLocaleString('en-US')

  return (
    <div id="hero-glass">
      <p id="glass-title">{t('calculator.title')}</p>

      <div className="glass-input-row">
        <label>{t('calculator.propertyValue')}</label>
        <div className="glass-input-wrap">
          <span>€</span>
          <input
            type="number" min="0" step="10000"
            value={precio}
            onChange={(e) => setPrecio(Number(e.target.value) || 0)}
          />
        </div>
      </div>

      <div className="glass-input-row">
        <label>{t('calculator.term')}</label>
        <div className="glass-input-wrap">
          <input
            type="number" min="1" max="40" step="1"
            value={plazo}
            onChange={(e) => setPlazo(Number(e.target.value) || 0)}
          />
          <span>{t('calculator.years')}</span>
        </div>
      </div>

      <div className="glass-row">
        <span className="glass-label">{t('calculator.downPayment')}</span>
        <span className="glass-val">{fmt(entrada)}</span>
      </div>
      <div className="glass-row">
        <span className="glass-label">{t('calculator.fixedRate')}</span>
        <span className="glass-val">3.2%</span>
      </div>

      <div id="glass-result">
        <span>{t('calculator.monthlyPayment')}</span>
        <strong>~{fmt(cuota)}</strong>
      </div>
    </div>
  )
}