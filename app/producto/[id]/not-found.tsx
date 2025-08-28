import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ShoppingBag } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center space-y-8 max-w-md mx-auto">
          <div className="space-y-4">
            <ShoppingBag className="h-24 w-24 text-muted-foreground mx-auto" />
            <h1 className="text-4xl font-bold">Producto no encontrado</h1>
            <p className="text-muted-foreground text-lg">
              Lo sentimos, el producto que buscas no existe o ha sido removido.
            </p>
          </div>

          <div className="space-y-4">
            <Button asChild size="lg">
              <Link href="/tienda">Ver Todos los Productos</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/">Volver al Inicio</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
