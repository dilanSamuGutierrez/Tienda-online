import { Card, CardContent } from "@/components/ui/card"
import { Truck, Shield, Headphones, CreditCard, RefreshCw, Award } from "lucide-react"

const features = [
  {
    icon: Truck,
    title: "Envío Gratis",
    description: "Envío gratuito en pedidos superiores a $50. Entrega rápida y segura.",
  },
  {
    icon: Shield,
    title: "Compra Segura",
    description: "Tus datos están protegidos con encriptación SSL de nivel bancario.",
  },
  {
    icon: Headphones,
    title: "Soporte 24/7",
    description: "Atención al cliente disponible las 24 horas, los 7 días de la semana.",
  },
  {
    icon: CreditCard,
    title: "Pago Fácil",
    description: "Múltiples métodos de pago: tarjetas, PayPal, transferencias.",
  },
  {
    icon: RefreshCw,
    title: "Devoluciones",
    description: "30 días para devoluciones sin preguntas. Proceso simple y rápido.",
  },
  {
    icon: Award,
    title: "Garantía",
    description: "Garantía de calidad en todos nuestros productos. Satisfacción garantizada.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">¿Por qué elegir TiendaOnline?</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Ofrecemos la mejor experiencia de compra con servicios de calidad premium
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-md transition-shadow">
              <CardContent className="p-8 space-y-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground text-pretty">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
