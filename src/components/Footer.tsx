'use client'

const Footer = () => {
  return (
    <footer className="bg-dark border-t border-primary/20 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="text-3xl">🎲</div>
              <h3 className="text-xl font-black text-white">shuffle</h3>
            </div>
            <p className="text-gray-400">The future of crypto gaming. Fast. Fair. Fun.</p>
          </div>

          <div>
            <h4 className="text-white font-black text-lg mb-4">Games</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-primary transition">Casino</a></li>
              <li><a href="#" className="hover:text-primary transition">Sports</a></li>
              <li><a href="#" className="hover:text-primary transition">Originals</a></li>
              <li><a href="#" className="hover:text-primary transition">Live Dealer</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black text-lg mb-4">Platform</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-primary transition">How It Works</a></li>
              <li><a href="#" className="hover:text-primary transition">Promotions</a></li>
              <li><a href="#" className="hover:text-primary transition">VIP Program</a></li>
              <li><a href="#" className="hover:text-primary transition">Affiliates</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black text-lg mb-4">Support</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-primary transition">Help Center</a></li>
              <li><a href="#" className="hover:text-primary transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary transition">Status</a></li>
              <li><a href="#" className="hover:text-primary transition">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black text-lg mb-4">Legal</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-primary transition">Terms</a></li>
              <li><a href="#" className="hover:text-primary transition">Privacy</a></li>
              <li><a href="#" className="hover:text-primary transition">Responsible Gaming</a></li>
              <li><a href="#" className="hover:text-primary transition">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Crypto badges */}
        <div className="border-t border-primary/20 pt-8 mb-8">
          <p className="text-gray-400 mb-4 font-semibold">We Accept</p>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-darkGrayLight border border-primary/20 rounded-full text-sm">₿ Bitcoin</span>
            <span className="px-4 py-2 bg-darkGrayLight border border-primary/20 rounded-full text-sm">Ξ Ethereum</span>
            <span className="px-4 py-2 bg-darkGrayLight border border-primary/20 rounded-full text-sm">◎ Solana</span>
            <span className="px-4 py-2 bg-darkGrayLight border border-primary/20 rounded-full text-sm">₮ USDT</span>
            <span className="px-4 py-2 bg-darkGrayLight border border-primary/20 rounded-full text-sm">$ USDC</span>
            <span className="px-4 py-2 bg-darkGrayLight border border-primary/20 rounded-full text-sm">⚙️ SHFL</span>
          </div>
        </div>

        <div className="border-t border-primary/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2026 Shuffle. All rights reserved. | Crypto Casino & Sportsbook
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-primary transition">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-primary transition">Discord</a>
            <a href="#" className="text-gray-400 hover:text-primary transition">Telegram</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
