"use client";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-zinc-100 font-sans selection:bg-orange-500/30">
      {/* Premium Glass Header */}
      <nav className="fixed w-full top-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between backdrop-blur-xl bg-black/40 border border-white/10 rounded-full px-8 py-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-700 rounded-lg flex items-center justify-center shadow-lg shadow-orange-500/20">
              <span className="font-black text-xl italic tracking-tighter text-white">A</span>
            </div>
            <span className="text-xl font-bold tracking-[0.2em] uppercase hidden sm:block">Arna Ltd</span>
          </div>
          <div className="hidden md:flex gap-10 text-[10px] font-bold tracking-[0.3em] uppercase text-zinc-400">
            <a href="#expertise" className="hover:text-orange-500 transition-all">Expertise</a>
            <a href="#portfolio" className="hover:text-orange-500 transition-all">Portfolio</a>
            <a href="#process" className="hover:text-orange-500 transition-all">Process</a>
          </div>
          <button className="bg-zinc-100 text-black px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-orange-600 hover:text-white transition-all">
            Consultation
          </button>
        </div>
      </nav>

      {/* Cinematic Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#0a0a0a] z-10" />
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6199f7d009?q=80&w=2070" 
            alt="Luxury modern architecture"
            className="w-full h-full object-cover scale-110 animate-[subtle-zoom_20s_infinite_alternate]"
          />
        </div>

        <div className="relative z-20 text-center max-w-5xl px-6">
          <div className="flex items-center justify-center gap-4 mb-8 opacity-0 animate-[fade-up_0.8s_ease-out_forwards]">
            <div className="h-[1px] w-12 bg-orange-500/50" />
            <span className="text-orange-500 font-bold tracking-[0.5em] uppercase text-[10px]">Prime Residential Construction</span>
            <div className="h-[1px] w-12 bg-orange-500/50" />
          </div>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] mb-10 opacity-0 animate-[fade-up_1s_ease-out_0.2s_forwards]">
            WE BUILD <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-400 to-zinc-600">DISTINCTION.</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed opacity-0 animate-[fade-up_1s_ease-out_0.4s_forwards]">
            Master-grade building services and luxury interior renovations. Arna Ltd delivers uncompromising precision for the UK's most demanding estates.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center opacity-0 animate-[fade-up_1s_ease-out_0.6s_forwards]">
            <button className="bg-orange-600 text-white px-12 py-5 rounded-none font-bold uppercase tracking-[0.2em] text-xs hover:bg-orange-700 transition-all hover:shadow-[0_0_40px_rgba(234,88,12,0.3)] group">
              Start Your Legacy
              <span className="ml-3 inline-block transition-transform group-hover:translate-x-1">→</span>
            </button>
            <button className="border border-white/10 backdrop-blur-md bg-white/5 text-white px-12 py-5 rounded-none font-bold uppercase tracking-[0.2em] text-xs hover:bg-white hover:text-black transition-all">
              The Portfolio
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-20">
          <div className="w-[1px] h-16 bg-white" />
        </div>
      </section>

      {/* Numerical Trust Bar */}
      <section className="py-24 border-y border-white/5 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 lg:grid-cols-4 gap-16">
          {[
            { label: "Completed Units", val: "480+" },
            { label: "Years of Mastery", val: "22" },
            { label: "Safety Rating", val: "A+" },
            { label: "London Postcodes", val: "14" }
          ].map((stat, i) => (
            <div key={i} className="group flex flex-col items-center lg:items-start">
              <div className="text-5xl font-black text-white mb-2 group-hover:text-orange-500 transition-colors tracking-tighter">{stat.val}</div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-black">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Showcase */}
      <section id="expertise" className="py-40 max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-xl text-left">
            <h2 className="text-5xl font-black uppercase tracking-tighter leading-none mb-6">Our Core <br /><span className="text-orange-600">Expertise.</span></h2>
            <p className="text-zinc-400 font-light">From architectural planning to final interior polishing, we manage the entire lifecycle of your high-end build.</p>
          </div>
          <div className="h-px flex-grow bg-white/5 mx-12 hidden lg:block" />
          <div className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600">Service Categories 01-03</div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {[
            { 
              title: "Luxury Extensions", 
              img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070",
              desc: "Seamless architectural integration that expands your living footprint without compromise." 
            },
            { 
              title: "Prestige Renovations", 
              img: "https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?q=80&w=2070",
              desc: "Total transformation of heritage and modern estates using world-class materials and techniques." 
            },
            { 
              title: "Bespoke New Builds", 
              img: "https://images.unsplash.com/photo-1600585154526-990dcea4db0d?q=80&w=2070",
              desc: "Ground-up execution of unique architectural visions, delivered with surgical precision." 
            }
          ].map((service, i) => (
            <div key={i} className="group cursor-none">
              <div className="relative aspect-[4/5] overflow-hidden mb-8 grayscale hover:grayscale-0 transition-all duration-700 bg-zinc-900">
                <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-700" />
              </div>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[10px] font-black text-orange-600">0{i+1}</span>
                <h3 className="text-2xl font-bold uppercase tracking-tight">{service.title}</h3>
              </div>
              <p className="text-zinc-500 text-sm leading-relaxed font-light">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Dark Luxury CTA */}
      <section id="process" className="py-40 bg-zinc-100 text-black">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-10 italic">
            READY TO ELEVATE <br /> YOUR POSTCODE?
          </h2>
          <p className="text-lg text-zinc-600 mb-12 font-medium">
            Contact Arna Ltd today for a confidential project consultation.
          </p>
          <button className="bg-black text-white px-16 py-6 rounded-none font-bold uppercase tracking-[0.3em] text-xs hover:bg-orange-600 transition-all">
            Inquire Now
          </button>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="py-12 border-t border-white/5 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-500 italic">
            Arna Ltd © 2026 — Master Builders UK
          </div>
          <div className="flex gap-8 text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-500">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes subtle-zoom {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(40px); filter: blur(10px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
      `}</style>
    </main>
  );
}
