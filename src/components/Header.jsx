import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const navigation = [
  { name: "Beranda", href: "/" },
  { name: "Wisata", href: "Wisata" },
  { name: "Tentang", href: "#tentang" },
  { name: "Sejarah", href: "sejarah" },
  { name: "Potensi", href: "potensi" },
  { name: "Budaya", href: "budaya" },
  { name: "UMKM", href: "umkm" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-gradient-to-r from-[#0f1a0a]/95 via-[#1a3010]/95 to-[#0f1a0a]/95 backdrop-blur-xl shadow-2xl border-b border-emerald-400/20"
            : "bg-gradient-to-b from-[#0a1505]/80 via-[#142a0c]/70 to-transparent backdrop-blur-sm"
        }`}
      >
        {/* Animated background patterns */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-emerald-400/10 to-green-600/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -top-20 -left-32 w-60 h-60 bg-gradient-to-br from-lime-400/8 to-emerald-500/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-2 bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent blur-sm"></div>
        </div>

        <nav className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
            {/* Logo Section - Fixed */}
            <div className="flex items-center">
              <a
                href="#"
                className="flex items-center group transition-all duration-500 hover:scale-105"
              >
                {/* Logo Container with Glow Effect */}
                <div className="relative mr-2 sm:mr-3 flex-shrink-0">
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400/30 to-lime-400/30 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                  <div className="relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md rounded-xl p-1.5 sm:p-2 border border-white/20 group-hover:border-emerald-400/40 transition-all duration-500 shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 to-lime-400/5 rounded-xl"></div>
                    <img
                      src="FEED KKN .png"
                      loading="lazy"
                      alt="KKNT IDBU 71 Universitas Diponegoro - Desa Surjo"
                      className="relative h-8 w-auto sm:h-10 lg:h-12 object-contain filter brightness-110 group-hover:brightness-125 transition-all duration-500"
                    />
                  </div>
                </div>

                {/* Text Content - Fixed Responsive Typography */}
                <div className="flex flex-col min-w-0 flex-1">
                  <span className="text-xs sm:text-base lg:text-xl xl:text-2xl font-bold bg-gradient-to-r from-white via-emerald-100 to-white bg-clip-text text-transparent leading-tight drop-shadow-2xl whitespace-nowrap">
                    DESA WISATA SURJO
                  </span>
                  <div className="flex items-center mt-0.5">
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-gradient-to-r from-emerald-400 to-lime-400 rounded-full mr-1.5 animate-pulse flex-shrink-0"></div>
                    <span className="text-xs sm:text-sm lg:text-base font-semibold bg-gradient-to-r from-emerald-300 to-lime-300 bg-clip-text text-transparent leading-tight drop-shadow-lg truncate">
                      KKNT IDBU 71 Universitas Diponegoro
                    </span>
                  </div>
                </div>
              </a>
            </div>

            {/* Desktop Navigation - Enhanced */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigation.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="group relative px-3 py-2 xl:px-4 xl:py-3 text-sm xl:text-base font-semibold text-emerald-100/90 hover:text-white transition-all duration-300 rounded-xl hover:bg-gradient-to-r hover:from-emerald-600/20 hover:to-lime-500/20 backdrop-blur-sm border border-transparent hover:border-emerald-400/30 whitespace-nowrap"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="relative z-10">{item.name}</span>

                  {/* Hover effect backgrounds */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 to-lime-500/0 group-hover:from-emerald-500/10 group-hover:to-lime-500/10 rounded-xl transition-all duration-300"></div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-lime-400 group-hover:w-3/4 transition-all duration-300 rounded-full"></div>

                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/0 to-lime-400/0 group-hover:from-emerald-400/5 group-hover:to-lime-400/5 rounded-xl blur-xl transition-all duration-300"></div>
                </a>
              ))}
            </div>

            {/* Mobile Menu Button - Enhanced */}
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="relative inline-flex items-center justify-center p-2 sm:p-2.5 text-white bg-gradient-to-r from-emerald-600/80 to-lime-600/80 hover:from-emerald-500 hover:to-lime-500 backdrop-blur-md border border-emerald-400/30 hover:border-emerald-300/50 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 to-lime-400/10 rounded-xl"></div>
                <Menu className="relative w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:scale-110" />
                <span className="sr-only">Open main menu</span>
              </button>
            </div>
          </div>
        </nav>

        {/* Bottom gradient transition */}
        <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-b from-transparent via-[#0f1a0a]/20 to-[#0f1a0a]/40 pointer-events-none"></div>
      </header>

      {/* Mobile Menu - Enhanced */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-md transition-opacity duration-300"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Mobile menu panel */}
          <div className="absolute inset-y-0 right-0 w-full max-w-sm bg-gradient-to-br from-[#0a1505]/95 via-[#142a0c]/90 to-[#0f1a0a]/95 backdrop-blur-xl border-l border-emerald-400/20 shadow-2xl">
            {/* Animated background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-emerald-400/10 to-lime-400/5 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute top-1/2 -left-20 w-32 h-32 bg-gradient-to-br from-lime-400/8 to-emerald-400/5 rounded-full blur-xl animate-pulse delay-1000"></div>
            </div>

            <div className="relative h-full flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between p-4 sm:p-6 border-b border-emerald-400/20">
                <a href="#" className="flex items-center group">
                  <div className="relative mr-3">
                    <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400/30 to-lime-400/30 rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    <div className="relative bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-xl p-2 border border-white/20">
                      <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-lime-500 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-xs">
                          KKN
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-base font-bold text-white leading-tight truncate">
                      Desa Wisata Surjo
                    </span>
                    <span className="text-xs text-emerald-300 font-medium leading-tight truncate">
                      KKNT IDBU 71
                    </span>
                  </div>
                </a>

                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="relative p-2 text-white bg-gradient-to-r from-emerald-600/80 to-lime-600/80 hover:from-emerald-500 hover:to-lime-500 backdrop-blur-sm border border-emerald-400/30 rounded-xl transition-all duration-300 group flex-shrink-0"
                >
                  <X className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                </button>
              </div>

              {/* Navigation */}
              <div className="flex-1 px-4 sm:px-6 py-6 sm:py-8">
                <div className="space-y-2 sm:space-y-3">
                  {navigation.map((item, index) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="group flex items-center p-3 sm:p-4 text-base font-semibold text-emerald-100/90 hover:text-white rounded-xl sm:rounded-2xl hover:bg-gradient-to-r hover:from-emerald-600/20 hover:to-lime-500/20 backdrop-blur-sm border border-transparent hover:border-emerald-400/30 transition-all duration-300 shadow-sm hover:shadow-xl"
                      onClick={() => setMobileMenuOpen(false)}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-lime-400 rounded-full mr-4 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:animate-pulse flex-shrink-0"></div>
                      <span className="flex-1">{item.name}</span>
                      <ChevronDown className="w-4 h-4 opacity-0 group-hover:opacity-60 rotate-[-90deg] transition-all duration-300 flex-shrink-0" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="p-4 sm:p-6 border-t border-emerald-400/20">
                <div className="text-center">
                  <div className="h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent mb-4"></div>
                  <span className="text-sm text-emerald-300/80 font-medium block">
                    Program Pengabdian Kepada Masyarakat
                  </span>
                  <div className="mt-2 flex justify-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></div>
                    <div className="w-1.5 h-1.5 bg-lime-400 rounded-full animate-pulse delay-300"></div>
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse delay-700"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
