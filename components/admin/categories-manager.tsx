"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Plus, Edit, Trash2, Tag } from "lucide-react"

const initialCategories = [
  {
    id: 1,
    name: "Electrónicos",
    slug: "electronicos",
    productCount: 45,
    description: "Dispositivos electrónicos y gadgets",
  },
  { id: 2, name: "Ropa", slug: "ropa", productCount: 32, description: "Ropa y accesorios de moda" },
  { id: 3, name: "Hogar", slug: "hogar", productCount: 28, description: "Artículos para el hogar y decoración" },
  { id: 4, name: "Deportes", slug: "deportes", productCount: 19, description: "Equipamiento deportivo y fitness" },
  { id: 5, name: "Libros", slug: "libros", productCount: 67, description: "Libros y material educativo" },
]

export function CategoriesManager() {
  const [categories, setCategories] = useState(initialCategories)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingCategory, setEditingCategory] = useState<any>(null)
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    description: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (editingCategory) {
      setCategories(categories.map((cat) => (cat.id === editingCategory.id ? { ...cat, ...formData } : cat)))
    } else {
      const newCategory = {
        id: Math.max(...categories.map((c) => c.id)) + 1,
        ...formData,
        productCount: 0,
      }
      setCategories([...categories, newCategory])
    }

    setFormData({ name: "", slug: "", description: "" })
    setEditingCategory(null)
    setIsDialogOpen(false)
  }

  const handleEdit = (category: any) => {
    setEditingCategory(category)
    setFormData({
      name: category.name,
      slug: category.slug,
      description: category.description,
    })
    setIsDialogOpen(true)
  }

  const handleDelete = (id: number) => {
    setCategories(categories.filter((cat) => cat.id !== id))
  }

  const openNewDialog = () => {
    setEditingCategory(null)
    setFormData({ name: "", slug: "", description: "" })
    setIsDialogOpen(true)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Gestión de Categorías</h2>
          <p className="text-muted-foreground">Administra las categorías de productos de tu tienda</p>
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={openNewDialog}>
              <Plus className="mr-2 h-4 w-4" />
              Nueva Categoría
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{editingCategory ? "Editar Categoría" : "Nueva Categoría"}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Nombre</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="slug">Slug (URL)</Label>
                <Input
                  id="slug"
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  placeholder="categoria-ejemplo"
                  required
                />
              </div>
              <div>
                <Label htmlFor="description">Descripción</Label>
                <Input
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
              </div>
              <div className="flex justify-end space-x-2">
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancelar
                </Button>
                <Button type="submit">{editingCategory ? "Actualizar" : "Crear"}</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Tag className="mr-2 h-5 w-5" />
            Categorías ({categories.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nombre</TableHead>
                <TableHead>Slug</TableHead>
                <TableHead>Descripción</TableHead>
                <TableHead>Productos</TableHead>
                <TableHead>Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {categories.map((category) => (
                <TableRow key={category.id}>
                  <TableCell className="font-medium">{category.name}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{category.slug}</Badge>
                  </TableCell>
                  <TableCell className="max-w-xs truncate">{category.description}</TableCell>
                  <TableCell>
                    <Badge>{category.productCount}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" onClick={() => handleEdit(category)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => handleDelete(category.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
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
