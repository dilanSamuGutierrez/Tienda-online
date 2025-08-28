"use client"

import { AdminLayout } from "@/components/admin/admin-layout"
import { StatsManager } from "@/components/admin/stats-manager"

export default function EstadisticasPage() {
  return (
    <AdminLayout>
      <StatsManager />
    </AdminLayout>
  )
}
