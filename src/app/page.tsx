export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-white selection:bg-orange-500/30">
      {/* Premium Header */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-white/10 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-orange-600 rounded-sm flex items-center justify-center font-bold text-xl italic">A</div>
          <span className="text-2xl font-black tracking-tighter uppercase italic">Arna Ltd</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium tracking-widest uppercase text-gray-400">
          <a href="#" className="hover:text-orange-500 transition-colors">Services</a>
          <a href="#" className="hover:text-orange-500 transition-colors">Portfolio</a>
          <a href="#" className="hover:text-orange-500 transition-colors">Testimonials</a>
        </div>
        <a href="tel:+" className="bg-white text-black px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-orange-600 hover:text-white transition-all">
          Get a Quote
        </a>
      </nav>

      {/* High-End Hero */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0f172a] z-10" />
          <div className="absolute inset-0 bg-black/40 z-10" />
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1541913057-79902ed26003?q=80&w=2070')] bg-cover bg-center" />
        </div>

        <div className="relative z-20 text-center max-w-4xl px-6">
          <span className="text-orange-500 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">UK Standard Excellence</span>
          <h1 className="text-5xl md:text-8xl font-black tracking-tight leading-none mb-8">
            WE BUILD <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">LEGACIES.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            High-performance construction and luxury renovations. Arna Ltd delivers precision engineering for London's most ambitious residential projects.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-orange-600 text-white px-10 py-5 rounded-none font-bold uppercase tracking-widest hover:bg-orange-700 transition-all transform hover:-translate-y-1">
              Start Your Build
            </button>
            <button className="border border-white/20 backdrop-blur-sm text-white px-10 py-5 rounded-none font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
              View Projects
            </button>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-20 border-y border-white/5 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <div>
            <div className="text-3xl font-black mb-1">15+</div>
            <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl font-black mb-1">200+</div>
            <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Projects Done</div>
          </div>
          <div>
            <div className="text-3xl font-black mb-1">100%</div>
            <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Build Safety</div>
          </div>
          <div>
            <div className="text-3xl font-black mb-1">UK</div>
            <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Wide Delivery</div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-32 max-w-7xl mx-auto px-8">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl font-black uppercase italic italic leading-none mb-4">Our Expertise</h2>
            <div className="h-1 w-20 bg-orange-600" />
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Luxury Extensions", desc: "Expanding your living space with architectural precision and high-end finishes." },
            { title: "Full Renovations", desc: "Stripping back to the foundation and rebuilding your vision from the ground up." },
            { title: "New Builds", desc: "Bespoke residential construction designed for modern living and longevity." }
          ].map((s, i) => (
            <div key={i} className="p-8 border border-white/10 hover:border-orange-600/50 transition-all group cursor-default">
              <h3 className="text-xl font-bold uppercase mb-4 group-hover:text-orange-500 transition-colors">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
