import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import { Target, Eye, CheckCircle, Users } from "lucide-react";
import AboutSurjo from "../components/AboutSurjo";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#F7F4ED]">
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Main Section */}
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tentang Desa Surjo */}
          <AboutSurjo />

          {/* Visi, Misi, Tujuan, Sasaran */}
          <section className="mb-20 px-4">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#3F5231] mb-6 relative">
                Visi & Misi
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-[#2A6218] to-[#65724D] rounded-full opacity-20"></div>
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-[#2A6218] to-[#65724D] mx-auto mb-4"></div>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Komitmen kami untuk membangun Desa Surjo yang lebih baik
              </p>
            </div>

            {/* Vision & Mission Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Vision Card */}
              <div className="group relative overflow-hidden bg-gradient-to-br from-[#3F5231] via-[#4A5D37] to-[#65724D] text-white rounded-2xl p-8 hover:scale-105 transition-all duration-300 shadow-xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/5 rounded-full -ml-10 -mb-10"></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Eye className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-center text-3xl font-bold mb-6">Visi</h3>
                  <p className="text-center text-lg leading-relaxed opacity-95">
                    "Mewujudkan Desa Surjo yang mandiri, sejahtera, dan
                    berkelanjutan berdasarkan nilai-nilai kearifan lokal dan
                    inovasi modern."
                  </p>
                </div>
              </div>

              {/* Mission Card */}
              <div className="group relative overflow-hidden bg-white border-2 border-[#65724D] rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 shadow-lg">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#2A6218]/10 to-[#65724D]/10 rounded-full -mr-16 -mt-16"></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#2A6218] to-[#65724D] rounded-full flex items-center justify-center">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-center text-3xl font-bold text-[#3F5231] mb-6">
                    Misi
                  </h3>
                  <ul className="space-y-4 text-gray-700">
                    {[
                      "Mengembangkan potensi sumber daya alam dan manusia",
                      "Meningkatkan kesejahteraan masyarakat melalui program pemberdayaan",
                      "Melestarikan budaya dan tradisi lokal",
                      "Menciptakan tata kelola pemerintahan yang transparan dan akuntabel",
                    ].map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start group-hover:translate-x-2 transition-transform duration-300"
                      >
                        <div className="w-6 h-6 bg-gradient-to-r from-[#2A6218] to-[#65724D] rounded-full mr-4 mt-1 flex items-center justify-center flex-shrink-0">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <span className="text-base leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Goals & Targets */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Goals Card */}
              <div className="group relative overflow-hidden bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-2xl transition-all duration-300">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#2A6218]/10 to-[#65724D]/10 rounded-full -mr-12 -mt-12"></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#2A6218] to-[#65724D] rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
                      <CheckCircle className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <h3 className="text-center text-2xl font-bold text-[#3F5231] mb-6">
                    Tujuan
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    {[
                      "Meningkatkan taraf hidup masyarakat",
                      "Mengembangkan ekonomi kreatif dan UMKM",
                      "Melestarikan lingkungan hidup",
                      "Membangun infrastruktur yang memadai",
                    ].map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center group-hover:translate-x-1 transition-transform duration-300"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-[#2A6218] to-[#65724D] rounded-full mr-3"></div>
                        <span className="text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Targets Card */}
              <div className="group relative overflow-hidden bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-2xl transition-all duration-300">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#2A6218]/10 to-[#65724D]/10 rounded-full -mr-12 -mt-12"></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#2A6218] to-[#65724D] rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
                      <Users className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <h3 className="text-center text-2xl font-bold text-[#3F5231] mb-6">
                    Sasaran
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    {[
                      "Peningkatan pendapatan per kapita",
                      "Pengurangan angka kemiskinan",
                      "Peningkatan kualitas pendidikan",
                      "Peningkatan akses kesehatan",
                    ].map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center group-hover:translate-x-1 transition-transform duration-300"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-[#2A6218] to-[#65724D] rounded-full mr-3"></div>
                        <span className="text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
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
                  <Link to="/sejarah" className="text-[#2A6218] hover:text-[#1e4612] font-medium group-hover:underline">
                    Baca Selengkapnya →
                  </Link>
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

      <Footer />
    </div>
  );
};

export default HomePage;
