"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Package, Truck, Mail } from "lucide-react"
import Link from "next/link"

export default function ConfirmacionPage() {
  const orderNumber = "ORD-" + Math.random().toString(36).substr(2, 9).toUpperCase()

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold mb-2">¡Pedido Confirmado!</h1>
            <p className="text-muted-foreground">
              Gracias por tu compra. Hemos recibido tu pedido y lo estamos procesando.
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Detalles del Pedido</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                <span className="font-medium">Número de Pedido:</span>
                <span className="font-mono text-primary">{orderNumber}</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                <div className="text-center p-4 border rounded-lg">
                  <Package className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <h3 className="font-medium mb-1">Procesando</h3>
                  <p className="text-sm text-muted-foreground">Preparando tu pedido</p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <Truck className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                  <h3 className="font-medium mb-1">En Camino</h3>
                  <p className="text-sm text-muted-foreground">1-3 días hábiles</p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <Mail className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                  <h3 className="font-medium mb-1">Entregado</h3>
                  <p className="text-sm text-muted-foreground">Te notificaremos</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <p className="text-muted-foreground">
              Recibirás un email de confirmación con los detalles de tu pedido y el número de seguimiento.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="/tienda">Seguir Comprando</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/">Volver al Inicio</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
