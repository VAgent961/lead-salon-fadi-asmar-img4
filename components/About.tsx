export default function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="w-full md:w-1/2">
            <img
              src="/images/photo-1.jpg"
              alt="Interior view of Salon Fadi Asmar"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-primary mb-6">
              The Fadi Asmar Standard
            </h2>
            <p className="text-lg text-brand-primary mb-6">
              At Salon Fadi Asmar, we believe in the timeless craft of barbering. We combine traditional techniques with a keen eye for modern style to ensure every client leaves looking and feeling their best.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
