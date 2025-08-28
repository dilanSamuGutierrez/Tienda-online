"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { User, Mail, Phone, MapPin, Package, CreditCard, Settings, LogOut, Edit } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"

export default function ProfilePage() {
  const { user, logout, updateProfile, isLoading } = useAuth()
  const router = useRouter()
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  })
  const [success, setSuccess] = useState("")

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/login")
    } else if (user) {
      setFormData({
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
        address: user.address || "",
      })
    }
  }, [user, isLoading, router])

  const handleSave = () => {
    if (user) {
      updateProfile(formData)
      setIsEditing(false)
      setSuccess("Perfil actualizado correctamente")
      setTimeout(() => setSuccess(""), 3000)
    }
  }

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
          <p className="mt-2 text-muted-foreground">Cargando perfil...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  const mockOrders = [
    { id: "ORD-001", date: "2024-01-15", total: 299.99, status: "Entregado" },
    { id: "ORD-002", date: "2024-01-10", total: 159.5, status: "En tránsito" },
    { id: "ORD-003", date: "2024-01-05", total: 89.99, status: "Procesando" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold">Mi Perfil</h1>
              <p className="text-muted-foreground">Gestiona tu información personal y preferencias</p>
            </div>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Cerrar Sesión
            </Button>
          </div>

          {success && (
            <Alert className="mb-6">
              <AlertDescription>{success}</AlertDescription>
            </Alert>
          )}

          <Tabs defaultValue="profile" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="profile">Perfil</TabsTrigger>
              <TabsTrigger value="orders">Pedidos</TabsTrigger>
              <TabsTrigger value="preferences">Preferencias</TabsTrigger>
              <TabsTrigger value="security">Seguridad</TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Información Personal</CardTitle>
                      <CardDescription>Actualiza tu información de contacto</CardDescription>
                    </div>
                    <Button variant="outline" size="sm" onClick={() => setIsEditing(!isEditing)}>
                      <Edit className="h-4 w-4 mr-2" />
                      {isEditing ? "Cancelar" : "Editar"}
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre completo</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          disabled={!isEditing}
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                        <Input
                          id="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          disabled={!isEditing}
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Teléfono</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          disabled={!isEditing}
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Dirección</Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                        <Input
                          id="address"
                          value={formData.address}
                          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                          disabled={!isEditing}
                          className="pl-10"
                        />
                      </div>
                    </div>
                  </div>

                  {isEditing && (
                    <div className="flex justify-end space-x-2 pt-4">
                      <Button variant="outline" onClick={() => setIsEditing(false)}>
                        Cancelar
                      </Button>
                      <Button onClick={handleSave}>Guardar Cambios</Button>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-2">
                      <Package className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-2xl font-bold">{user.orders}</p>
                        <p className="text-sm text-muted-foreground">Pedidos realizados</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-2">
                      <CreditCard className="h-5 w-5 text-green-600" />
                      <div>
                        <p className="text-2xl font-bold">${user.totalSpent.toFixed(2)}</p>
                        <p className="text-sm text-muted-foreground">Total gastado</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-2">
                      <User className="h-5 w-5 text-blue-600" />
                      <div>
                        <p className="text-2xl font-bold">{user.totalSpent > 1000 ? "VIP" : "Regular"}</p>
                        <p className="text-sm text-muted-foreground">Estado de cuenta</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="orders" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Historial de Pedidos</CardTitle>
                  <CardDescription>Revisa tus compras anteriores</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockOrders.map((order) => (
                      <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div>
                            <p className="font-medium">{order.id}</p>
                            <p className="text-sm text-muted-foreground">{order.date}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <Badge variant={order.status === "Entregado" ? "default" : "secondary"}>{order.status}</Badge>
                          <p className="font-medium">${order.total}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="preferences" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Preferencias de Comunicación</CardTitle>
                  <CardDescription>Controla cómo te contactamos</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Newsletter</Label>
                      <p className="text-sm text-muted-foreground">Recibe ofertas especiales y novedades</p>
                    </div>
                    <Switch
                      checked={user.preferences.newsletter}
                      onCheckedChange={(checked) =>
                        updateProfile({
                          preferences: { ...user.preferences, newsletter: checked },
                        })
                      }
                    />
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Notificaciones de pedidos</Label>
                      <p className="text-sm text-muted-foreground">Actualizaciones sobre el estado de tus pedidos</p>
                    </div>
                    <Switch
                      checked={user.preferences.notifications}
                      onCheckedChange={(checked) =>
                        updateProfile({
                          preferences: { ...user.preferences, notifications: checked },
                        })
                      }
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="security" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Seguridad de la Cuenta</CardTitle>
                  <CardDescription>Gestiona la seguridad de tu cuenta</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Cambiar contraseña</Label>
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      <Settings className="h-4 w-4 mr-2" />
                      Actualizar contraseña
                    </Button>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <Label>Sesiones activas</Label>
                    <div className="p-3 border rounded-lg">
                      <p className="text-sm font-medium">Navegador actual</p>
                      <p className="text-xs text-muted-foreground">Última actividad: Ahora</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
