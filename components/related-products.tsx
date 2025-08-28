"use client"

import { ProductCard } from "@/components/product-card"
import { products } from "@/data/products"

interface RelatedProductsProps {
  currentProductId: number
  category: string
}

export function RelatedProducts({ currentProductId, category }: RelatedProductsProps) {
  const relatedProducts = products
    .filter((product) => product.id !== currentProductId && product.category === category)
    .slice(0, 4)

  if (relatedProducts.length === 0) {
    return null
  }

  return (
    <section className="space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold">Productos Relacionados</h2>
        <p className="text-muted-foreground">Otros productos que podrían interesarte de la categoría {category}</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
