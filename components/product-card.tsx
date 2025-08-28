"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart, Heart } from "lucide-react"
import Link from "next/link"
import { type Product, useCart } from "@/contexts/cart-context"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { dispatch } = useCart()

  const addToCart = () => {
    dispatch({ type: "ADD_ITEM", payload: product })
  }

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
      <CardContent className="p-0">
        <div className="relative">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />

          {/* Badge */}
          {product.badge && (
            <Badge className="absolute top-3 left-3" variant={product.badge === "Oferta" ? "destructive" : "secondary"}>
              {product.badge}
            </Badge>
          )}

          {/* Wishlist Button */}
          <Button size="icon" variant="ghost" className="absolute top-3 right-3 bg-background/80 hover:bg-background">
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
                {product.originalPrice && product.originalPrice > product.price && (
                  <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
                )}
              </div>
              {product.originalPrice && product.originalPrice > product.price && (
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
            <Button size="icon" variant="outline" onClick={addToCart}>
              <ShoppingCart className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
