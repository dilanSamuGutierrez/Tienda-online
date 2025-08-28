"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { TrendingUp, TrendingDown, DollarSign, Package, Users, ShoppingCart, Eye, Star } from "lucide-react"

const salesData = [
  { month: "Ene", sales: 4500, orders: 45 },
  { month: "Feb", sales: 5200, orders: 52 },
  { month: "Mar", sales: 4800, orders: 48 },
  { month: "Abr", sales: 6100, orders: 61 },
  { month: "May", sales: 7300, orders: 73 },
  { month: "Jun", sales: 6800, orders: 68 },
]

const topProducts = [
  { name: "Smartphone Premium", sales: 145, revenue: 43500, growth: 12 },
  { name: "Auriculares Inalámbricos", sales: 98, revenue: 14700, growth: 8 },
  { name: "Laptop Gaming", sales: 67, revenue: 60300, growth: -3 },
  { name: "Reloj Inteligente", sales: 89, revenue: 17800, growth: 15 },
  { name: "Tablet Pro", sales: 54, revenue: 32400, growth: 5 },
]

const customerStats = [
  { segment: "Nuevos Clientes", count: 234, percentage: 45 },
  { segment: "Clientes Recurrentes", count: 189, percentage: 36 },
  { segment: "Clientes VIP", count: 98, percentage: 19 },
]

export function StatsManager() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Estadísticas y Análisis</h2>
        <p className="text-muted-foreground">Métricas detalladas del rendimiento de tu tienda</p>
      </div>

      {/* KPIs Principales */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ingresos Totales</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$145,231</div>
            <div className="flex items-center text-xs text-green-600">
              <TrendingUp className="mr-1 h-3 w-3" />
              +23.5% vs mes anterior
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pedidos Totales</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,247</div>
            <div className="flex items-center text-xs text-green-600">
              <TrendingUp className="mr-1 h-3 w-3" />
              +18.2% vs mes anterior
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tasa de Conversión</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.24%</div>
            <div className="flex items-center text-xs text-red-600">
              <TrendingDown className="mr-1 h-3 w-3" />
              -0.8% vs mes anterior
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Valor Promedio</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$116.45</div>
            <div className="flex items-center text-xs text-green-600">
              <TrendingUp className="mr-1 h-3 w-3" />
              +5.1% vs mes anterior
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Productos Más Vendidos */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Star className="mr-2 h-5 w-5" />
              Top 5 Productos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div key={product.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline">#{index + 1}</Badge>
                      <span className="font-medium">{product.name}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium">${product.revenue.toLocaleString()}</span>
                      {product.growth > 0 ? (
                        <Badge variant="default" className="text-xs">
                          +{product.growth}%
                        </Badge>
                      ) : (
                        <Badge variant="destructive" className="text-xs">
                          {product.growth}%
                        </Badge>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{product.sales} ventas</span>
                    <Progress value={(product.sales / 150) * 100} className="w-24 h-2" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Segmentación de Clientes */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="mr-2 h-5 w-5" />
              Segmentación de Clientes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {customerStats.map((segment) => (
                <div key={segment.segment} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{segment.segment}</span>
                    <span className="text-sm font-medium">{segment.count} clientes</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Progress value={segment.percentage} className="flex-1" />
                    <span className="text-sm text-muted-foreground w-12">{segment.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Métricas Adicionales */}
      <div className="grid gap-6 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Rendimiento Mensual</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {salesData.slice(-3).map((data) => (
                <div key={data.month} className="flex items-center justify-between">
                  <span className="text-sm font-medium">{data.month}</span>
                  <div className="text-right">
                    <div className="text-sm font-medium">${data.sales.toLocaleString()}</div>
                    <div className="text-xs text-muted-foreground">{data.orders} pedidos</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Métricas de Inventario</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Productos Activos</span>
                <Badge>234</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Stock Bajo</span>
                <Badge variant="destructive">12</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Sin Stock</span>
                <Badge variant="outline">3</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Valor Inventario</span>
                <span className="text-sm font-medium">$89,450</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Satisfacción del Cliente</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Calificación Promedio</span>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">4.8</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Reseñas Totales</span>
                <Badge>1,247</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Tasa de Devolución</span>
                <span className="text-sm font-medium">2.1%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Tiempo Respuesta</span>
                <span className="text-sm font-medium">2.3h</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
