"use client"

import { AdminLayout } from "@/components/admin/admin-layout"
import { CategoriesManager } from "@/components/admin/categories-manager"

export default function CategoriasPage() {
  return (
    <AdminLayout>
      <CategoriesManager />
    </AdminLayout>
  )
}
