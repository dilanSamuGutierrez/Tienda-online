import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock, MessageCircle, Headphones } from "lucide-react"

export function ContactInfo() {
  return (
    <div className="space-y-6">
      {/* Contact Details */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Phone className="mr-2 h-5 w-5" />
            Información de Contacto
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Dirección</p>
                <p className="text-muted-foreground text-sm">
                  Av. Principal 123
                  <br />
                  Ciudad, Estado 12345
                  <br />
                  País
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Teléfono</p>
                <p className="text-muted-foreground text-sm">+1 (555) 123-4567</p>
                <p className="text-muted-foreground text-sm">+1 (555) 765-4321</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-muted-foreground text-sm">info@tiendaonline.com</p>
                <p className="text-muted-foreground text-sm">soporte@tiendaonline.com</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Business Hours */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Clock className="mr-2 h-5 w-5" />
            Horarios de Atención
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm">Lunes - Viernes</span>
              <Badge variant="secondary">9:00 AM - 6:00 PM</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Sábados</span>
              <Badge variant="secondary">10:00 AM - 4:00 PM</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Domingos</span>
              <Badge variant="outline">Cerrado</Badge>
            </div>
          </div>
          <div className="mt-4 p-3 bg-muted rounded-lg">
            <p className="text-sm text-muted-foreground">
              <strong>Soporte 24/7:</strong> Chat en línea disponible las 24 horas para consultas urgentes.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Alternative Contact Methods */}
      <Card>
        <CardHeader>
          <CardTitle>Otros Métodos de Contacto</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
            <MessageCircle className="h-5 w-5 text-primary" />
            <div>
              <p className="font-medium text-sm">Chat en Vivo</p>
              <p className="text-muted-foreground text-xs">Respuesta inmediata</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
            <Headphones className="h-5 w-5 text-primary" />
            <div>
              <p className="font-medium text-sm">Soporte Telefónico</p>
              <p className="text-muted-foreground text-xs">Lun-Vie 9AM-6PM</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
            <Mail className="h-5 w-5 text-primary" />
            <div>
              <p className="font-medium text-sm">Email</p>
              <p className="text-muted-foreground text-xs">Respuesta en 24h</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Emergency Contact */}
      <Card className="border-destructive/20 bg-destructive/5">
        <CardContent className="p-4">
          <div className="flex items-start space-x-3">
            <Phone className="h-5 w-5 text-destructive mt-1 flex-shrink-0" />
            <div>
              <p className="font-medium text-destructive">Línea de Emergencia</p>
              <p className="text-sm text-muted-foreground">
                Para problemas urgentes con pedidos: <br />
                <strong>+1 (555) 911-HELP</strong>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
