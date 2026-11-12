export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-primary mb-12 text-center">
          Our Grooming Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 border border-gray-200">
            <h3 className="text-xl font-heading font-bold text-brand-primary mb-4">Classic Haircut</h3>
            <p className="text-brand-primary">A tailored cut designed to suit your individual style and hair type.</p>
          </div>
          <div className="bg-white p-6 border border-gray-200">
            <h3 className="text-xl font-heading font-bold text-brand-primary mb-4">Beard Sculpting</h3>
            <p className="text-brand-primary">Precision trimming and shaping to keep your beard looking sharp.</p>
          </div>
          <div className="bg-white p-6 border border-gray-200">
            <h3 className="text-xl font-heading font-bold text-brand-primary mb-4">Hot Towel Shave</h3>
            <p className="text-brand-primary">A traditional, relaxing shave for a smooth and refreshed finish.</p>
          </div>
          <div className="bg-white p-6 border border-gray-200">
            <h3 className="text-xl font-heading font-bold text-brand-primary mb-4">Precision Trimming</h3>
            <p className="text-brand-primary">Focused detailing to refine your look and maintain clean lines.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
