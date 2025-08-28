"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "¿Cuál es el tiempo de entrega de los productos?",
    answer:
      "El tiempo de entrega estándar es de 3-5 días hábiles para envíos nacionales y 7-14 días para envíos internacionales. Ofrecemos envío express de 1-2 días por un costo adicional.",
  },
  {
    question: "¿Puedo devolver un producto si no estoy satisfecho?",
    answer:
      "Sí, aceptamos devoluciones dentro de los 30 días posteriores a la compra. El producto debe estar en condiciones originales y con el empaque original. Los gastos de envío de devolución corren por cuenta del cliente, excepto en casos de productos defectuosos.",
  },
  {
    question: "¿Qué métodos de pago aceptan?",
    answer:
      "Aceptamos tarjetas de crédito y débito (Visa, MasterCard, American Express), PayPal, transferencias bancarias y pagos en efectivo contra entrega en áreas seleccionadas.",
  },
  {
    question: "¿Los productos tienen garantía?",
    answer:
      "Todos nuestros productos incluyen garantía del fabricante. La duración varía según el producto: electrónicos (1-2 años), accesorios (6-12 meses). También ofrecemos garantía extendida opcional.",
  },
  {
    question: "¿Cómo puedo rastrear mi pedido?",
    answer:
      "Una vez que tu pedido sea enviado, recibirás un email con el número de seguimiento. Puedes rastrear tu pedido en nuestra página de seguimiento o directamente en el sitio web de la empresa de mensajería.",
  },
  {
    question: "¿Hacen envíos internacionales?",
    answer:
      "Sí, enviamos a más de 50 países. Los costos y tiempos de envío varían según el destino. Los impuestos y aranceles internacionales son responsabilidad del cliente.",
  },
  {
    question: "¿Puedo modificar o cancelar mi pedido?",
    answer:
      "Puedes modificar o cancelar tu pedido dentro de las primeras 2 horas después de realizarlo. Una vez que el pedido esté en proceso de preparación, no podremos hacer cambios.",
  },
  {
    question: "¿Ofrecen descuentos por compras al por mayor?",
    answer:
      "Sí, ofrecemos descuentos especiales para compras al por mayor. Contacta a nuestro equipo de ventas corporativas para obtener una cotización personalizada.",
  },
]

export function ContactFAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <section className="space-y-8">
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-2">
          <HelpCircle className="h-8 w-8 text-primary" />
          <h2 className="text-3xl font-bold">Preguntas Frecuentes</h2>
        </div>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Encuentra respuestas rápidas a las preguntas más comunes sobre nuestros productos y servicios.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <Card key={index}>
            <Collapsible open={openItems.includes(index)} onOpenChange={() => toggleItem(index)}>
              <CollapsibleTrigger asChild>
                <CardHeader className="cursor-pointer hover:bg-muted/50 transition-colors">
                  <CardTitle className="flex items-center justify-between text-left">
                    <span className="text-lg font-medium pr-4">{faq.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 text-muted-foreground transition-transform flex-shrink-0 ${
                        openItems.includes(index) ? "transform rotate-180" : ""
                      }`}
                    />
                  </CardTitle>
                </CardHeader>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              </CollapsibleContent>
            </Collapsible>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Card className="max-w-2xl mx-auto">
          <CardContent className="p-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">¿No encontraste lo que buscabas?</h3>
              <p className="text-muted-foreground">
                Nuestro equipo de soporte está aquí para ayudarte con cualquier pregunta adicional.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="text-center">
                  <p className="font-medium">Chat en Vivo</p>
                  <p className="text-sm text-muted-foreground">Disponible 24/7</p>
                </div>
                <div className="text-center">
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">soporte@tiendaonline.com</p>
                </div>
                <div className="text-center">
                  <p className="font-medium">Teléfono</p>
                  <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
