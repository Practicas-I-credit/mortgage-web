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
  const cuota = meses > 0 && capital > 0
    ? Math.round(
      (capital * tasa * Math.pow(1 + tasa, meses)) /
      (Math.pow(1 + tasa, meses) - 1)
    )
    : 0

  const fmt = (n) => '€' + n.toLocaleString('en-US')

  const handlePrecioChange = (e) => {
    const val = e.target.value.replace(/^0+(?=\d)/, '')
    setPrecio(val === '' ? 0 : Number(val))
  }

  const handlePlazoChange = (e) => {
    const val = e.target.value.replace(/^0+(?=\d)/, '')
    setPlazo(val === '' ? 0 : Number(val))
  }

  return (
    <div id="hero-glass">
      <p id="glass-title">{t('calculator.title')}</p>

      <div className="glass-input-row">
        <label htmlFor="calc-precio">{t('calculator.propertyValue')}</label>
        <div className="glass-input-wrap">
          <span>€</span>
          <input
            id="calc-precio"
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            value={precio === 0 ? '' : precio}
            onChange={handlePrecioChange}
            onFocus={(e) => e.target.select()}
            aria-label={t('calculator.propertyValue')}
          />
        </div>
      </div>

      <div className="glass-input-row">
        <label htmlFor="calc-plazo">{t('calculator.term')}</label>
        <div className="glass-input-wrap">
          <input
            id="calc-plazo"
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            value={plazo === 0 ? '' : plazo}
            onChange={handlePlazoChange}
            onFocus={(e) => e.target.select()}
            aria-label={t('calculator.term')}
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