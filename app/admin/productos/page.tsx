"use client"

import { AdminLayout } from "@/components/admin/admin-layout"
import { ProductsManager } from "@/components/admin/products-manager"

export default function AdminProductsPage() {
  return (
    <AdminLayout>
      <ProductsManager />
    </AdminLayout>
  )
}
