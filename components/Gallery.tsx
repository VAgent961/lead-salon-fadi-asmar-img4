export default function Gallery() {
  return (
    <section id="gallery" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-primary mb-12 text-center">
          Our Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="aspect-square">
            <img
              src="/images/stock-2.jpg"
              alt="Collection of haircut and grooming results from the shop"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square">
            <img
              src="/images/stock-3.jpg"
              alt="Collection of haircut and grooming results from the shop"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square">
            <img
              src="/images/stock-4.jpg"
              alt="Collection of haircut and grooming results from the shop"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square">
            <img
              src="/images/stock-5.png"
              alt="Collection of haircut and grooming results from the shop"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
