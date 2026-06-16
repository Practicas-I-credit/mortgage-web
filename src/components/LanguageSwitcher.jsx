import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FlagES, FlagUS, FlagFR, FlagDE } from './Flags'

const languages = [
  { code: 'en', label: 'English', Flag: FlagUS },
  { code: 'es', label: 'Español', Flag: FlagES },
  { code: 'fr', label: 'Français', Flag: FlagFR },
  { code: 'de', label: 'Deutsch', Flag: FlagDE },
]

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const [open, setOpen] = useState(false)

  const current = languages.find((l) => l.code === i18n.language) || languages[0]

  const handleSelect = (code) => {
    i18n.changeLanguage(code)
    setOpen(false)
  }

  return (
    <div id="lang-switcher">
      <button id="lang-trigger" onClick={() => setOpen(!open)} aria-label="Change language">
        <current.Flag />
        <span className="lang-icon">▾</span>
      </button>
      {open && (
        <div id="lang-dropdown">
          {languages.map(({ code, label, Flag }) => (
            <button
              key={code}
              className="lang-option"
              onClick={() => handleSelect(code)}
            >
              <Flag />
              <span>{label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}