import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart, Heart } from "lucide-react"
import Link from "next/link"

const featuredProducts = [
  {
    id: 1,
    name: "Smartphone Premium",
    price: 899,
    originalPrice: 1099,
    rating: 4.8,
    reviews: 124,
    image: "/premium-smartphone-product-photo.png",
    badge: "Bestseller",
    category: "Tecnología",
  },
  {
    id: 2,
    name: "Auriculares Inalámbricos",
    price: 199,
    originalPrice: 249,
    rating: 4.6,
    reviews: 89,
    image: "/wireless-headphones-product-photo.png",
    badge: "Oferta",
    category: "Audio",
  },
  {
    id: 3,
    name: "Reloj Inteligente",
    price: 299,
    originalPrice: 399,
    rating: 4.7,
    reviews: 156,
    image: "/smartwatch-product-photo.png",
    badge: "Nuevo",
    category: "Wearables",
  },
  {
    id: 4,
    name: "Laptop Gaming",
    price: 1299,
    originalPrice: 1599,
    rating: 4.9,
    reviews: 67,
    image: "/gaming-laptop-product-photo.png",
    badge: "Premium",
    category: "Computadoras",
  },
]

export function FeaturedProducts() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Productos Destacados</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Descubre nuestra selección de productos más populares con las mejores ofertas
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Badge */}
                  <Badge
                    className="absolute top-3 left-3"
                    variant={product.badge === "Oferta" ? "destructive" : "secondary"}
                  >
                    {product.badge}
                  </Badge>

                  {/* Wishlist Button */}
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute top-3 right-3 bg-background/80 hover:bg-background"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">{product.category}</p>
                    <h3 className="font-semibold text-lg text-balance">{product.name}</h3>
                  </div>

                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating) ? "fill-accent text-accent" : "text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-primary">${product.price}</span>
                        {product.originalPrice > product.price && (
                          <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
                        )}
                      </div>
                      {product.originalPrice > product.price && (
                        <span className="text-sm text-green-600 font-medium">
                          Ahorra ${product.originalPrice - product.price}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button asChild className="flex-1">
                      <Link href={`/producto/${product.id}`}>Ver Detalles</Link>
                    </Button>
                    <Button size="icon" variant="outline">
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/tienda">Ver Todos los Productos</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
