"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TrendingUp, TrendingDown, DollarSign, Package, Users, ShoppingCart, Eye, Plus } from "lucide-react"
import Link from "next/link"

const stats = [
  {
    name: "Ventas Totales",
    value: "$45,231.89",
    change: "+20.1%",
    changeType: "positive" as const,
    icon: DollarSign,
  },
  {
    name: "Productos",
    value: "234",
    change: "+12",
    changeType: "positive" as const,
    icon: Package,
  },
  {
    name: "Usuarios",
    value: "1,429",
    change: "+5.2%",
    changeType: "positive" as const,
    icon: Users,
  },
  {
    name: "Pedidos",
    value: "89",
    change: "-2.1%",
    changeType: "negative" as const,
    icon: ShoppingCart,
  },
]

const recentOrders = [
  {
    id: "ORD-001",
    customer: "María González",
    amount: "$299.99",
    status: "Completado",
    date: "2024-01-15",
  },
  {
    id: "ORD-002",
    customer: "Carlos Rodríguez",
    amount: "$149.99",
    status: "Procesando",
    date: "2024-01-15",
  },
  {
    id: "ORD-003",
    customer: "Ana López",
    amount: "$899.99",
    status: "Enviado",
    date: "2024-01-14",
  },
  {
    id: "ORD-004",
    customer: "Luis Martín",
    amount: "$199.99",
    status: "Pendiente",
    date: "2024-01-14",
  },
]

const topProducts = [
  {
    name: "Smartphone Premium",
    sales: 45,
    revenue: "$40,455",
    trend: "up",
  },
  {
    name: "Auriculares Inalámbricos",
    sales: 32,
    revenue: "$6,368",
    trend: "up",
  },
  {
    name: "Laptop Gaming",
    sales: 18,
    revenue: "$23,382",
    trend: "down",
  },
  {
    name: "Reloj Inteligente",
    sales: 24,
    revenue: "$7,176",
    trend: "up",
  },
]

export function AdminDashboard() {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Bienvenido de vuelta</h2>
          <p className="text-muted-foreground">Aquí tienes un resumen de tu tienda online</p>
        </div>
        <div className="flex space-x-2">
          <Button asChild>
            <Link href="/admin/productos">
              <Plus className="mr-2 h-4 w-4" />
              Agregar Producto
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/">
              <Eye className="mr-2 h-4 w-4" />
              Ver Tienda
            </Link>
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.name}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.name}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="flex items-center text-xs text-muted-foreground">
                {stat.changeType === "positive" ? (
                  <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
                ) : (
                  <TrendingDown className="mr-1 h-3 w-3 text-red-500" />
                )}
                <span className={stat.changeType === "positive" ? "text-green-500" : "text-red-500"}>
                  {stat.change}
                </span>
                <span className="ml-1">desde el mes pasado</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Recent Orders */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Pedidos Recientes</CardTitle>
            <Button variant="outline" size="sm" asChild>
              <Link href="/admin/pedidos">Ver Todos</Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="space-y-1">
                    <p className="font-medium">{order.id}</p>
                    <p className="text-sm text-muted-foreground">{order.customer}</p>
                    <p className="text-xs text-muted-foreground">{order.date}</p>
                  </div>
                  <div className="text-right space-y-1">
                    <p className="font-medium">{order.amount}</p>
                    <Badge
                      variant={
                        order.status === "Completado"
                          ? "default"
                          : order.status === "Procesando"
                            ? "secondary"
                            : order.status === "Enviado"
                              ? "outline"
                              : "destructive"
                      }
                    >
                      {order.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Products */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Productos Más Vendidos</CardTitle>
            <Button variant="outline" size="sm" asChild>
              <Link href="/admin/productos">Ver Todos</Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div key={product.name} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-medium">#{index + 1}</span>
                    </div>
                    <div>
                      <p className="font-medium">{product.name}</p>
                      <p className="text-sm text-muted-foreground">{product.sales} ventas</p>
                    </div>
                  </div>
                  <div className="text-right flex items-center space-x-2">
                    <span className="font-medium">{product.revenue}</span>
                    {product.trend === "up" ? (
                      <TrendingUp className="h-4 w-4 text-green-500" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-red-500" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Acciones Rápidas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Button className="h-20 flex-col space-y-2" asChild>
              <Link href="/admin/productos">
                <Package className="h-6 w-6" />
                <span>Agregar Producto</span>
              </Link>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2 bg-transparent" asChild>
              <Link href="/admin/categorias">
                <Badge className="h-6 w-6" />
                <span>Gestionar Categorías</span>
              </Link>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2 bg-transparent" asChild>
              <Link href="/admin/usuarios">
                <Users className="h-6 w-6" />
                <span>Ver Usuarios</span>
              </Link>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2 bg-transparent" asChild>
              <Link href="/admin/estadisticas">
                <TrendingUp className="h-6 w-6" />
                <span>Ver Estadísticas</span>
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
