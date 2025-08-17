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
  ArrowUp,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Hero, { sejarahSlides } from "../components/Hero";
import AnimatedSection from "../Animations/AnimatedSection";

const Sejarah = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Auto-advance timeline sections
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Show scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const timelineData = [
    {
      year: "1884",
      title: "Pasar Tradisional Surjo",
      description: "Pusat aktivitas ekonomi dan titik kumpul masyarakat",
      icon: <MapPin className="w-6 h-6" />,
      color: "from-[#2A6218] to-[#3F5231]",
    },
    {
      year: "Era Kolonial",
      title: "Distrik Surjo",
      description: "Pusat pemerintahan dan perdagangan strategis",
      icon: <BookOpen className="w-6 h-6" />,
      color: "from-[#3F5231] to-[#65724D]",
    },
    {
      year: "Abad 19",
      title: "Budaya Kopi & Teh",
      description: "Pengenalan komoditas dan tradisi minum",
      icon: <Users className="w-6 h-6" />,
      color: "from-[#65724D] to-[#2A6218]",
    },
    {
      year: "Masa Kini",
      title: "Warisan Budaya",
      description: "Pelestarian sejarah dan pengembangan wisata",
      icon: <Clock className="w-6 h-6" />,
      color: "from-[#2A6218] to-[#65724D]",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F7F4ED] relative">
      <Header />

      <AnimatedSection animationType="fadeInUp">
        <Hero
          mainTitle="Sejarah"
          highlightTitle="Desa Surjo"
          staticDescription="Usaha Mikro Kecil dan Menengah yang menggerakkan perekonomian Desa Surjo dengan produk berkualitas dan inovasi berkelanjutan."
          slides={sejarahSlides}
          primaryCTA={{ text: "Baca Sejarah", href: "#sejarah" }}
          secondaryCTA={{ text: "", href: "" }}
          announcement={{
            text: "Cerita Kita",
          }}
        />
      </AnimatedSection>

      {/* Interactive Timeline */}
      <section className="py-20 bg-gradient-to-br from-white via-[#F7F4ED] to-[#E8F5E8] relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#2A6218] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#65724D] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection
            animationType="slideInUp"
            className="text-center mb-20"
          >
            <div className="inline-flex items-center bg-gradient-to-r from-[#2A6218]/10 to-[#65724D]/10 px-6 py-2 rounded-full mb-6 border border-[#2A6218]/20">
              <Calendar className="w-5 h-5 text-[#2A6218] mr-2" />
              <span className="text-[#2A6218] font-semibold">
                Timeline Sejarah
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#3F5231] mb-6 leading-tight">
              Perjalanan <span className="text-[#2A6218]">Waktu</span>
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-[#2A6218] via-[#3F5231] to-[#65724D] mx-auto mb-6 rounded-full"></div>
            <p className="text-[#65724D] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Ikuti jejak sejarah Desa Surjo dari masa ke masa, dari pasar
              tradisional hingga menjadi warisan budaya yang berkelanjutan
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {timelineData.map((item, index) => (
              <AnimatedSection
                key={index}
                animationType="scaleIn"
                delay={index * 200}
              >
                <div
                  className={`relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border-2 transition-all duration-700 cursor-pointer group hover:bg-white ${
                    activeSection === index
                      ? "border-[#2A6218] shadow-2xl scale-105 bg-white"
                      : "border-[#65724D]/20 hover:border-[#65724D]/40 hover:shadow-xl hover:scale-102"
                  }`}
                  onClick={() => setActiveSection(index)}
                >
                  {/* Floating Icon */}
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 shadow-lg bg-gradient-to-r ${
                      item.color
                    } ${
                      activeSection === index
                        ? "text-white scale-110"
                        : "text-white group-hover:scale-105"
                    }`}
                  >
                    {item.icon}
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold text-[#3F5231] group-hover:text-[#2A6218] transition-colors duration-300">
                        {item.year}
                      </h3>
                    </div>

                    <h4 className="font-bold text-lg text-[#2A6218] leading-tight">
                      {item.title}
                    </h4>

                    <p className="text-[#65724D] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Active Progress Bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#F7F4ED] to-[#E8F5E8] rounded-b-3xl overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${
                        item.color
                      } transition-all duration-1000 ${
                        activeSection === index ? "w-full" : "w-0"
                      }`}
                    ></div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-[#2A6218]/10 to-[#65724D]/10 rounded-full opacity-50"></div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Content Blocks */}
      <section className="py-24 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          {/* Block 1 - Pusat Perdagangan */}
          <div id="sejarah">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">
              <AnimatedSection
                animationType="fadeInRight"
                className="relative order-2 lg:order-1"
              >
                <div className="absolute -inset-8 bg-gradient-to-r from-[#2A6218]/10 to-[#65724D]/10 rounded-3xl blur-3xl"></div>
                <div className="relative bg-white rounded-3xl p-3 shadow-2xl hover:shadow-3xl transition-all duration-500 group">
                  <div className="relative overflow-hidden rounded-2xl">
                    <div className="w-full h-80 md:h-96 bg-gradient-to-br from-[#F7F4ED] to-[#E8F5E8] flex items-center justify-center rounded-2xl border-2 border-dashed border-[#65724D]/30">
                      <div className="text-center space-y-3">
                        <div className="w-16 h-16 bg-[#2A6218]/10 rounded-full flex items-center justify-center mx-auto">
                          <MapPin className="w-8 h-8 text-[#2A6218]" />
                        </div>
                        <img
                          className="text-[#65724D] font-medium"
                          src={
                            "https://res.cloudinary.com/dovmzvx6b/image/upload/v1755421406/TuguTionghoawebp_jyoftb.jpg"
                          }
                        ></img>
                        <p className="text-[#65724D]/60 text-sm">
                          Placeholder untuk gambar sejarah
                        </p>
                      </div>
                    </div>
                    <div className="absolute top-6 left-6 bg-[#2A6218] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Era Kolonial
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection
                animationType="fadeInLeft"
                className="space-y-8 order-1 lg:order-2"
              >
                <div className="flex items-start space-x-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#2A6218] to-[#65724D] rounded-3xl flex items-center justify-center text-3xl shadow-xl flex-shrink-0">
                    🏛️
                  </div>
                  <div className="space-y-3">
                    <div className="inline-flex items-center bg-[#2A6218]/10 px-4 py-2 rounded-full">
                      <div className="w-2 h-2 bg-[#2A6218] rounded-full mr-2"></div>
                      <span className="text-[#2A6218] font-semibold text-sm">
                        WARISAN SEJARAH
                      </span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#3F5231] leading-tight">
                      Pusat <span className="text-[#2A6218]">Perdagangan</span>
                    </h2>
                    <span className="text-[#2A6218] font-semibold text-xl block">
                      & Jejak Kolonial
                    </span>
                  </div>
                </div>

                <div className="space-y-6 text-lg leading-relaxed">
                  <p className="text-[#3F5231]">
                    Pada era kolonial, Desa Surjo menjadi jalur dan tempat
                    aktivitas para saudagar, termasuk pedagang dari etnis
                    Tionghoa. Jejak pemukiman dan pemakaman etnis Tionghoa masih
                    dapat ditemukan di kawasan desa hingga saat ini.
                  </p>

                  <div className="bg-gradient-to-r from-[#F7F4ED] to-[#E8F5E8] rounded-2xl p-8 border-l-4 border-[#2A6218] shadow-lg">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#2A6218]/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <BookOpen className="w-6 h-6 text-[#2A6218]" />
                      </div>
                      <blockquote className="text-[#3F5231] italic font-medium">
                        "Wilayah Pengempon menjadi titik kumpul pasukan, namun
                        medan pertempuran utama justru terjadi di Desa Surjo,
                        menunjukkan betapa strategisnya posisi ini."
                      </blockquote>
                    </div>
                  </div>

                  <p className="text-[#65724D]">
                    Keputusan kolonial untuk memindahkan pusat kecamatan ke
                    Bawang lebih karena letak geografis, bukan faktor sejarah
                    atau kekuatan ekonomi. Secara historis, Surjo lebih dulu
                    menjadi pusat distrik dan titik ekonomi kawasan.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>

          {/* Block 2 - Budaya dan Tradisi */}
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">
              <AnimatedSection animationType="fadeInLeft" className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#65724D] to-[#2A6218] rounded-3xl flex items-center justify-center text-3xl shadow-xl flex-shrink-0">
                    🎭
                  </div>
                  <div className="space-y-3">
                    <div className="inline-flex items-center bg-[#65724D]/10 px-4 py-2 rounded-full">
                      <div className="w-2 h-2 bg-[#65724D] rounded-full mr-2"></div>
                      <span className="text-[#65724D] font-semibold text-sm">
                        TRADISI LELUHUR
                      </span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#3F5231] leading-tight">
                      Budaya & <span className="text-[#2A6218]">Tradisi</span>
                    </h2>
                    <span className="text-[#2A6218] font-semibold text-xl block">
                      Warisan Komoditas Kopi & Teh
                    </span>
                  </div>
                </div>

                <div className="space-y-6 text-lg leading-relaxed">
                  <p className="text-[#3F5231]">
                    Seiring masuknya penjajah Belanda, kebiasaan minum kopi dan
                    teh mulai membudaya di kalangan penduduk Surjo. Tanah subur
                    dimanfaatkan untuk budidaya tanaman komoditas penting ini.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[
                      {
                        icon: "☕",
                        title: "Tradisi Kopi",
                        desc: "Warisan budaya minum kopi sejak abad ke-19",
                        color: "from-[#2A6218] to-[#3F5231]",
                      },
                      {
                        icon: "🫖",
                        title: "Budaya Teh",
                        desc: "Pengaruh perkebunan dan tuan tanah Belanda",
                        color: "from-[#65724D] to-[#2A6218]",
                      },
                    ].map((item, index) => (
                      <AnimatedSection
                        key={index}
                        animationType="scaleIn"
                        delay={index * 100}
                        className="bg-white rounded-2xl p-6 border border-[#65724D]/20 shadow-lg hover:shadow-xl transition-all duration-300 group"
                      >
                        <div
                          className={`w-14 h-14 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}
                        >
                          {item.icon}
                        </div>
                        <h4 className="font-bold text-[#3F5231] mb-2 text-lg">
                          {item.title}
                        </h4>
                        <p className="text-[#65724D]">{item.desc}</p>
                      </AnimatedSection>
                    ))}
                  </div>

                  <p className="text-[#65724D]">
                    Hingga kini, tradisi minum kopi dan teh tetap hidup dan
                    menjadi bagian identitas masyarakat Surjo, bahkan berkembang
                    menjadi salah satu daya tarik wisata desa yang mencerminkan
                    warisan sejarah kolonial di lingkup lokal Batang.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animationType="fadeInRight" className="relative">
                <div className="absolute -inset-8 bg-gradient-to-r from-[#65724D]/10 to-[#2A6218]/10 rounded-3xl blur-3xl"></div>
                <div className="relative bg-white rounded-3xl p-3 shadow-2xl hover:shadow-3xl transition-all duration-500">
                  <div className="relative overflow-hidden rounded-2xl">
                    <div className="w-full h-80 md:h-96 bg-gradient-to-br from-[#F7F4ED] to-[#E8F5E8] flex items-center justify-center rounded-2xl border-2 border-dashed border-[#65724D]/30">
                      <div className="text-center space-y-3">
                        <div className="w-16 h-16 bg-[#65724D]/10 rounded-full flex items-center justify-center mx-auto">
                          <Users className="w-8 h-8 text-[#65724D]" />
                        </div>
                        <p className="text-[#65724D] font-medium">
                          Gambar Budaya Kopi dan Teh
                        </p>
                        <p className="text-[#65724D]/60 text-sm">
                          Placeholder untuk gambar tradisi
                        </p>
                      </div>
                    </div>
                    <div className="absolute top-6 left-6 bg-[#65724D] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Tradisi Lokal
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Closing Section */}
      <AnimatedSection animationType="slideInUp">
        <section className="py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#2A6218] via-[#3F5231] to-[#65724D]"></div>

          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute top-0 left-0 w-full h-full bg-repeat animate-pulse"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            ></div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 lg:p-20 border border-white/20 shadow-2xl">
              <AnimatedSection animationType="scaleIn" delay={200}>
                <div className="mb-12">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8 backdrop-blur-sm shadow-lg">
                    <BookOpen className="w-12 h-12 text-white" />
                  </div>
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                    Melangkah Menuju
                    <span className="block text-yellow-200 mt-2">
                      Masa Depan
                    </span>
                  </h2>
                  <div className="w-32 h-1 bg-gradient-to-r from-yellow-200 to-white mx-auto mb-8 rounded-full"></div>
                </div>
              </AnimatedSection>

              <AnimatedSection animationType="fadeInUp" delay={400}>
                <p className="text-xl lg:text-2xl text-white/90 leading-relaxed mb-12 max-w-4xl mx-auto">
                  Dengan semangat gotong royong dan kearifan lokal yang telah
                  teruji waktu, Desa Surjo terus melangkah maju membangun masa
                  depan yang lebih baik untuk generasi mendatang.
                </p>
              </AnimatedSection>

              <AnimatedSection animationType="fadeInUp" delay={600}>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <button
                    onClick={() => navigate("/potensi")}
                    className="group bg-white text-[#2A6218] px-8 py-4 rounded-full font-bold hover:bg-yellow-100 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 flex items-center space-x-2"
                  >
                    <span>Jelajahi Potensi Desa</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  <button
                    onClick={() => navigate("/budaya")}
                    className="group border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-[#2A6218] transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 flex items-center space-x-2"
                  >
                    <span>Pelajari Budaya Lokal</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-[#2A6218] to-[#65724D] text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 z-50 flex items-center justify-center group ${
          showScrollTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <ArrowUp className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
      </button>

      <Footer />
    </div>
  );
};

export default Sejarah;
