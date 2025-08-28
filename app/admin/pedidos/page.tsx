"use client"

import { AdminLayout } from "@/components/admin/admin-layout"
import { OrdersManager } from "@/components/admin/orders-manager"

export default function PedidosPage() {
  return (
    <AdminLayout>
      <OrdersManager />
    </AdminLayout>
  )
}
