import { Instagram, Youtube } from "lucide-react";

const Footer = () => (
  <footer className="relative bg-gradient-to-br from-[#2A3B1F] via-[#3F5231] to-[#4A5E36] text-white overflow-hidden">
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M30%2030c0%2016.569%2013.431%2030%2030%2030v-30H30z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"></div>
    </div>

    {/* Decorative Elements */}
    <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#2A6218] to-transparent rounded-full blur-3xl opacity-30 -translate-x-16 -translate-y-16"></div>
    <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-[#65724D] to-transparent rounded-full blur-3xl opacity-20 translate-x-20 translate-y-20"></div>

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand Section */}
        <div className="md:col-span-1">
          <div className="flex items-center mb-6">
            <div className="relative">
              <div className="w-14 h-14 bg-gradient-to-br from-[#2A6218] to-[#4A7C59] rounded-2xl flex items-center justify-center mr-4 shadow-xl">
                <span className="text-white font-bold text-lg">DS</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#7FB069] rounded-full animate-pulse"></div>
            </div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              Desa Surjo
            </h3>
          </div>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Desa yang kaya akan budaya, tradisi, dan potensi alam yang memukau.
          </p>

          {/* Social Media */}
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/pemerintahdesasurjo/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-110"
            >
              <Instagram className="w-6 h-6 text-white group-hover:text-white transition-colors" />
            </a>
            <a
              href="https://youtube.com/@desasurjo"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-red-500 hover:to-red-600 transition-all duration-300 transform hover:scale-110"
            >
              <Youtube className="w-6 h-6 text-white group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-bold mb-6 relative">
            <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              Tautan Cepat
            </span>
            <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-[#2A6218] to-[#7FB069] rounded-full"></div>
          </h4>
          <ul className="space-y-3">
            {["Beranda", "Tentang Desa", "Berita", "Layanan"].map(
              (item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="group flex items-center text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2"
                  >
                    <div className="w-2 h-2 bg-[#7FB069] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-xl font-bold mb-6 relative">
            <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              Layanan
            </span>
            <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-[#2A6218] to-[#7FB069] rounded-full"></div>
          </h4>
          <ul className="space-y-3">
            {[
              "Pelayanan Administrasi",
              "Surat Keterangan",
              "Pengaduan",
              "Bantuan",
            ].map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="group flex items-center text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2"
                >
                  <div className="w-2 h-2 bg-[#7FB069] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xl font-bold mb-6 relative">
            <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              Kontak
            </span>
            <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-[#2A6218] to-[#7FB069] rounded-full"></div>
          </h4>
          <div className="space-y-4">
            <div className="group flex items-start text-gray-300 hover:text-white transition-colors duration-300">
              <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center mr-3 mt-0.5 group-hover:bg-[#2A6218] transition-all duration-300">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="font-medium">Alamat</p>
                <p className="text-sm">
                  Jalan Bawang-Limpung Km. 03 Kauman, Desa Surjo Kec. Bawang
                  Kab. Batang 51274
                </p>
              </div>
            </div>

            <div className="group flex items-start text-gray-300 hover:text-white transition-colors duration-300">
              <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center mr-3 mt-0.5 group-hover:bg-[#2A6218] transition-all duration-300">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <p className="font-medium">Telepon</p>
                <p className="text-sm">(021) 123-4567</p>
              </div>
            </div>

            <div className="group flex items-start text-gray-300 hover:text-white transition-colors duration-300">
              <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center mr-3 mt-0.5 group-hover:bg-[#2A6218] transition-all duration-300">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <p className="font-medium">Email</p>
                <p className="text-sm">pemdesdesasurjo@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="relative mt-16 pt-8">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#65724D] to-transparent"></div>
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-300 text-sm">
            © 2025 Desa Surjo. Semua hak dilindungi undang-undang.
          </p>
          <div className="flex items-center space-x-4 text-sm text-gray-400">
            <span>Dibuat dengan</span>
            <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
            <span>untuk masyarakat</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
