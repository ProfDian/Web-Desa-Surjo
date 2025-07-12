import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#F7F4ED]">
      {/* Header */}
      <header className="bg-[#3F5231] text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-[#2A6218] rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold text-xl">DS</span>
              </div>
              <h1 className="text-2xl font-bold">Desa Surjo</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#beranda"
                className="hover:text-[#65724D] transition-colors"
              >
                Beranda
              </a>
              <a
                href="#tentang"
                className="hover:text-[#65724D] transition-colors"
              >
                Tentang
              </a>
              <a
                href="#sejarah"
                className="hover:text-[#65724D] transition-colors"
              >
                Sejarah
              </a>
              <a
                href="#potensi"
                className="hover:text-[#65724D] transition-colors"
              >
                Potensi
              </a>
              <a
                href="#budaya"
                className="hover:text-[#65724D] transition-colors"
              >
                Budaya
              </a>
              <a
                href="#umkm"
                className="hover:text-[#65724D] transition-colors"
              >
                UMKM
              </a>
            </nav>
            <div className="md:hidden">
              <button className="text-white hover:text-[#65724D] transition-colors">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#3F5231] to-[#65724D] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Selamat Datang di{" "}
                <span className="text-[#F7F4ED]">Desa Surjo</span>
              </h2>
              <p className="text-xl mb-8 text-gray-200">
                Desa yang kaya akan budaya, tradisi, dan potensi alam yang
                memukau. Bergabunglah dengan kami untuk mengenal lebih dekat
                kehidupan masyarakat Desa Surjo.
              </p>
              <div className="flex space-x-4">
                <button className="bg-[#2A6218] hover:bg-[#1e4612] text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Jelajahi Desa
                </button>
                <button className="border-2 border-white hover:bg-white hover:text-[#3F5231] text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Pelajari Lebih Lanjut
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-[#F7F4ED] rounded-lg p-8 h-96 flex items-center justify-center">
                <div className="text-center text-[#3F5231]">
                  <svg
                    className="w-24 h-24 mx-auto mb-4 text-[#65724D]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-lg font-medium">Galeri Foto Desa Surjo</p>
                  <p className="text-sm text-gray-600 mt-2">
                    Foto-foto indah pemandangan dan kegiatan masyarakat desa
                    akan ditampilkan di sini
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Section */}
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tentang Desa Surjo */}
          <section id="tentang" className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#3F5231] mb-4">
                Tentang Desa Surjo
              </h2>
              <div className="w-24 h-1 bg-[#2A6218] mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Desa Surjo adalah desa yang terletak di wilayah yang strategis
                dengan kekayaan alam dan budaya yang luar biasa.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#2A6218] rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-white"
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
                <h3 className="text-xl font-semibold text-[#3F5231] mb-2">
                  Lokasi Strategis
                </h3>
                <p className="text-gray-600">
                  Terletak di lokasi yang mudah diakses dengan pemandangan alam
                  yang indah dan udara yang sejuk.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#2A6218] rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#3F5231] mb-2">
                  Masyarakat Ramah
                </h3>
                <p className="text-gray-600">
                  Penduduk desa yang ramah dan menjunjung tinggi nilai-nilai
                  gotong royong serta kekeluargaan.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#2A6218] rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#3F5231] mb-2">
                  Potensi Unggulan
                </h3>
                <p className="text-gray-600">
                  Memiliki berbagai potensi unggulan dalam bidang pertanian,
                  pariwisata, dan industri kreatif.
                </p>
              </div>
            </div>
          </section>

          {/* Visi, Misi, Tujuan, Sasaran */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#3F5231] mb-4">
                Visi & Misi
              </h2>
              <div className="w-24 h-1 bg-[#2A6218] mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-[#3F5231] to-[#65724D] text-white rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4">Visi</h3>
                <p className="text-lg leading-relaxed">
                  "Mewujudkan Desa Surjo yang mandiri, sejahtera, dan
                  berkelanjutan berdasarkan nilai-nilai kearifan lokal dan
                  inovasi modern."
                </p>
              </div>
              <div className="bg-white border-2 border-[#65724D] rounded-lg p-8">
                <h3 className="text-2xl font-bold text-[#3F5231] mb-4">Misi</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#2A6218] rounded-full mr-3 mt-2"></span>
                    Mengembangkan potensi sumber daya alam dan manusia
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#2A6218] rounded-full mr-3 mt-2"></span>
                    Meningkatkan kesejahteraan masyarakat melalui program
                    pemberdayaan
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#2A6218] rounded-full mr-3 mt-2"></span>
                    Melestarikan budaya dan tradisi lokal
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#2A6218] rounded-full mr-3 mt-2"></span>
                    Menciptakan tata kelola pemerintahan yang transparan dan
                    akuntabel
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-[#3F5231] mb-4">
                  Tujuan
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Meningkatkan taraf hidup masyarakat</li>
                  <li>• Mengembangkan ekonomi kreatif dan UMKM</li>
                  <li>• Melestarikan lingkungan hidup</li>
                  <li>• Membangun infrastruktur yang memadai</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-[#3F5231] mb-4">
                  Sasaran
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Peningkatan pendapatan per kapita</li>
                  <li>• Pengurangan angka kemiskinan</li>
                  <li>• Peningkatan kualitas pendidikan</li>
                  <li>• Peningkatan akses kesehatan</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Option Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#3F5231] mb-4">
                Jelajahi Desa Surjo
              </h2>
              <div className="w-24 h-1 bg-[#2A6218] mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Temukan berbagai aspek menarik dari Desa Surjo melalui
                pilihan-pilihan berikut
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="h-48 bg-gradient-to-br from-[#65724D] to-[#3F5231] flex items-center justify-center">
                  <svg
                    className="w-16 h-16 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#3F5231] mb-2">
                    Sejarah
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Pelajari perjalanan panjang dan sejarah terbentuknya Desa
                    Surjo dari masa ke masa.
                  </p>
                  <button className="text-[#2A6218] hover:text-[#1e4612] font-medium group-hover:underline">
                    Baca Selengkapnya →
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="h-48 bg-gradient-to-br from-[#2A6218] to-[#65724D] flex items-center justify-center">
                  <svg
                    className="w-16 h-16 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#3F5231] mb-2">
                    Potensi Desa
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Temukan berbagai potensi unggulan yang dimiliki Desa Surjo
                    di berbagai sektor.
                  </p>
                  <button className="text-[#2A6218] hover:text-[#1e4612] font-medium group-hover:underline">
                    Jelajahi Potensi →
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="h-48 bg-gradient-to-br from-[#3F5231] to-[#2A6218] flex items-center justify-center">
                  <svg
                    className="w-16 h-16 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#3F5231] mb-2">
                    Budaya
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Mengenal tradisi, adat istiadat, dan kearifan lokal yang
                    masih dilestarikan.
                  </p>
                  <button className="text-[#2A6218] hover:text-[#1e4612] font-medium group-hover:underline">
                    Pelajari Budaya →
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="h-48 bg-gradient-to-br from-[#65724D] to-[#2A6218] flex items-center justify-center">
                  <svg
                    className="w-16 h-16 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#3F5231] mb-2">
                    UMKM
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Dukung usaha mikro, kecil, dan menengah yang berkembang di
                    desa kami.
                  </p>
                  <button className="text-[#2A6218] hover:text-[#1e4612] font-medium group-hover:underline">
                    Lihat UMKM →
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#3F5231] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-[#2A6218] rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold">DS</span>
                </div>
                <h3 className="text-xl font-bold">Desa Surjo</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Desa yang kaya akan budaya, tradisi, dan potensi alam yang
                memukau.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Tautan Cepat</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Beranda
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Tentang Desa
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Berita
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Layanan
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pelayanan Administrasi
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Surat Keterangan
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pengaduan
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Bantuan
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Kontak</h4>
              <div className="space-y-2 text-gray-300">
                <p className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
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
                  Jl. Raya Desa Surjo No. 123
                </p>
                <p className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
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
                  (021) 123-4567
                </p>
                <p className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
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
                  info@desasurjo.id
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-[#65724D] mt-8 pt-8 text-center">
            <p className="text-gray-300">
              © 2024 Desa Surjo. Semua hak dilindungi undang-undang.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
