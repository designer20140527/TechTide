import Link from "next/link"
import Image from "next/image"

export default function SiteFooter() {
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "Tokenomics", href: "#tokenomics" },
    { name: "Roadmap", href: "#roadmap" },
    { name: "Gitbook", href: "#" }
  ]
  
  return (
    <footer className="flex justify-center">
      <div className="max-w-[1400px] w-full bg-[#005fa3] mx-auto rounded-bl-[40px] rounded-br-[40px]">
        <div className="w-full px-16 pt-12 pb-6 text-white">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
            {/* Logo */}
            <div className="flex items-start gap-3">
              <Image 
                src="/logo-white.png"
                alt="TechTide Logo"
                width={40}
                height={40}
              />
              <div>
                <h2 className="font-syne text-2xl font-bold">TechTide</h2>
              </div>
            </div>
            
            {/* Navigation */}
            <div className="flex gap-12">
              <div>
                <h3 className="font-semibold mb-4">Navigation</h3>
                <ul className="space-y-2">
                  {navItems.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="opacity-80 hover:opacity-100 transition-opacity">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Social Icons */}
              <div>
                <h3 className="font-semibold mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {/* Twitter X */}
                  <Link 
                    href="https://x.com/TechTide_COIN" 
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="bg-white/10 w-10 h-10 rounded-full hover:bg-white/20 transition-colors flex items-center justify-center"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </Link>
                  
                  {/* Telegram */}
                  <Link 
                    href="https://t.me/TechTide_Official" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 w-10 h-10 rounded-full hover:bg-white/20 transition-colors flex items-center justify-center"
                  >
                    <Image
                      src="/telegram.svg"
                      alt="Telegram"
                      width={20}
                      height={20}
                      className="invert"
                    />
                  </Link>
                  
                  {/* Dextools */}
                  <Link 
                    href="https://dextools.io" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 w-10 h-10 rounded-full hover:bg-white/20 transition-colors flex items-center justify-center"
                  >
                    <Image
                      src="/dextools.svg"
                      alt="Dextools"
                      width={20}
                      height={20}
                      className="invert"
                    />
                  </Link>
                  
                  {/* Dexscreener */}
                  <Link 
                    href="https://dexscreener.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 w-10 h-10 rounded-full hover:bg-white/20 transition-colors flex items-center justify-center"
                  >
                    <Image
                      src="/dexscreener.svg"
                      alt="Dexscreener"
                      width={20}
                      height={20}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full h-px bg-white/20 mt-8 mb-6"></div>
          
          <div className="text-center">
            <p className="opacity-80 text-sm">© 2025 TechTide. All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  )
} 