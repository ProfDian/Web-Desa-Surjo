import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import { Target, Eye, CheckCircle, Users } from "lucide-react";
import AboutSurjo from "../components/AboutSurjo";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const HomePage = () => {
  const navigate = useNavigate();

  // Handler function untuk navigasi
  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <motion.div
      className="min-h-screen bg-[#F7F4ED]"
      initial={{ opacity: 0, y: 50, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -0, scale: 0.98 }}
      transition={{
        duration: 0.5,
        ease: [0.4, 0.0, 0.2, 1],
      }}
    >
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

          {/* Option Section - Updated */}
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
              {/* Sejarah Card */}
              <div
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer"
                onClick={() => handleNavigation("/sejarah")}
              >
                <div className="h-48 bg-gradient-to-br from-[#65724D] to-[#3F5231] flex items-center justify-center">
                  <img
                    src="https://i.pinimg.com/736x/c6/75/52/c6755269c6ad9ac1f6fd76ed74ec4b6c.jpg"
                    loading="lazy"
                    alt="Sejarah"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#3F5231] mb-2">
                    Sejarah
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Pelajari perjalanan panjang dan sejarah terbentuknya Desa
                    Surjo dari masa ke masa.
                  </p>
                  <span className="text-[#2A6218] hover:text-[#1e4612] font-medium group-hover:underline">
                    Baca Selengkapnya →
                  </span>
                </div>
              </div>

              {/* Potensi Card */}
              <div
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer"
                onClick={() => handleNavigation("/potensi")}
              >
                <div className="h-48 bg-gradient-to-br from-[#2A6218] to-[#65724D] flex items-center justify-center">
                  <img
                    src="https://i.pinimg.com/736x/ee/08/ca/ee08ca9809d8f76bb42503428c0b7a5a.jpg"
                    loading="lazy"
                    alt="Potensi"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#3F5231] mb-2">
                    Potensi Desa
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Temukan berbagai potensi unggulan yang dimiliki Desa Surjo
                    di berbagai sektor.
                  </p>
                  <span className="text-[#2A6218] hover:text-[#1e4612] font-medium group-hover:underline">
                    Jelajahi Potensi →
                  </span>
                </div>
              </div>

              {/* Budaya Card */}
              <div
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer"
                onClick={() => handleNavigation("/budaya")}
              >
                <div className="h-48 bg-gradient-to-br from-[#3F5231] to-[#2A6218] flex items-center justify-center">
                  <img
                    src="https://i.pinimg.com/736x/ee/08/ca/ee08ca9809d8f76bb42503428c0b7a5a.jpg"
                    loading="lazy"
                    alt="Potensi"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#3F5231] mb-2">
                    Budaya
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Mengenal tradisi, adat istiadat, dan kearifan lokal yang
                    masih dilestarikan.
                  </p>
                  <span className="text-[#2A6218] hover:text-[#1e4612] font-medium group-hover:underline">
                    Pelajari Budaya →
                  </span>
                </div>
              </div>

              {/* UMKM Card */}
              <div
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer"
                onClick={() => handleNavigation("/umkm")}
              >
                <div className="h-48 bg-gradient-to-br from-[#65724D] to-[#2A6218] flex items-center justify-center">
                  <img
                    src="https://cdn.rri.co.id/berita/Jakarta/o/1729854463470-d0bd99163261318d5675e320af42c52d/n07c8yns8hqgivp.jpeg"
                    loading="lazy"
                    alt="Potensi"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#3F5231] mb-2">
                    UMKM
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Dukung usaha mikro, kecil, dan menengah yang berkembang di
                    desa kami.
                  </p>
                  <span className="text-[#2A6218] hover:text-[#1e4612] font-medium group-hover:underline">
                    Lihat UMKM →
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </motion.div>
  );
};

export default HomePage;
