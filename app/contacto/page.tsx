"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"
import { ContactFAQ } from "@/components/contact-faq"
import { Breadcrumbs } from "@/components/breadcrumbs"

export default function ContactoPage() {
  const breadcrumbItems = [
    { label: "Inicio", href: "/" },
    { label: "Contacto", href: "/contacto" },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={breadcrumbItems} />

        {/* Page Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-3xl lg:text-4xl font-bold text-balance">Contáctanos</h1>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Ponte en contacto con nosotros y te responderemos lo antes posible.
          </p>
        </div>

        {/* Contact Form and Info */}
        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          <div>
            <ContactInfo />
          </div>
        </div>

        {/* FAQ Section */}
        <ContactFAQ />
      </main>

      <Footer />
    </div>
  )
}
