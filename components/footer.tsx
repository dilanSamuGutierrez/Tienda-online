import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">T</span>
              </div>
              <span className="font-bold text-xl">TiendaOnline</span>
            </div>
            <p className="text-muted-foreground text-pretty">
              Tu tienda online de confianza. Productos de calidad, precios justos y el mejor servicio al cliente.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Enlaces Rápidos</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-muted-foreground hover:text-primary">
                Inicio
              </Link>
              <Link href="/tienda" className="block text-muted-foreground hover:text-primary">
                Tienda
              </Link>
              <Link href="/contacto" className="block text-muted-foreground hover:text-primary">
                Contacto
              </Link>
              <Link href="/sobre-nosotros" className="block text-muted-foreground hover:text-primary">
                Sobre Nosotros
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Categorías</h3>
            <div className="space-y-2">
              <Link href="/categoria/tecnologia" className="block text-muted-foreground hover:text-primary">
                Tecnología
              </Link>
              <Link href="/categoria/hogar" className="block text-muted-foreground hover:text-primary">
                Hogar
              </Link>
              <Link href="/categoria/moda" className="block text-muted-foreground hover:text-primary">
                Moda
              </Link>
              <Link href="/categoria/deportes" className="block text-muted-foreground hover:text-primary">
                Deportes
              </Link>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Soporte</h3>
            <div className="space-y-2">
              <Link href="/ayuda" className="block text-muted-foreground hover:text-primary">
                Centro de Ayuda
              </Link>
              <Link href="/envios" className="block text-muted-foreground hover:text-primary">
                Información de Envíos
              </Link>
              <Link href="/devoluciones" className="block text-muted-foreground hover:text-primary">
                Devoluciones
              </Link>
              <Link href="/terminos" className="block text-muted-foreground hover:text-primary">
                Términos y Condiciones
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">© 2024 TiendaOnline. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link href="/privacidad" className="text-muted-foreground hover:text-primary text-sm">
              Política de Privacidad
            </Link>
            <Link href="/cookies" className="text-muted-foreground hover:text-primary text-sm">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
