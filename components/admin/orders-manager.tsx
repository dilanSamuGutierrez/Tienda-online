"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ShoppingCart, Eye, Package, Truck, CheckCircle, Search } from "lucide-react"

const initialOrders = [
  {
    id: "ORD-001",
    customer: "María González",
    email: "maria@email.com",
    total: 299.99,
    status: "Completado",
    date: "2024-01-15",
    items: [{ name: "Smartphone Premium", quantity: 1, price: 299.99 }],
  },
  {
    id: "ORD-002",
    customer: "Carlos Rodríguez",
    email: "carlos@email.com",
    total: 149.99,
    status: "Procesando",
    date: "2024-01-15",
    items: [{ name: "Auriculares Inalámbricos", quantity: 1, price: 149.99 }],
  },
  {
    id: "ORD-003",
    customer: "Ana López",
    email: "ana@email.com",
    total: 899.99,
    status: "Enviado",
    date: "2024-01-14",
    items: [{ name: "Laptop Gaming", quantity: 1, price: 899.99 }],
  },
  {
    id: "ORD-004",
    customer: "Luis Martín",
    email: "luis@email.com",
    total: 199.99,
    status: "Pendiente",
    date: "2024-01-14",
    items: [{ name: "Reloj Inteligente", quantity: 1, price: 199.99 }],
  },
]

export function OrdersManager() {
  const [orders, setOrders] = useState(initialOrders)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [selectedOrder, setSelectedOrder] = useState<any>(null)

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || order.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const updateOrderStatus = (orderId: string, newStatus: string) => {
    setOrders(orders.map((order) => (order.id === orderId ? { ...order, status: newStatus } : order)))
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completado":
        return "default"
      case "Procesando":
        return "secondary"
      case "Enviado":
        return "outline"
      case "Pendiente":
        return "destructive"
      default:
        return "secondary"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Completado":
        return <CheckCircle className="h-4 w-4" />
      case "Procesando":
        return <Package className="h-4 w-4" />
      case "Enviado":
        return <Truck className="h-4 w-4" />
      case "Pendiente":
        return <ShoppingCart className="h-4 w-4" />
      default:
        return <ShoppingCart className="h-4 w-4" />
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Gestión de Pedidos</h2>
          <p className="text-muted-foreground">Administra todos los pedidos de tu tienda</p>
        </div>
      </div>

      {/* Filtros */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar por ID o cliente..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Filtrar por estado" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los estados</SelectItem>
                <SelectItem value="Pendiente">Pendiente</SelectItem>
                <SelectItem value="Procesando">Procesando</SelectItem>
                <SelectItem value="Enviado">Enviado</SelectItem>
                <SelectItem value="Completado">Completado</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <ShoppingCart className="mr-2 h-5 w-5" />
            Pedidos ({filteredOrders.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID Pedido</TableHead>
                <TableHead>Cliente</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead>Fecha</TableHead>
                <TableHead>Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-mono">{order.id}</TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">{order.customer}</div>
                      <div className="text-sm text-muted-foreground">{order.email}</div>
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">${order.total}</TableCell>
                  <TableCell>
                    <Badge variant={getStatusColor(order.status)} className="flex items-center gap-1 w-fit">
                      {getStatusIcon(order.status)}
                      {order.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm" onClick={() => setSelectedOrder(order)}>
                            <Eye className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle>Detalles del Pedido {selectedOrder?.id}</DialogTitle>
                          </DialogHeader>
                          {selectedOrder && (
                            <div className="space-y-4">
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <h4 className="font-medium mb-2">Información del Cliente</h4>
                                  <p className="text-sm">{selectedOrder.customer}</p>
                                  <p className="text-sm text-muted-foreground">{selectedOrder.email}</p>
                                </div>
                                <div>
                                  <h4 className="font-medium mb-2">Estado del Pedido</h4>
                                  <Select
                                    value={selectedOrder.status}
                                    onValueChange={(value) => updateOrderStatus(selectedOrder.id, value)}
                                  >
                                    <SelectTrigger>
                                      <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="Pendiente">Pendiente</SelectItem>
                                      <SelectItem value="Procesando">Procesando</SelectItem>
                                      <SelectItem value="Enviado">Enviado</SelectItem>
                                      <SelectItem value="Completado">Completado</SelectItem>
                                    </SelectContent>
                                  </Select>
                                </div>
                              </div>

                              <div>
                                <h4 className="font-medium mb-2">Productos</h4>
                                <div className="space-y-2">
                                  {selectedOrder.items.map((item: any, index: number) => (
                                    <div key={index} className="flex justify-between items-center p-2 border rounded">
                                      <span>{item.name}</span>
                                      <span>Cantidad: {item.quantity}</span>
                                      <span className="font-medium">${item.price}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              <div className="flex justify-between items-center pt-4 border-t">
                                <span className="font-medium">Total:</span>
                                <span className="text-xl font-bold">${selectedOrder.total}</span>
                              </div>
                            </div>
                          )}
                        </DialogContent>
                      </Dialog>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
