import { useState, useEffect } from "react";
import {
  ChevronDown,
  ChevronUp,
  Leaf,
  Coffee,
  Mountain,
  Eye,
  X,
  MapPin,
  Users,
  TrendingUp,
  Award,
  ArrowRight,
  Play,
  Sparkles,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const Potensi = () => {
  const [potensiData, setPotensiData] = useState(null);
  const [expandedCards, setExpandedCards] = useState({});
  const [selectedGallery, setSelectedGallery] = useState(null);
  const [loading, setLoading] = useState(true);

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

  const toggleCard = (index) => {
    setExpandedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const getIcon = (nama) => {
    if (nama.toLowerCase().includes("teh")) return <Leaf className="w-6 h-6" />;
    if (nama.toLowerCase().includes("kopi"))
      return <Coffee className="w-6 h-6" />;
    return <Mountain className="w-6 h-6" />;
  };

  const getGradient = (index) => {
    const gradients = [
      "from-[#2A6218] to-[#3F5231]",
      "from-[#65724D] to-[#3F5231]",
      "from-[#2A6218] to-[#65724D]",
    ];
    return gradients[index % gradients.length];
  };

  const getAccentColors = (index) => {
    const colorSets = [
      {
        bg: "bg-[#2A6218]",
        text: "text-[#2A6218]",
        border: "border-[#2A6218]",
        bgLight: "bg-[#2A6218]/10",
        bgLighter: "bg-[#2A6218]/20",
      },
      {
        bg: "bg-[#65724D]",
        text: "text-[#65724D]",
        border: "border-[#65724D]",
        bgLight: "bg-[#65724D]/10",
        bgLighter: "bg-[#65724D]/20",
      },
      {
        bg: "bg-[#3F5231]",
        text: "text-[#3F5231]",
        border: "border-[#3F5231]",
        bgLight: "bg-[#3F5231]/10",
        bgLighter: "bg-[#3F5231]/20",
      },
    ];
    return colorSets[index % colorSets.length];
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F7F4ED] flex items-center justify-center">
        <div className="flex flex-col items-center space-y-6">
          <div className="relative">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-[#2A6218]/20"></div>
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#2A6218] absolute top-0"></div>
          </div>
          <div className="text-center">
            <p className="text-[#3F5231] font-semibold text-lg">
              Memuat Potensi Desa
            </p>
            <p className="text-[#65724D] text-sm mt-1">
              Mohon tunggu sebentar...
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (!potensiData) {
    return (
      <div className="min-h-screen bg-[#F7F4ED] flex items-center justify-center">
        <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <X className="w-8 h-8 text-red-500" />
          </div>
          <p className="text-[#3F5231] text-lg font-medium">
            Data tidak dapat dimuat
          </p>
          <p className="text-[#65724D] text-sm mt-2">Silakan coba lagi nanti</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F7F4ED]">
      {/* Header Placeholder */}
      <Header />

      {/* Hero Section */}
      <div className="relative overflow-hidden pt-4 lg:pt-8">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#2A6218]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#65724D]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative container mx-auto px-4 py-16 lg:py-24">
          <div className="max-w-6xl mx-auto">
            {/* Title section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-[#2A6218]/10 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-[#2A6218] mr-2" />
                <span className="text-[#3F5231] font-medium text-sm">
                  Kekayaan Alam Desa
                </span>
              </div>

              <h1 className="text-4xl lg:text-7xl font-bold mb-8 leading-tight">
                <span className="text-[#3F5231]">Potensi</span>
                <br />
                <span className="bg-gradient-to-r from-[#2A6218] to-[#65724D] bg-clip-text text-transparent">
                  Desa Surjo
                </span>
              </h1>

              <div className="w-24 h-1.5 bg-gradient-to-r from-[#2A6218] to-[#65724D] mx-auto rounded-full mb-8"></div>
            </div>

            {/* Introduction content */}
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <div className="prose prose-lg max-w-none">
                  <p className="text-[#65724D] leading-relaxed text-lg font-medium mb-6">
                    {potensiData.pengantar}
                  </p>
                </div>

                {/* Stats cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#2A6218]/20">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-[#2A6218]/10 rounded-xl flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-[#2A6218]" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-[#3F5231]">
                          {potensiData.komoditas_unggulan?.length || 0}
                        </p>
                        <p className="text-sm text-[#65724D]">
                          Komoditas Unggulan
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#2A6218]/20">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-[#65724D]/10 rounded-xl flex items-center justify-center">
                        <Users className="w-6 h-6 text-[#65724D]" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-[#3F5231]">
                          100+
                        </p>
                        <p className="text-sm text-[#65724D]">
                          Petani Terlibat
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#2A6218]/20">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-[#3F5231]/10 rounded-xl flex items-center justify-center">
                        <Award className="w-6 h-6 text-[#3F5231]" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-[#3F5231]">
                          Premium
                        </p>
                        <p className="text-sm text-[#65724D]">
                          Kualitas Produk
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4">
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-[#2A6218] to-[#3F5231] rounded-3xl p-8 text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-30">
                      <div className="absolute top-4 left-4 w-8 h-8 bg-white/20 rounded-full"></div>
                      <div className="absolute top-16 right-8 w-4 h-4 bg-white/20 rounded-full"></div>
                      <div className="absolute bottom-8 left-12 w-6 h-6 bg-white/20 rounded-full"></div>
                    </div>
                    <div className="relative h-full flex flex-col justify-center text-center">
                      <MapPin className="w-16 h-16 mx-auto mb-4 opacity-90" />
                      <h3 className="text-2xl font-bold mb-2">LOREM IPSUM</h3>
                      <p className="text-white/90 text-sm leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam, quidem.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Komoditas Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#2A6218]/10 to-[#65724D]/10 rounded-full mb-6">
            <Leaf className="w-4 h-4 text-[#2A6218] mr-2" />
            <span className="text-[#3F5231] font-medium text-sm">
              Produk Unggulan
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-[#3F5231] mb-6">
            Komoditas <span className="text-[#2A6218]">Terbaik</span>
          </h2>

          <p className="text-[#65724D] text-lg max-w-3xl mx-auto leading-relaxed">
            Kekayaan alam yang menjadi kebanggaan dan sumber ekonomi
            berkelanjutan bagi masyarakat Desa Surjo dengan kualitas premium
            yang telah teruji
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {potensiData.komoditas_unggulan.map((komoditas, index) => {
            const colors = getAccentColors(index);
            return (
              <div
                key={index}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-[#2A6218]/10 hover:border-[#2A6218]/30"
              >
                {/* Card Header */}
                <div
                  className={`relative p-8 bg-gradient-to-br ${getGradient(
                    index
                  )} text-white overflow-hidden`}
                >
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-4 left-4 w-8 h-8 bg-white/30 rounded-full"></div>
                    <div className="absolute top-16 right-8 w-4 h-4 bg-white/30 rounded-full"></div>
                    <div className="absolute bottom-8 left-12 w-6 h-6 bg-white/30 rounded-full"></div>
                  </div>

                  <div className="relative">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        {getIcon(komoditas.nama)}
                      </div>
                      <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold">{index + 1}</span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-2 group-hover:translate-x-1 transition-transform duration-300">
                      {komoditas.nama}
                    </h3>
                    <div className="flex items-center space-x-2 text-white/90">
                      <Award className="w-4 h-4" />
                      <span className="text-sm font-medium">
                        Produk Unggulan
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-8">
                  <p className="text-[#65724D] leading-relaxed mb-6 text-base">
                    {komoditas.pengantar}
                  </p>

                  {/* Proses Section */}
                  {komoditas.proses && komoditas.proses.length > 0 && (
                    <div className="mb-6">
                      <button
                        onClick={() => toggleCard(index)}
                        className={`flex items-center justify-between w-full p-4 ${colors.bgLight} hover:${colors.bgLighter} rounded-2xl transition-all duration-300 group/btn`}
                      >
                        <div className="flex items-center space-x-3">
                          <div
                            className={`w-8 h-8 ${colors.bg} rounded-lg flex items-center justify-center`}
                          >
                            <Play className="w-4 h-4 text-white" />
                          </div>
                          <span className={`font-semibold ${colors.text}`}>
                            Proses Produksi
                          </span>
                        </div>
                        <div className="group-hover/btn:scale-110 transition-transform duration-200">
                          {expandedCards[index] ? (
                            <ChevronUp className={`w-5 h-5 ${colors.text}`} />
                          ) : (
                            <ChevronDown className={`w-5 h-5 ${colors.text}`} />
                          )}
                        </div>
                      </button>

                      {expandedCards[index] && (
                        <div className="mt-4 space-y-3 animate-in slide-in-from-top duration-500">
                          {komoditas.proses.map((step, stepIndex) => (
                            <div
                              key={stepIndex}
                              className={`flex items-start space-x-4 p-4 bg-gradient-to-r from-white to-[#F7F4ED] border-l-4 ${colors.border} rounded-r-2xl hover:shadow-md transition-all duration-300`}
                            >
                              <div
                                className={`w-8 h-8 ${colors.bg} rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 shadow-md`}
                              >
                                {stepIndex + 1}
                              </div>
                              <p className="text-[#65724D] leading-relaxed flex-1">
                                {step}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Gallery Section */}
                  {komoditas.galeri && komoditas.galeri.length > 0 ? (
                    <div>
                      <div className="flex items-center space-x-2 mb-4">
                        <Eye className={`w-5 h-5 ${colors.text}`} />
                        <h4 className={`font-semibold ${colors.text}`}>
                          Galeri Produk
                        </h4>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        {komoditas.galeri.slice(0, 4).map((image, imgIndex) => (
                          <div
                            key={imgIndex}
                            className="aspect-square bg-[#F7F4ED] rounded-2xl overflow-hidden cursor-pointer hover:scale-105 hover:shadow-lg transition-all duration-300 group/img border border-[#2A6218]/10"
                            onClick={() =>
                              setSelectedGallery({
                                komoditas: komoditas.nama,
                                images: komoditas.galeri,
                                index: imgIndex,
                              })
                            }
                          >
                            <img
                              src={image}
                              alt={`${komoditas.nama} ${imgIndex + 1}`}
                              className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-500"
                            />
                          </div>
                        ))}
                      </div>
                      {komoditas.galeri.length > 4 && (
                        <button
                          className={`mt-4 flex items-center space-x-2 ${colors.text} hover:translate-x-1 transition-all duration-200 font-medium`}
                        >
                          <span>
                            Lihat {komoditas.galeri.length - 4} foto lainnya
                          </span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  ) : (
                    <div className="text-center py-12 bg-gradient-to-br from-[#F7F4ED] to-white rounded-2xl border border-[#2A6218]/10">
                      <div className="w-16 h-16 mx-auto mb-4 bg-[#2A6218]/10 rounded-2xl flex items-center justify-center">
                        <Eye className="w-8 h-8 text-[#65724D]" />
                      </div>
                      <p className="text-[#3F5231] font-medium mb-1">
                        Galeri Segera Hadir
                      </p>
                      <p className="text-[#65724D] text-sm">
                        Foto produk akan ditambahkan
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Gallery Modal */}
      {selectedGallery && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="relative max-w-5xl w-full">
            <button
              onClick={() => setSelectedGallery(null)}
              className="absolute -top-16 right-0 text-white hover:text-gray-300 transition-colors bg-white/10 backdrop-blur-sm rounded-full p-3"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={selectedGallery.images[selectedGallery.index]}
                alt={`${selectedGallery.komoditas} gallery`}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              <div className="p-6 bg-gradient-to-r from-[#F7F4ED] to-white">
                <h3 className="text-xl font-bold text-[#3F5231] mb-2">
                  {selectedGallery.komoditas}
                </h3>
                <p className="text-[#65724D]">
                  Foto {selectedGallery.index + 1} dari{" "}
                  {selectedGallery.images.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer Placeholder */}
      <Footer />
    </div>
  );
};

export default Potensi;
