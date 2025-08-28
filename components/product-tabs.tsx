"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ThumbsUp, ThumbsDown } from "lucide-react"
import type { Product } from "@/contexts/cart-context"

interface ProductTabsProps {
  product: Product
}

const specifications = {
  1: {
    // Smartphone Premium
    Pantalla: "6.7 pulgadas OLED",
    Procesador: "A17 Pro Chip",
    Memoria: "256GB",
    RAM: "8GB",
    Cámara: "48MP Triple Cámara",
    Batería: "4500mAh",
    Sistema: "iOS 17",
    Conectividad: "5G, WiFi 6E, Bluetooth 5.3",
  },
  2: {
    // Auriculares
    Tipo: "Over-ear inalámbricos",
    "Cancelación de ruido": "Activa (ANC)",
    Batería: "30 horas",
    Conectividad: "Bluetooth 5.2",
    Drivers: "40mm dinámicos",
    Peso: "250g",
    "Carga rápida": "15 min = 3 horas",
    Resistencia: "IPX4",
  },
  3: {
    // Reloj Inteligente
    Pantalla: "1.9 pulgadas AMOLED",
    Batería: "7 días",
    Sensores: "GPS, Frecuencia cardíaca, SpO2",
    Resistencia: "5ATM + IP68",
    Conectividad: "Bluetooth 5.0, WiFi",
    Almacenamiento: "32GB",
    Compatibilidad: "iOS y Android",
    Materiales: "Aluminio y cristal zafiro",
  },
}

const reviews = [
  {
    id: 1,
    user: "María González",
    rating: 5,
    date: "15 de Enero, 2024",
    comment: "Excelente producto, superó mis expectativas. La calidad es increíble y llegó muy rápido.",
    helpful: 12,
    verified: true,
  },
  {
    id: 2,
    user: "Carlos Rodríguez",
    rating: 4,
    date: "10 de Enero, 2024",
    comment: "Muy buen producto, aunque el precio es un poco alto. La calidad lo justifica.",
    helpful: 8,
    verified: true,
  },
  {
    id: 3,
    user: "Ana López",
    rating: 5,
    date: "5 de Enero, 2024",
    comment: "Perfecto para lo que necesitaba. El servicio al cliente también fue excelente.",
    helpful: 15,
    verified: false,
  },
]

export function ProductTabs({ product }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState("description")
  const productSpecs = specifications[product.id as keyof typeof specifications] || {}

  return (
    <div className="space-y-8">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="description">Descripción</TabsTrigger>
          <TabsTrigger value="specifications">Especificaciones</TabsTrigger>
          <TabsTrigger value="reviews">Reseñas ({product.reviews})</TabsTrigger>
        </TabsList>

        <TabsContent value="description" className="mt-6">
          <Card>
            <CardContent className="p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Descripción Detallada</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">{product.description}</p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-3">Características Principales</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Diseño premium con materiales de alta calidad
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Tecnología de última generación para máximo rendimiento
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Garantía extendida y soporte técnico especializado
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Compatibilidad universal con múltiples dispositivos
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="specifications" className="mt-6">
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6">Especificaciones Técnicas</h3>
              {Object.keys(productSpecs).length > 0 ? (
                <div className="grid sm:grid-cols-2 gap-4">
                  {Object.entries(productSpecs).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center py-3 border-b">
                      <span className="font-medium">{key}:</span>
                      <span className="text-muted-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground">
                  Las especificaciones técnicas detalladas estarán disponibles próximamente.
                </p>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reviews" className="mt-6">
          <div className="space-y-6">
            {/* Reviews Summary */}
            <Card>
              <CardContent className="p-8">
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">{product.rating}</div>
                    <div className="flex items-center justify-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(product.rating) ? "fill-accent text-accent" : "text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-muted-foreground">Basado en {product.reviews} reseñas</p>
                  </div>
                  <div className="space-y-2">
                    {[5, 4, 3, 2, 1].map((stars) => (
                      <div key={stars} className="flex items-center space-x-2">
                        <span className="text-sm w-8">{stars}★</span>
                        <div className="flex-1 bg-muted rounded-full h-2">
                          <div
                            className="bg-accent h-2 rounded-full"
                            style={{
                              width: `${stars === 5 ? 70 : stars === 4 ? 20 : stars === 3 ? 5 : stars === 2 ? 3 : 2}%`,
                            }}
                          ></div>
                        </div>
                        <span className="text-sm text-muted-foreground w-8">
                          {stars === 5 ? 70 : stars === 4 ? 20 : stars === 3 ? 5 : stars === 2 ? 3 : 2}%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Individual Reviews */}
            <div className="space-y-4">
              {reviews.map((review) => (
                <Card key={review.id}>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <span className="font-medium">{review.user}</span>
                            {review.verified && (
                              <Badge variant="secondary" className="text-xs">
                                Compra verificada
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < review.rating ? "fill-accent text-accent" : "text-muted-foreground"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-muted-foreground">{review.date}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">{review.comment}</p>

                      <div className="flex items-center space-x-4 pt-2">
                        <button className="flex items-center space-x-1 text-sm text-muted-foreground hover:text-primary">
                          <ThumbsUp className="h-4 w-4" />
                          <span>Útil ({review.helpful})</span>
                        </button>
                        <button className="flex items-center space-x-1 text-sm text-muted-foreground hover:text-primary">
                          <ThumbsDown className="h-4 w-4" />
                          <span>No útil</span>
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
