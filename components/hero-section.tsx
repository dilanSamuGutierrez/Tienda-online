import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Shield, Truck, CreditCard } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-card to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">Más de 10,000 clientes satisfechos</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
                Descubre los mejores <span className="text-primary">productos</span> para tu estilo de vida
              </h1>

              <p className="text-xl text-muted-foreground text-pretty max-w-2xl">
                Encuentra todo lo que necesitas en nuestra tienda online. Calidad garantizada, envío rápido y los
                mejores precios del mercado.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-lg px-8">
                <Link href="/tienda">
                  Explorar Tienda
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent" asChild>
                <Link href="/register">Crear Cuenta Gratis</Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              <div className="flex items-center space-x-3 p-4 rounded-lg bg-card border">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <Truck className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Envío Gratis</div>
                  <div className="text-xs text-muted-foreground">En pedidos +$50</div>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-4 rounded-lg bg-card border">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Garantía Total</div>
                  <div className="text-xs text-muted-foreground">30 días devolución</div>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-4 rounded-lg bg-card border">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                  <CreditCard className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Pago Seguro</div>
                  <div className="text-xs text-muted-foreground">SSL Encriptado</div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 p-8">
              <img
                src="/modern-e-commerce-hero-image-with-products-showcas.png"
                alt="Productos destacados"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 bg-background rounded-lg shadow-lg p-4 border">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">Envío Gratis</span>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-background rounded-lg shadow-lg p-4 border">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <span className="text-sm font-medium">Mejor Precio</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
