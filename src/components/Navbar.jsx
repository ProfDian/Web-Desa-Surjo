import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Beranda", href: "#beranda" },
  { name: "Tentang", href: "#tentang" },
  { name: "Sejarah", href: "#sejarah" },
  { name: "Potensi", href: "#potensi" },
  { name: "Budaya", href: "#budaya" },
  { name: "UMKM", href: "#umkm" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 transition-all duration-300">
      <nav
        className={`mx-auto max-w-7xl transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg m-4 rounded-xl"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4 lg:px-8">
          {/* Logo - Left side */}
          <div className="flex items-center">
            <a href="#" className="flex items-center group">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center mr-3 transition-all duration-300 ${
                  scrolled
                    ? "bg-[#2A6218] shadow-md"
                    : "bg-white/20 backdrop-blur-sm border border-white/30"
                }`}
              >
                <span className="text-white font-bold text-xl">DS</span>
              </div>
              <span
                className={`text-2xl font-bold transition-all duration-300 ${
                  scrolled ? "text-[#2A6218]" : "text-white drop-shadow-lg"
                }`}
              >
                Desa Surjo
              </span>
            </a>
          </div>

          {/* Desktop Navigation - Center */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-semibold transition-all duration-300 hover:scale-105 relative group ${
                  scrolled
                    ? "text-[#3F5231] hover:text-[#2A6218]"
                    : "text-white hover:text-[#90EE90] drop-shadow-md"
                }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    scrolled ? "bg-[#2A6218]" : "bg-[#90EE90]"
                  }`}
                ></span>
              </a>
            ))}
          </div>

          {/* Mobile menu button - Right side */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className={`p-2.5 rounded-md transition-all duration-300 ${
                scrolled
                  ? "text-[#3F5231] hover:bg-[#F7F4ED]"
                  : "text-white hover:bg-white/20 backdrop-blur-sm"
              }`}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Mobile menu panel */}
          <div className="fixed inset-y-0 right-0 z-50 w-full max-w-sm">
            <div className="h-full bg-[#3F5231]/95 backdrop-blur-md border-l border-white/10">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <a href="#" className="flex items-center">
                  <div className="w-10 h-10 bg-[#2A6218] rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-lg">DS</span>
                  </div>
                  <span className="text-xl font-bold text-white">
                    Desa Surjo
                  </span>
                </a>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2.5 rounded-md text-white hover:bg-white/10 transition-colors"
                >
                  <span className="sr-only">Close menu</span>
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation */}
              <div className="p-6">
                <div className="space-y-1">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-3 text-base font-semibold text-white hover:bg-[#2A6218] hover:text-white rounded-lg transition-all duration-200 transform hover:translate-x-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
