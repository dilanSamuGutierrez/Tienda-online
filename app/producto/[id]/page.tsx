"use client"
import { useParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductGallery } from "@/components/product-gallery"
import { ProductInfo } from "@/components/product-info"
import { ProductTabs } from "@/components/product-tabs"
import { RelatedProducts } from "@/components/related-products"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { products } from "@/data/products"
import { notFound } from "next/navigation"

export default function ProductPage() {
  const params = useParams()
  const productId = Number.parseInt(params.id as string)
  const product = products.find((p) => p.id === productId)

  if (!product) {
    notFound()
  }

  const productImages = [
    product.image,
    "/placeholder.svg?height=600&width=600&text=Vista+2",
    "/placeholder.svg?height=600&width=600&text=Vista+3",
    "/placeholder.svg?height=600&width=600&text=Vista+4",
  ]

  const breadcrumbItems = [
    { label: "Inicio", href: "/" },
    { label: "Tienda", href: "/tienda" },
    { label: product.category, href: `/tienda?category=${product.category}` },
    { label: product.name, href: `/producto/${product.id}` },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <ProductGallery images={productImages} productName={product.name} />
          <ProductInfo product={product} />
        </div>

        <ProductTabs product={product} />

        <RelatedProducts currentProductId={product.id} category={product.category} />
      </main>

      <Footer />
    </div>
  )
}
