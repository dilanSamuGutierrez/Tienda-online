"use client"

import { AdminLayout } from "@/components/admin/admin-layout"
import { UsersManager } from "@/components/admin/users-manager"

export default function AdminUsersPage() {
  return (
    <AdminLayout>
      <UsersManager />
    </AdminLayout>
  )
}
