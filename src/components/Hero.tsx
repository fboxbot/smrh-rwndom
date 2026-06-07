'use client'

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-dark pt-32 pb-40">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-black text-white mb-6 leading-tight">
            The Future of
            <br />
            <span className="bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent">
              Crypto Gaming
            </span>
          </h1>
          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
            Play 15,000+ games, bet on sports, and cash out in minutes with crypto. 
            Fast. Fair. Fun.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="px-8 py-4 bg-gradient-to-r from-primary to-blue-500 text-dark font-black rounded-lg hover:shadow-2xl hover:shadow-primary/50 transition text-lg transform hover:scale-105">
              🚀 Play Now
            </button>
            <button className="px-8 py-4 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary/10 transition text-lg">
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 mb-8">
            <div className="bg-darkGrayLight/50 backdrop-blur border border-primary/30 rounded-lg p-4 md:p-6 hover:border-primary/60 transition">
              <p className="text-3xl md:text-4xl font-black text-primary mb-2">15K+</p>
              <p className="text-gray-400 text-sm">Games</p>
            </div>
            <div className="bg-darkGrayLight/50 backdrop-blur border border-primary/30 rounded-lg p-4 md:p-6 hover:border-primary/60 transition">
              <p className="text-3xl md:text-4xl font-black text-primary mb-2">&lt;1min</p>
              <p className="text-gray-400 text-sm">Withdrawals</p>
            </div>
            <div className="bg-darkGrayLight/50 backdrop-blur border border-primary/30 rounded-lg p-4 md:p-6 hover:border-primary/60 transition">
              <p className="text-3xl md:text-4xl font-black text-primary mb-2">24/7</p>
              <p className="text-gray-400 text-sm">Support</p>
            </div>
          </div>

          {/* Crypto badges */}
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <span className="px-4 py-2 bg-darkGrayLight border border-primary/30 rounded-full text-gray-300">₿ Bitcoin</span>
            <span className="px-4 py-2 bg-darkGrayLight border border-primary/30 rounded-full text-gray-300">Ξ Ethereum</span>
            <span className="px-4 py-2 bg-darkGrayLight border border-primary/30 rounded-full text-gray-300">◎ Solana</span>
            <span className="px-4 py-2 bg-darkGrayLight border border-primary/30 rounded-full text-gray-300">USDT Tether</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
