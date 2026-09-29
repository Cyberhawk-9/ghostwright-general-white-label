import type { Metadata } from "next"
import Link from "next/link"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { InlineContactForm } from "@/components/inline-contact-form"
import { BRAND } from "@/lib/brand"
import { OFFER } from "@/lib/offer"

export const metadata: Metadata = {
  title: `Partner Agreement Summary | ${BRAND.short}`,
  description: "Key terms at a glance: fees, timelines, revisions, billing, ownership, cancellation, and buyout.",
  openGraph: {
    title: `Partner Agreement Summary | ${BRAND.short}`,
    description: "Key terms at a glance: fees, timelines, revisions, billing, ownership, cancellation, and buyout.",
  },
}

const terms = [
  {
    topic: "Setup fee",
    summary: `$${OFFER.setupFee} per site, invoiced when the intake arrives, non-refundable once work begins.`,
  },
  {
    topic: "Monthly fee",
    summary: `$${OFFER.monthlyFee} per active site, starting the 1st of the month after go-live.`,
  },
  {
    topic: "First version",
    summary: `${OFFER.firstVersion} from greenlight.`,
  },
  {
    topic: "Revisions",
    summary: `${OFFER.revisionRounds} rounds, ${OFFER.revisionTurnaround} turnaround, $${OFFER.extraRound} per extra round.`,
  },
  {
    topic: "Edits",
    summary: `Content edits within ${OFFER.editTurnaround}.`,
  },
  {
    topic: "Billing",
    summary: `One bundled invoice on the ${OFFER.invoiceDay}, due by the ${OFFER.dueDay}, $${OFFER.lateFee} late fee after the ${OFFER.lateAfterDay}.`,
  },
  {
    topic: "Unpaid clients",
    summary: "Report the site before the due date; its fee is removed and it follows the 30/60-day schedule.",
  },
  {
    topic: "Ownership",
    summary: `Clients keep their domain and content. ${BRAND.short} keeps the source code.`,
  },
  {
    topic: "Non-solicitation",
    summary: "We don't solicit, contact, or upsell your clients, during the agreement and for 12 months after.",
  },
  {
    topic: "Cancellation",
    summary: "Any site, anytime, effective at the end of the month.",
  },
  {
    topic: "Buyout",
    summary: "Available at any time; pricing in the agreement.",
  },
  {
    topic: "Fee changes",
    summary: `${OFFER.feeChangeNoticeDays} days' written notice.`,
  },
  {
    topic: "Governing law",
    summary: "Arizona.",
  },
]

export default function PartnerAgreementPage() {
  return (
    <div className="w-full">
      <div className="flex flex-col min-h-screen max-w-7xl mx-auto px-6 md:px-12">
        <section className="container py-20 md:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
              Partner Agreement summary
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every partner signs a short Partner Agreement. This page summarizes the key terms. The signed
              agreement controls.
            </p>
          </div>
        </section>

        <section className="container pb-16">
          <div className="max-w-3xl mx-auto">
            <Card className="bg-card/50">
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Topic</TableHead>
                      <TableHead>Summary</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {terms.map((row) => (
                      <TableRow key={row.topic}>
                        <TableCell className="font-medium whitespace-normal">{row.topic}</TableCell>
                        <TableCell className="whitespace-normal text-muted-foreground">{row.summary}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="container pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <Button size="lg" asChild>
              <Link href="/contact">
                Request the Partner Agreement <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        <InlineContactForm />
      </div>
    </div>
  )
}
