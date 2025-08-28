import { Star, Quote } from "lucide-react"

export function TestimonialsSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Lo que dicen nuestros clientes</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Miles de clientes satisfechos confían en nosotros para sus compras online
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-background rounded-xl p-6 border shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-semibold">
                M
              </div>
              <div className="ml-4">
                <h4 className="font-semibold">María González</h4>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
              </div>
            </div>
            <Quote className="h-6 w-6 text-muted-foreground mb-2" />
            <p className="text-muted-foreground italic">
              "Excelente calidad y envío súper rápido. Definitivamente volveré a comprar."
            </p>
          </div>

          <div className="bg-background rounded-xl p-6 border shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white font-semibold">
                C
              </div>
              <div className="ml-4">
                <h4 className="font-semibold">Carlos Ruiz</h4>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
              </div>
            </div>
            <Quote className="h-6 w-6 text-muted-foreground mb-2" />
            <p className="text-muted-foreground italic">
              "Atención al cliente excepcional y productos de primera calidad."
            </p>
          </div>

          <div className="bg-background rounded-xl p-6 border shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center text-white font-semibold">
                A
              </div>
              <div className="ml-4">
                <h4 className="font-semibold">Ana López</h4>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
              </div>
            </div>
            <Quote className="h-6 w-6 text-muted-foreground mb-2" />
            <p className="text-muted-foreground italic">
              "Precios increíbles y productos exactamente como se describen. Muy recomendado."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
