import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Clock,
  MapPin,
  Users,
  BookOpen,
  ChevronRight,
  Calendar,
} from "lucide-react";
import { useState, useEffect } from "react";
import Hero, { sejarahSlides } from "../components/Hero";

const Sejarah = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState(0);

  // Auto-advance timeline sections
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const timelineData = [
    {
      year: "1884",
      title: "Pasar Tradisional Surjo",
      description: "Pusat aktivitas ekonomi dan titik kumpul masyarakat",
      icon: <MapPin className="w-6 h-6" />,
    },
    {
      year: "Era Kolonial",
      title: "Distrik Surjo",
      description: "Pusat pemerintahan dan perdagangan strategis",
      icon: <BookOpen className="w-6 h-6" />,
    },
    {
      year: "Abad 19",
      title: "Budaya Kopi & Teh",
      description: "Pengenalan komoditas dan tradisi minum",
      icon: <Users className="w-6 h-6" />,
    },
    {
      year: "Masa Kini",
      title: "Warisan Budaya",
      description: "Pelestarian sejarah dan pengembangan wisata",
      icon: <Clock className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-[#F7F4ED]">
      <Header />
      <Hero
        mainTitle="Sejarah"
        highlightTitle="Desa Surjo"
        staticDescription="Usaha Mikro Kecil dan Menengah yang menggerakkan perekonomian Desa Surjo dengan produk berkualitas dan inovasi berkelanjutan."
        slides={sejarahSlides}
        primaryCTA={{ text: "Lihat Potensi", href: "#potensi" }}
        secondaryCTA={{ text: "Hubungi UMKM", href: "/kontak-umkm" }}
        announcement={{
          text: "Potensi Mendalam dari Desa Surjo",
        }}
      />

      {/* Interactive Timeline */}
      <section className="py-16 bg-gradient-to-br from-white to-[#F7F4ED]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3F5231] mb-4">
              Perjalanan Waktu
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#2A6218] to-[#65724D] mx-auto mb-4"></div>
            <p className="text-[#65724D] max-w-2xl mx-auto">
              Ikuti jejak sejarah Desa Surjo dari masa ke masa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl p-6 border-2 transition-all duration-500 cursor-pointer group ${
                  activeSection === index
                    ? "border-[#2A6218] shadow-2xl scale-105"
                    : "border-[#65724D]/20 hover:border-[#65724D]/40 hover:shadow-lg"
                }`}
                onClick={() => setActiveSection(index)}
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-colors duration-300 ${
                    activeSection === index
                      ? "bg-[#2A6218] text-white"
                      : "bg-[#F7F4ED] text-[#2A6218]"
                  }`}
                >
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#3F5231] mb-2">
                  {item.year}
                </h3>
                <h4 className="font-semibold text-[#2A6218] mb-2">
                  {item.title}
                </h4>
                <p className="text-[#65724D] text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Progress indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#F7F4ED] rounded-b-2xl overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r from-[#2A6218] to-[#65724D] transition-all duration-500 ${
                      activeSection === index ? "w-full" : "w-0"
                    }`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Content Blocks */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {/* Block 1 - Pusat Perdagangan */}
          <div className="group">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="absolute -inset-6 bg-gradient-to-r from-[#2A6218]/20 to-[#65724D]/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                <div className="relative bg-white rounded-2xl p-2 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80"
                    alt="Pusat Perdagangan Kolonial"
                    className="w-full h-64 md:h-80 object-cover rounded-xl"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-[#2A6218] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Era Kolonial
                  </div>
                </div>
              </div>

              <div className="space-y-6 order-1 lg:order-2">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#2A6218] to-[#65724D] rounded-2xl flex items-center justify-center text-2xl shadow-lg">
                    🏛️
                  </div>
                  <div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#3F5231] leading-tight">
                      Pusat Perdagangan
                    </h2>
                    <span className="text-[#2A6218] font-semibold text-lg">
                      & Jejak Kolonial
                    </span>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none">
                  <p className="text-[#3F5231] text-lg leading-relaxed mb-6">
                    Pada era kolonial, Desa Surjo menjadi jalur dan tempat
                    aktivitas para saudagar, termasuk pedagang dari etnis
                    Tionghoa. Jejak pemukiman dan pemakaman etnis Tionghoa masih
                    dapat ditemukan di kawasan desa hingga saat ini.
                  </p>

                  <div className="bg-gradient-to-r from-[#F7F4ED] to-[#E8F5E8] rounded-2xl p-6 mb-6 border-l-4 border-[#2A6218]">
                    <p className="text-[#3F5231] leading-relaxed italic">
                      "Wilayah Pengempon menjadi titik kumpul pasukan, namun
                      medan pertempuran utama justru terjadi di Desa Surjo,
                      menunjukkan betapa strategisnya posisi ini."
                    </p>
                  </div>

                  <p className="text-[#65724D] leading-relaxed">
                    Keputusan kolonial untuk memindahkan pusat kecamatan ke
                    Bawang lebih karena letak geografis, bukan faktor sejarah
                    atau kekuatan ekonomi. Secara historis, Surjo lebih dulu
                    menjadi pusat distrik dan titik ekonomi kawasan.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Block 2 - Budaya dan Tradisi */}
          <div className="group">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#65724D] to-[#2A6218] rounded-2xl flex items-center justify-center text-2xl shadow-lg">
                    🎭
                  </div>
                  <div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#3F5231] leading-tight">
                      Budaya & Tradisi
                    </h2>
                    <span className="text-[#2A6218] font-semibold text-lg">
                      Warisan Komoditas Kopi & Teh
                    </span>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none">
                  <p className="text-[#3F5231] text-lg leading-relaxed mb-6">
                    Seiring masuknya penjajah Belanda, kebiasaan minum kopi dan
                    teh mulai membudaya di kalangan penduduk Surjo. Tanah subur
                    dimanfaatkan untuk budidaya tanaman komoditas penting ini.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div className="bg-white rounded-xl p-4 border border-[#65724D]/20 shadow-sm">
                      <div className="text-2xl mb-2">☕</div>
                      <h4 className="font-semibold text-[#3F5231] mb-1">
                        Tradisi Kopi
                      </h4>
                      <p className="text-[#65724D] text-sm">
                        Warisan budaya minum kopi sejak abad ke-19
                      </p>
                    </div>
                    <div className="bg-white rounded-xl p-4 border border-[#65724D]/20 shadow-sm">
                      <div className="text-2xl mb-2">🫖</div>
                      <h4 className="font-semibold text-[#3F5231] mb-1">
                        Budaya Teh
                      </h4>
                      <p className="text-[#65724D] text-sm">
                        Pengaruh perkebunan dan tuan tanah Belanda
                      </p>
                    </div>
                  </div>

                  <p className="text-[#65724D] leading-relaxed">
                    Hingga kini, tradisi minum kopi dan teh tetap hidup dan
                    menjadi bagian identitas masyarakat Surjo, bahkan berkembang
                    menjadi salah satu daya tarik wisata desa yang mencerminkan
                    warisan sejarah kolonial di lingkup lokal Batang.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-6 bg-gradient-to-r from-[#65724D]/20 to-[#2A6218]/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                <div className="relative bg-white rounded-2xl p-2 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=800&q=80"
                    alt="Budaya Kopi dan Teh"
                    className="w-full h-64 md:h-80 object-cover rounded-xl"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-[#65724D] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Tradisi Lokal
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Closing Section */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2A6218] via-[#3F5231] to-[#65724D]"></div>
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute top-0 left-0 w-full h-full bg-repeat"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 lg:p-16 border border-white/20">
            <div className="mb-8">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Melangkah Menuju
                <span className="block text-yellow-200">Masa Depan</span>
              </h2>
            </div>

            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed mb-8 max-w-3xl mx-auto">
              Dengan semangat gotong royong dan kearifan lokal yang telah teruji
              waktu, Desa Surjo terus melangkah maju membangun masa depan yang
              lebih baik untuk generasi mendatang.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => navigate("/potensi")}
                className="bg-white text-[#2A6218] px-8 py-3 rounded-full font-semibold hover:bg-yellow-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Jelajahi Potensi Desa
              </button>
              <button
                onClick={() => navigate("/budaya")}
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#2A6218] transition-all duration-300"
              >
                Pelajari Budaya Lokal
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sejarah;
