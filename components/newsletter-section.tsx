import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ShoppingBag, Users, Award, Headphones } from "lucide-react"

export function NewsletterSection() {
  const categories = [
    {
      name: "Electrónicos",
      icon: ShoppingBag,
      count: "250+ productos",
      color: "bg-blue-500",
    },
    {
      name: "Moda",
      icon: Users,
      count: "180+ productos",
      color: "bg-pink-500",
    },
    {
      name: "Hogar",
      icon: Award,
      count: "320+ productos",
      color: "bg-green-500",
    },
    {
      name: "Deportes",
      icon: Headphones,
      count: "150+ productos",
      color: "bg-orange-500",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Explora nuestras categorías</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Descubre miles de productos organizados en categorías para que encuentres exactamente lo que buscas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1"
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div
                    className={`mx-auto w-16 h-16 ${category.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                    <p className="text-muted-foreground">{category.count}</p>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                  >
                    Ver Productos
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
