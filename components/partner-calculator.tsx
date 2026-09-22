"use client"

import * as React from "react"
import { Calculator, TrendingUp } from "lucide-react"

export function PartnerCalculator() {
  const [retailPrice, setRetailPrice] = React.useState(59)
  const [activeSites, setActiveSites] = React.useState(100)
  const recurringRevenue = retailPrice * activeSites
  const wholesaleCost = 25 * activeSites
  const grossMargin = recurringRevenue - wholesaleCost

  return (
    <div className="rounded-3xl border border-primary/20 bg-card/70 p-6 shadow-[0_0_60px_-20px_rgba(6,160,199,0.35)] md:p-8">
      <div className="mb-8 flex items-start justify-between gap-4">
        <div>
          <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Calculator className="h-5 w-5" />
          </div>
          <h3 className="text-2xl">Model your wholesale spread</h3>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">Use your own retail price and customer volume to see the recurring gross margin opportunity.</p>
        </div>
        <TrendingUp className="hidden h-6 w-6 text-secondary sm:block" />
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="space-y-3 text-sm font-medium">
          <span className="flex justify-between">Your retail monthly price <strong className="text-primary">${retailPrice}</strong></span>
          <input aria-label="Your retail monthly price" type="range" min="39" max="149" step="1" value={retailPrice} onChange={(event) => setRetailPrice(Number(event.target.value))} className="w-full accent-[#06a0c7]" />
        </label>
        <label className="space-y-3 text-sm font-medium">
          <span className="flex justify-between">Active websites <strong className="text-primary">{activeSites}</strong></span>
          <input aria-label="Active websites" type="range" min="1" max="250" step="1" value={activeSites} onChange={(event) => setActiveSites(Number(event.target.value))} className="w-full accent-[#06a0c7]" />
        </label>
      </div>
      <div className="mt-8 grid gap-3 sm:grid-cols-3">
        <Metric label="Retail revenue / month" value={`$${recurringRevenue.toLocaleString()}`} />
        <Metric label="Wholesale cost / month" value={`$${wholesaleCost.toLocaleString()}`} />
        <Metric label="Recurring gross margin" value={`$${grossMargin.toLocaleString()}`} highlight />
      </div>
      <p className="mt-5 text-xs leading-5 text-muted-foreground">Illustrative example only. Actual results depend on your pricing and active customer count. Cyberhawk wholesale pricing is $25 per active website each month.</p>
    </div>
  )
}

function Metric({ label, value, highlight = false }: { label: string; value: string; highlight?: boolean }) {
  return <div className={`rounded-2xl border p-4 ${highlight ? "border-secondary/40 bg-secondary/10" : "border-border/70 bg-background/50"}`}><p className="text-xs text-muted-foreground">{label}</p><p className={`mt-2 text-2xl font-display font-bold ${highlight ? "text-secondary" : "text-foreground"}`}>{value}</p></div>
}

export default PartnerCalculator
