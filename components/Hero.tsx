export default function Hero() {
    return (
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="/HeroImg.png"
            alt="Industrial Building"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              A gateway to
              <br />
              your future
            </h1>
            <button className="bg-white text-blue-900 px-6 py-3 rounded-full text-lg font-medium hover:bg-blue-50 transition-colors">
              Explore more
            </button>
          </div>
        </div>
      </section>
    )
  }
  
  