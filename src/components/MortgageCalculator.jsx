import { useState } from 'react'

export default function MortgageCalculator() {
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
      <p id="glass-title">Mortgage estimate</p>

      <div className="glass-input-row">
        <label>Property value</label>
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
        <label>Term (years)</label>
        <div className="glass-input-wrap">
          <input
            type="number" min="1" max="40" step="1"
            value={plazo}
            onChange={(e) => setPlazo(Number(e.target.value) || 0)}
          />
          <span>yrs</span>
        </div>
      </div>

      <div className="glass-row">
        <span className="glass-label">Down payment (20%)</span>
        <span className="glass-val">{fmt(entrada)}</span>
      </div>
      <div className="glass-row">
        <span className="glass-label">Fixed rate</span>
        <span className="glass-val">3.2%</span>
      </div>

      <div id="glass-result">
        <span>Monthly payment</span>
        <strong>~{fmt(cuota)}</strong>
      </div>
    </div>
  )
}