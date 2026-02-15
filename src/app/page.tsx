export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="flex items-center justify-between p-6 border-b">
        <span className="text-2xl font-bold uppercase">Arna Ltd</span>
        <a href="tel:+" className="text-sm font-semibold">Get a Quote &rarr;</a>
      </nav>

      <div className="mx-auto max-w-2xl py-32 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Precision Building & Expert Renovations
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Arna Ltd provides high-quality construction services across the UK.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a href="#" className="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white">
            Start Your Project
          </a>
        </div>
      </div>
    </main>
  )
}
