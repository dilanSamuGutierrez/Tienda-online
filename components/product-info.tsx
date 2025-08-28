"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ShoppingCart, Heart, Minus, Plus, Truck, Shield, RotateCcw } from "lucide-react"
import { type Product, useCart } from "@/contexts/cart-context"

interface ProductInfoProps {
  product: Product
}

export function ProductInfo({ product }: ProductInfoProps) {
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const { dispatch } = useCart()

  const addToCart = () => {
    for (let i = 0; i < quantity; i++) {
      dispatch({ type: "ADD_ITEM", payload: product })
    }
  }

  const updateQuantity = (newQuantity: number) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity)
    }
  }

  const discountPercentage = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <div className="space-y-6">
      {/* Product Title and Badge */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <p className="text-muted-foreground">{product.category}</p>
          {product.badge && (
            <Badge variant={product.badge === "Oferta" ? "destructive" : "secondary"}>{product.badge}</Badge>
          )}
        </div>
        <h1 className="text-3xl lg:text-4xl font-bold text-balance">{product.name}</h1>
      </div>

      {/* Rating */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${
                i < Math.floor(product.rating) ? "fill-accent text-accent" : "text-muted-foreground"
              }`}
            />
          ))}
        </div>
        <span className="text-lg font-medium">{product.rating}</span>
        <span className="text-muted-foreground">({product.reviews} reseñas)</span>
      </div>

      {/* Price */}
      <div className="space-y-2">
        <div className="flex items-center space-x-4">
          <span className="text-4xl font-bold text-primary">${product.price}</span>
          {product.originalPrice && product.originalPrice > product.price && (
            <>
              <span className="text-xl text-muted-foreground line-through">${product.originalPrice}</span>
              <Badge variant="destructive" className="text-sm">
                -{discountPercentage}%
              </Badge>
            </>
          )}
        </div>
        {product.originalPrice && product.originalPrice > product.price && (
          <p className="text-green-600 font-medium">Ahorras ${product.originalPrice - product.price}</p>
        )}
      </div>

      {/* Description */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Descripción</h3>
        <p className="text-muted-foreground text-pretty leading-relaxed">{product.description}</p>
      </div>

      {/* Quantity and Add to Cart */}
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <span className="font-medium">Cantidad:</span>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="icon" onClick={() => updateQuantity(quantity - 1)} disabled={quantity <= 1}>
              <Minus className="h-4 w-4" />
            </Button>
            <span className="w-12 text-center font-medium">{quantity}</span>
            <Button variant="outline" size="icon" onClick={() => updateQuantity(quantity + 1)}>
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="flex-1" onClick={addToCart}>
            <ShoppingCart className="mr-2 h-5 w-5" />
            Agregar al Carrito
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => setIsWishlisted(!isWishlisted)}
            className={isWishlisted ? "text-red-500 border-red-500" : ""}
          >
            <Heart className={`mr-2 h-5 w-5 ${isWishlisted ? "fill-current" : ""}`} />
            {isWishlisted ? "En Favoritos" : "Agregar a Favoritos"}
          </Button>
        </div>
      </div>

      {/* Features */}
      <Card>
        <CardContent className="p-6">
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-primary/10 rounded-full">
                <Truck className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">Envío Gratis</p>
                <p className="text-sm text-muted-foreground">En pedidos +$50</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-primary/10 rounded-full">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">2 Años Garantía</p>
                <p className="text-sm text-muted-foreground">Cobertura completa</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-primary/10 rounded-full">
                <RotateCcw className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">30 Días</p>
                <p className="text-sm text-muted-foreground">Devolución gratis</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stock Status */}
      <div className="flex items-center space-x-2">
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <span className="text-green-600 font-medium">En Stock - Listo para enviar</span>
      </div>
    </div>
  )
}
