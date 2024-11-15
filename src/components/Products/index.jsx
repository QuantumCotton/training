export const Products = () => {
    const products = [
      {
        name: "The Executive",
        description: "For the lawn that means business. Dense, drought-resistant, and dressed to impress.",
        price: "From $8.99/sq ft",
        features: ["Perfect for high-traffic areas", "Drought resistant", "Premium appearance"]
      },
      {
        name: "The Barefoot Dream",
        description: "Soft enough to nap on. The perfect balance of durability and comfort.",
        price: "From $7.99/sq ft",
        features: ["Ultra-soft texture", "Child & pet friendly", "Self-repairing"]
      },
      {
        name: "The All-Star",
        description: "The MVP of lawns. Perfect for sports and active families.",
        price: "From $9.99/sq ft",
        features: ["High wear resistance", "Quick recovery", "Sport-grade quality"]
      }
    ]
    
    return (
      <section id="products" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-green-800">Premium Turf Selection</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.name} className="border rounded-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold mb-3">{product.name}</h3>
                <p className="mb-4 text-gray-600">{product.description}</p>
                <p className="text-xl font-bold text-green-700 mb-4">{product.price}</p>
                <ul className="space-y-2">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <span className="mr-2">✓</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default Products;