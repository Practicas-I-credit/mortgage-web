import { useState } from 'react'

const faqs = [
  {
    q: "Can I get a mortgage in Spain if I live in the United States?",
    a: "Yes. We work with US residents who want to buy property in Spain without living here. We handle the entire process remotely — you only need to travel to Spain for the final signing at the notary."
  },
  {
    q: "I'm already living in Spain as an expat — can you help me too?",
    a: "Absolutely. Whether you're a US resident abroad or already living in Spain, we offer the same full service: finding the best mortgage, handling all paperwork, and accompanying you through every step."
  },
  {
    q: "What are the basic requirements to get a mortgage in Spain?",
    a: "You must be of legal age, have a valid ID, demonstrate stable income or employment, have less than 35-40% of your income committed to debt repayment, and have no outstanding defaults or delinquency records."
  },
  {
    q: "How much can I borrow as a non-resident?",
    a: "Spanish banks typically finance up to 70-80% of the property value for non-residents. You'll need to cover the remaining 20-30% as a down payment, plus around 10% extra for taxes and closing costs."
  },
  {
    q: "How long does the process take?",
    a: "We can give you a viability assessment within 15-20 minutes of your first call. From there, the full process typically takes 4-8 weeks depending on the bank and documentation."
  },
  {
    q: "Do I need to travel to Spain to sign?",
    a: "Yes. The final signing at the notary requires your physical presence in Spain. However, all prior steps — documentation, approval, negotiation — are handled remotely so you only need to make one trip."
  },
  {
    q: "Is the initial consultation really free?",
    a: "Yes, completely free and with no obligation. We assess your situation, tell you what's possible, and only move forward if you decide to proceed."
  }
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section id="faq">
      <p className="section-tag">FAQ</p>
      <h2>Frequently asked questions</h2>
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