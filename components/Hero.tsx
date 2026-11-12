import Link from 'next/link'

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen flex items-center">
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <img
        src="/images/stock-1.jpg"
        alt="Professional barber working in a clean, modern shop environment"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
            Mastering the Art of Grooming in Chouf
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">
            Precision, style, and tradition for the modern gentleman.
          </p>
          <Link
            href="#location"
            className="inline-block bg-brand-secondary text-white px-6 py-3 font-bold uppercase tracking-widest hover:bg-opacity-90 focus:ring-2 focus:ring-offset-2 focus:ring-brand-secondary active:scale-95"
          >
            Visit us in Chouf
          </Link>
        </div>
      </div>
    </section>
  )
}
