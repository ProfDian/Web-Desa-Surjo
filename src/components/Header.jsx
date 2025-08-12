import { useState } from "react";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Beranda", href: "/" },
  { name: "Wisata", href: "/wisata" },
  { name: "Sejarah", href: "/sejarah" },
  { name: "Potensi", href: "/potensi" },
  { name: "Budaya", href: "/budaya" },
  { name: "UMKM", href: "/umkm" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-4 sm:p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5 flex items-center group">
            {/* KKN Identity Image Container */}
            <div className="relative mr-2 sm:mr-3 lg:mr-4 flex-shrink-0">
              <div className="absolute -inset-1 rounded-2xl blur-sm opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-xl p-1.5 sm:p-2 border border-white/20 group-hover:bg-white/20 transition-all duration-300 shadow-lg">
                <img
                  src="FEED KKN .png"
                  loading="lazy"
                  alt="KKNT IDBU 71 Universitas Diponegoro - Desa Surjo"
                  className="h-8 w-auto object-contain filter brightness-110 group-hover:brightness-125 transition-all duration-300 sm:h-10 md:h-12 lg:h-14 xl:h-16"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="flex flex-col min-w-0 flex-1">
              <span className="text-sm font-bold text-white sm:text-lg md:text-xl lg:text-2xl bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent leading-tight">
                DESA WISATA SURJO
              </span>
              <span className="text-xs text-[#90EE90] font-bold  hidden sm:block md:text-sm lg:text-base leading-tight">
                KKNT IDBU 71 Universitas Diponegoro
              </span>
            </div>
          </a>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-xl p-2.5 text-white bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-4 xl:gap-x-6 2xl:gap-x-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative text-xs font-bold text-[#90EE90] hover:text-white transition-all duration-300 group px-2 py-2 rounded-lg hover:bg-white/10 backdrop-blur-sm xl:text-sm xl:px-3 2xl:text-base"
            >
              {item.name}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#7FB069] to-[#2A6218] group-hover:w-full transition-all duration-300 rounded-full"></div>
            </a>
          ))}
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div
            className="fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gradient-to-br from-[#2A3B1F] via-[#3F5231] to-[#4A5E36] p-4 sm:p-6 sm:max-w-sm border-l border-white/10 shadow-2xl">
            <div className="flex items-center justify-between">
              <a
                href="#"
                className="-m-1.5 p-1.5 flex items-center group flex-1 min-w-0"
              >
                {/* Mobile KKN Identity */}
                <div className="relative mr-2 sm:mr-3 flex-shrink-0">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#2A6218] to-[#7FB069] rounded-xl blur-sm opacity-30"></div>
                  <div className="relative bg-white/10 backdrop-blur-sm rounded-lg p-1.5 border border-white/20">
                    <img
                      src="FEED KKN .png"
                      alt="KKNT IDBU 71"
                      className="h-8 w-auto object-contain filter brightness-110 sm:h-10"
                    />
                  </div>
                </div>
                <div className="flex flex-col min-w-0 flex-1">
                  <span className="text-base font-bold text-white sm:text-lg leading-tight">
                    Desa Surjo
                  </span>
                  <span className="text-xs text-[#90EE90] font-medium sm:text-sm leading-tight">
                    KKNT IDBU 71
                  </span>
                </div>
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-xl p-2.5 text-white bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 flex-shrink-0 ml-2"
              >
                <span className="sr-only">Close menu</span>
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            <div className="mt-6 sm:mt-8 flow-root">
              <div className="-my-6">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="group -mx-3 flex items-center rounded-xl px-3 py-3 text-sm font-semibold text-white hover:bg-white/10 backdrop-blur-sm border border-transparent hover:border-white/20 transition-all duration-300 sm:text-base sm:px-4"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className="w-2 h-2 bg-[#7FB069] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0"></div>
                      <span className="truncate">{item.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile menu decorative element */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
              <div className="h-px bg-gradient-to-r from-transparent via-[#7FB069] to-transparent opacity-30"></div>
              <div className="mt-3 sm:mt-4 text-center">
                <span className="text-xs text-gray-400 sm:text-sm">
                  Program Pengabdian Kepada Masyarakat
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
