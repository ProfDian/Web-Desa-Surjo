import { useState, useEffect } from "react";
import {
  ChevronDown,
  ChevronUp,
  X,
  MapPin,
  Sparkles,
  Star,
  TreePine,
  Camera,
  Grid3X3,
  Navigation,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PotensiCard from "../components/PotensiCard";
import SwiperCardsPotensi from "../Animations/Swiper";
import Hero, { potensiSlides } from "../components/Hero";
import { motion } from "framer-motion";

const Potensi = () => {
  const [potensiData, setPotensiData] = useState(null);
  const [selectedGallery, setSelectedGallery] = useState(null);
  const [loading, setLoading] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [viewMode, setViewMode] = useState("swiper"); // 'swiper' or 'grid'

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/Potensi Desa.json");
        const data = await response.json();
        setPotensiData(data);
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleGalleryClick = (galleryData) => {
    setSelectedGallery(galleryData);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center">
        <div className="flex flex-col items-center space-y-8">
          <div className="relative">
            <div className="w-20 h-20 border-4 border-emerald-200 rounded-full animate-spin"></div>
            <div className="absolute top-0 left-0 w-20 h-20 border-4 border-emerald-600 rounded-full animate-spin border-t-transparent"></div>
            <div className="absolute top-2 left-2 w-16 h-16 border-4 border-amber-400 rounded-full animate-spin border-r-transparent"></div>
          </div>
          <div className="text-center space-y-3">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-emerald-600 animate-pulse" />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent">
                Memuat Potensi Desa
              </h3>
              <Sparkles className="w-5 h-5 text-amber-600 animate-pulse" />
            </div>
            <p className="text-slate-600 font-medium">
              Sedang mengumpulkan kekayaan alam desa...
            </p>
            <div className="flex space-x-1 justify-center">
              <div className="w-2 h-2 bg-emerald-600 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-amber-600 rounded-full animate-bounce delay-100"></div>
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce delay-200"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!potensiData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center p-4">
        <div className="text-center p-12 bg-white rounded-3xl shadow-2xl border border-red-100 max-w-md w-full">
          <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center mx-auto mb-6">
            <X className="w-10 h-10 text-red-500" />
          </div>
          <h3 className="text-2xl font-bold text-slate-800 mb-3">
            Ups! Terjadi Kesalahan
          </h3>
          <p className="text-slate-600 mb-6">
            Data potensi desa tidak dapat dimuat. Silakan periksa koneksi
            internet Anda.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-xl font-medium hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 transform hover:scale-105"
          >
            Coba Lagi
          </button>
        </div>
      </div>
    );
  }

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
      <div className="min-h-screen bg-[#F7F4ED]">
        <Header />
        <Hero
          mainTitle="Potensi"
          highlightTitle="Desa Surjo"
          staticDescription="Usaha Mikro Kecil dan Menengah yang menggerakkan perekonomian Desa Surjo dengan produk berkualitas dan inovasi berkelanjutan."
          slides={potensiSlides}
          primaryCTA={{ text: "Baca & Lihat Potensi", href: "#potensi" }}
          secondaryCTA={{ text: "", href: "" }}
          announcement={{
            text: "Potensi Mendalam dari Desa Surjo",
          }}
        />

        {/* Hero Section */}
        <div className="relative overflow-hidden">
          {/* Animated Background */}
          <div className="relative container mx-auto px-4 py-24 lg:py-32"></div>
        </div>

        {/* Enhanced Komoditas Section */}
        <div className="container mx-auto px-4 py-24">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full mb-8 border border-emerald-200/50 shadow-lg">
              <TreePine className="w-5 h-5 text-emerald-600 mr-3" />
              <span className="text-slate-700 font-semibold">
                Produk Unggulan
              </span>
              <div className="w-2 h-2 bg-emerald-500 rounded-full ml-3 animate-pulse"></div>
            </div>

            <h2 className="text-5xl lg:text-6xl font-black text-slate-800 mb-8">
              Komoditas{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                Terbaik
              </span>
            </h2>

            <p className="text-slate-600 text-xl max-w-4xl mx-auto leading-relaxed font-medium mb-12">
              Kekayaan alam yang menjadi kebanggaan dan sumber ekonomi
              berkelanjutan bagi masyarakat Desa Surjo dengan kualitas premium
              yang telah teruji di pasar nasional
            </p>

            {/* View Mode Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-12">
              <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-2xl p-2 border border-slate-200 shadow-lg">
                <button
                  onClick={() => setViewMode("swiper")}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    viewMode === "swiper"
                      ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/20"
                      : "text-slate-600 hover:text-slate-800 hover:bg-slate-100"
                  }`}
                >
                  <Navigation className="w-4 h-4" />
                  <span>Swiper View</span>
                </button>
                <button
                  onClick={() => setViewMode("grid")}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    viewMode === "grid"
                      ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/20"
                      : "text-slate-600 hover:text-slate-800 hover:bg-slate-100"
                  }`}
                >
                  <Grid3X3 className="w-4 h-4" />
                  <span>Grid View</span>
                </button>
              </div>
            </div>
          </div>

          {/* Cards Display - Swiper or Grid */}
          {viewMode === "swiper" ? (
            <SwiperCardsPotensi
              data={potensiData.komoditas_unggulan}
              autoplay={true}
              pagination={true}
              navigation={false}
            />
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8 max-w-8xl mx-auto">
              {potensiData.komoditas_unggulan.map((komoditas, index) => (
                <PotensiCard
                  key={index}
                  komoditas={komoditas}
                  index={index}
                  isHovered={hoveredCard === index}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onGalleryClick={handleGalleryClick}
                />
              ))}
            </div>
          )}
        </div>

        {/* Enhanced Gallery Modal */}
        {selectedGallery && (
          <div className="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-500">
            <div className="relative max-w-6xl w-full animate-in zoom-in duration-700">
              {/* Close Button */}
              <button
                onClick={() => setSelectedGallery(null)}
                className="absolute -top-20 right-0 text-white hover:text-gray-300 transition-colors bg-white/10 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/20 transition-all duration-300 hover:scale-110 z-10"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Navigation Buttons */}
              {selectedGallery.images.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setSelectedGallery((prev) => ({
                        ...prev,
                        index:
                          prev.index > 0
                            ? prev.index - 1
                            : prev.images.length - 1,
                      }))
                    }
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 z-10"
                  >
                    <ChevronUp className="w-6 h-6 rotate-90" />
                  </button>
                  <button
                    onClick={() =>
                      setSelectedGallery((prev) => ({
                        ...prev,
                        index:
                          prev.index < prev.images.length - 1
                            ? prev.index + 1
                            : 0,
                      }))
                    }
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 z-10"
                  >
                    <ChevronDown className="w-6 h-6 rotate-90" />
                  </button>
                </>
              )}

              {/* Modal Content */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-3xl">
                <div className="relative">
                  <img
                    src={selectedGallery.images[selectedGallery.index]}
                    alt={`${selectedGallery.komoditas} gallery`}
                    className="w-full h-auto max-h-[70vh] object-contain bg-slate-50"
                  />

                  {/* Image Overlay Info */}
                  <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm rounded-2xl px-4 py-2 text-white">
                    <div className="flex items-center space-x-2">
                      <Camera className="w-4 h-4" />
                      <span className="text-sm font-medium">
                        {selectedGallery.index + 1} /{" "}
                        {selectedGallery.images.length}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <Footer />
      </div>
    </motion.div>
  );
};

export default Potensi;
