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
  Star,
  TreePine,
  Zap,
  Camera,
  Clock,
  CheckCircle,
  ExternalLink,
  BarChart3,
  Heart,
  Globe,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Potensi = () => {
  const [potensiData, setPotensiData] = useState(null);
  const [expandedCards, setExpandedCards] = useState({});
  const [selectedGallery, setSelectedGallery] = useState(null);
  const [loading, setLoading] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(null);

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
      "from-emerald-600 via-emerald-700 to-green-800",
      "from-amber-600 via-orange-600 to-red-700",
      "from-blue-600 via-purple-600 to-indigo-800",
      "from-rose-500 via-pink-600 to-purple-700",
      "from-teal-500 via-cyan-600 to-blue-700",
      "from-yellow-500 via-orange-500 to-red-600",
    ];
    return gradients[index % gradients.length];
  };

  const getAccentColors = (index) => {
    const colorSets = [
      {
        primary: "#059669",
        secondary: "#10b981",
        light: "#d1fae5",
        text: "text-emerald-600",
        bg: "bg-emerald-600",
        bgLight: "bg-emerald-50",
        border: "border-emerald-200",
        ring: "ring-emerald-500/20",
      },
      {
        primary: "#d97706",
        secondary: "#f59e0b",
        light: "#fef3c7",
        text: "text-amber-600",
        bg: "bg-amber-600",
        bgLight: "bg-amber-50",
        border: "border-amber-200",
        ring: "ring-amber-500/20",
      },
      {
        primary: "#2563eb",
        secondary: "#3b82f6",
        light: "#dbeafe",
        text: "text-blue-600",
        bg: "bg-blue-600",
        bgLight: "bg-blue-50",
        border: "border-blue-200",
        ring: "ring-blue-500/20",
      },
      {
        primary: "#dc2626",
        secondary: "#ef4444",
        light: "#fee2e2",
        text: "text-red-600",
        bg: "bg-red-600",
        bgLight: "bg-red-50",
        border: "border-red-200",
        ring: "ring-red-500/20",
      },
      {
        primary: "#0891b2",
        secondary: "#06b6d4",
        light: "#cffafe",
        text: "text-cyan-600",
        bg: "bg-cyan-600",
        bgLight: "bg-cyan-50",
        border: "border-cyan-200",
        ring: "ring-cyan-500/20",
      },
    ];
    return colorSets[index % colorSets.length];
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
    <div className="min-h-screen bg-[#F7F4ED]">
      <Header />
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-emerald-400/30 to-green-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-gradient-to-br from-amber-400/20 to-orange-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-600/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-7xl mx-auto">
            {/* Enhanced Title Section */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full mb-8 border border-emerald-200/50 shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-slate-700 font-semibold">
                    Kekayaan Alam Desa
                  </span>
                  <div className="flex space-x-1">
                    <Star className="w-4 h-4 text-amber-400 fill-current" />
                    <Star className="w-4 h-4 text-amber-400 fill-current" />
                    <Star className="w-4 h-4 text-amber-400 fill-current" />
                  </div>
                </div>
              </div>

              <h1 className="text-5xl lg:text-8xl font-black mb-8 leading-tight">
                <span className="text-slate-800">Potensi</span>
                <br />
                <div className="relative inline-block">
                  <span className="bg-gradient-to-r from-emerald-600 via-green-600 to-amber-500 bg-clip-text text-transparent animate-pulse">
                    Desa Surjo
                  </span>
                  <div className="absolute -bottom-4 left-0 right-0 h-2 bg-gradient-to-r from-emerald-600 via-green-600 to-amber-500 rounded-full blur-sm opacity-60"></div>
                </div>
              </h1>

              <div className="w-32 h-2 bg-gradient-to-r from-emerald-600 via-green-600 to-amber-500 mx-auto rounded-full mb-8 shadow-lg"></div>
            </div>

            {/* Enhanced Introduction */}
            <div className="grid lg:grid-cols-5 gap-12 items-center">
              <div className="lg:col-span-3 space-y-8">
                <div className="prose prose-xl max-w-none">
                  <p className="text-slate-700 leading-relaxed text-xl font-medium">
                    {potensiData.pengantar}
                  </p>
                </div>

                {/* Enhanced Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      icon: TrendingUp,
                      value: potensiData.komoditas_unggulan?.length || 0,
                      label: "Komoditas Unggulan",
                      color: "emerald",
                      gradient: "from-emerald-500 to-green-600",
                    },
                    {
                      icon: Users,
                      value: "150+",
                      label: "Petani Terlibat",
                      color: "amber",
                      gradient: "from-amber-500 to-orange-600",
                    },
                    {
                      icon: Award,
                      value: "Premium",
                      label: "Kualitas Produk",
                      color: "blue",
                      gradient: "from-blue-500 to-purple-600",
                    },
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative">
                        <div className="flex items-center space-x-4">
                          <div
                            className={`w-14 h-14 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
                          >
                            <stat.icon className="w-7 h-7 text-white" />
                          </div>
                          <div>
                            <p className="text-3xl font-black text-slate-800 mb-1">
                              {stat.value}
                            </p>
                            <p className="text-sm text-slate-600 font-medium">
                              {stat.label}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-2">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-green-800 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                  <div className="relative aspect-square bg-gradient-to-br from-emerald-600 via-green-700 to-emerald-800 rounded-3xl p-8 text-white overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                    {/* Floating Elements */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-6 left-6 w-12 h-12 bg-white/30 rounded-2xl rotate-12 animate-bounce delay-300"></div>
                      <div className="absolute top-20 right-8 w-8 h-8 bg-white/20 rounded-full animate-pulse delay-1000"></div>
                      <div className="absolute bottom-12 left-16 w-10 h-10 bg-white/25 rounded-xl rotate-45 animate-bounce delay-700"></div>
                      <div className="absolute bottom-20 right-6 w-6 h-6 bg-white/30 rounded-full animate-pulse delay-500"></div>
                    </div>

                    <div className="relative h-full flex flex-col justify-center text-center">
                      <div className="w-20 h-20 mx-auto mb-6 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <MapPin className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-3xl font-black mb-4 group-hover:scale-105 transition-transform duration-300">
                        DESA SURJO
                      </h3>
                      <p className="text-white/90 leading-relaxed font-medium">
                        Permata tersembunyi dengan kekayaan alam yang melimpah
                        dan tradisi pertanian yang berkelanjutan
                      </p>
                      <div className="flex justify-center space-x-2 mt-4">
                        <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse delay-300"></div>
                        <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse delay-600"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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

          <p className="text-slate-600 text-xl max-w-4xl mx-auto leading-relaxed font-medium">
            Kekayaan alam yang menjadi kebanggaan dan sumber ekonomi
            berkelanjutan bagi masyarakat Desa Surjo dengan kualitas premium
            yang telah teruji di pasar nasional
          </p>
        </div>

        {/* Enhanced Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8 max-w-8xl mx-auto">
          {potensiData.komoditas_unggulan.map((komoditas, index) => {
            const colors = getAccentColors(index);
            const isHovered = hoveredCard === index;

            return (
              <div
                key={index}
                className={`group relative bg-white rounded-3xl shadow-xl hover:shadow-3xl transition-all duration-700 overflow-hidden border border-slate-200/50 hover:border-transparent transform hover:scale-[1.02] ${
                  isHovered ? "z-10" : ""
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Glow Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${getGradient(
                    index
                  )} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 -z-10 scale-110`}
                ></div>

                {/* Enhanced Card Header */}
                <div
                  className={`relative p-8 bg-gradient-to-br ${getGradient(
                    index
                  )} text-white overflow-hidden`}
                >
                  {/* Animated Background Elements */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-4 -left-4 w-24 h-24 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
                    <div className="absolute top-8 right-4 w-16 h-16 bg-white/5 rounded-2xl rotate-12 animate-bounce"></div>
                    <div className="absolute bottom-4 left-8 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-500"></div>
                    <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-white/5 rounded-full blur-xl animate-pulse delay-1000"></div>
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                          {getIcon(komoditas.nama)}
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="flex space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className="w-4 h-4 text-yellow-300 fill-current"
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
                        <span className="text-lg font-black">{index + 1}</span>
                      </div>
                    </div>

                    <h3 className="text-3xl font-black mb-3 group-hover:scale-105 transition-transform duration-300">
                      {komoditas.nama}
                    </h3>

                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex items-center space-x-2 text-white/90">
                        <Award className="w-5 h-5" />
                        <span className="font-semibold">Produk Unggulan</span>
                      </div>
                      <div className="flex items-center space-x-2 text-white/90">
                        <Globe className="w-4 h-4" />
                        <span className="text-sm font-medium">Nasional</span>
                      </div>
                    </div>

                    {/* Quality Indicators */}
                    <div className="flex space-x-2">
                      <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                        <span className="text-sm font-medium">Premium</span>
                      </div>
                      <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                        <span className="text-sm font-medium">Organik</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Card Content */}
                <div className="p-8 space-y-8">
                  <p className="text-slate-700 leading-relaxed text-lg font-medium">
                    {komoditas.pengantar}
                  </p>

                  {/* Enhanced Process Section */}
                  {komoditas.proses && komoditas.proses.length > 0 && (
                    <div className="space-y-4">
                      <button
                        onClick={() => toggleCard(index)}
                        className={`flex items-center justify-between w-full p-6 ${colors.bgLight} hover:bg-gradient-to-r hover:from-${colors.bgLight} hover:to-white rounded-2xl transition-all duration-500 group/btn border ${colors.border} shadow-lg hover:shadow-xl`}
                      >
                        <div className="flex items-center space-x-4">
                          <div
                            className={`w-12 h-12 ${colors.bg} rounded-2xl flex items-center justify-center shadow-lg group-hover/btn:shadow-xl transition-all duration-300 group-hover/btn:scale-110`}
                          >
                            <Play className="w-6 h-6 text-white" />
                          </div>
                          <div className="text-left">
                            <span
                              className={`font-bold ${colors.text} text-lg`}
                            >
                              Proses Produksi
                            </span>
                            <p className="text-sm text-slate-600 mt-1">
                              {komoditas.proses.length} tahapan berkualitas
                            </p>
                          </div>
                        </div>
                        <div className="group-hover/btn:scale-110 transition-transform duration-300">
                          {expandedCards[index] ? (
                            <ChevronUp className={`w-6 h-6 ${colors.text}`} />
                          ) : (
                            <ChevronDown className={`w-6 h-6 ${colors.text}`} />
                          )}
                        </div>
                      </button>

                      {expandedCards[index] && (
                        <div className="space-y-4 animate-in slide-in-from-top duration-700">
                          {komoditas.proses.map((step, stepIndex) => (
                            <div
                              key={stepIndex}
                              className={`group/step flex items-start space-x-4 p-6 bg-gradient-to-r from-white via-slate-50 to-white border-l-4 ${colors.border} rounded-r-2xl hover:shadow-lg transition-all duration-500 hover:translate-x-2`}
                            >
                              <div
                                className={`w-10 h-10 ${colors.bg} rounded-2xl flex items-center justify-center text-white font-black flex-shrink-0 shadow-lg group-hover/step:shadow-xl group-hover/step:scale-110 transition-all duration-300`}
                              >
                                {stepIndex + 1}
                              </div>
                              <div className="flex-1">
                                <p className="text-slate-700 leading-relaxed font-medium">
                                  {step}
                                </p>
                                <div className="flex items-center space-x-2 mt-2">
                                  <CheckCircle className="w-4 h-4 text-green-500" />
                                  <span className="text-xs text-slate-500 font-medium">
                                    Tahap {stepIndex + 1} dari{" "}
                                    {komoditas.proses.length}
                                  </span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Enhanced Gallery Section */}
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Camera className={`w-6 h-6 ${colors.text}`} />
                        <h4 className={`font-bold ${colors.text} text-lg`}>
                          Galeri Produk
                        </h4>
                      </div>
                      {komoditas.galeri && komoditas.galeri.length > 0 && (
                        <div
                          className={`px-4 py-2 ${colors.bgLight} rounded-full`}
                        >
                          <span
                            className={`text-sm font-semibold ${colors.text}`}
                          >
                            {komoditas.galeri.length} foto
                          </span>
                        </div>
                      )}
                    </div>

                    {komoditas.galeri && komoditas.galeri.length > 0 ? (
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          {komoditas.galeri
                            .slice(0, 4)
                            .map((image, imgIndex) => (
                              <div
                                key={imgIndex}
                                className="group/img relative aspect-square bg-slate-100 rounded-2xl overflow-hidden cursor-pointer hover:scale-105 hover:shadow-2xl transition-all duration-500 border border-slate-200"
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
                                  className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300">
                                  <div className="absolute bottom-4 left-4 right-4">
                                    <div className="flex items-center space-x-2 text-white">
                                      <Eye className="w-4 h-4" />
                                      <span className="text-sm font-medium">
                                        Lihat Detail
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-300">
                                  <ExternalLink className="w-4 h-4 text-white" />
                                </div>
                              </div>
                            ))}
                        </div>

                        {komoditas.galeri.length > 4 && (
                          <button
                            className={`flex items-center space-x-3 ${colors.text} hover:scale-105 transition-all duration-300 font-semibold group/more p-4 rounded-2xl ${colors.bgLight} hover:shadow-lg`}
                            onClick={() =>
                              setSelectedGallery({
                                komoditas: komoditas.nama,
                                images: komoditas.galeri,
                                index: 0,
                              })
                            }
                          >
                            <BarChart3 className="w-5 h-5" />
                            <span>
                              Lihat {komoditas.galeri.length - 4} foto lainnya
                            </span>
                            <ArrowRight className="w-5 h-5 group-hover/more:translate-x-1 transition-transform duration-300" />
                          </button>
                        )}
                      </div>
                    ) : (
                      <div className="text-center py-16 bg-gradient-to-br from-slate-50 via-white to-slate-100 rounded-3xl border-2 border-dashed border-slate-200 hover:border-slate-300 transition-colors duration-300">
                        <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl flex items-center justify-center shadow-lg">
                          <Camera className="w-10 h-10 text-slate-400" />
                        </div>
                        <h4 className="text-xl font-bold text-slate-700 mb-2">
                          Galeri Segera Hadir
                        </h4>
                        <p className="text-slate-500 font-medium mb-4">
                          Dokumentasi produk sedang dalam proses
                        </p>
                        <div className="flex justify-center space-x-2">
                          <div className="w-2 h-2 bg-slate-300 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-slate-300 rounded-full animate-bounce delay-100"></div>
                          <div className="w-2 h-2 bg-slate-300 rounded-full animate-bounce delay-200"></div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
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

              {/* Modal Footer */}
              <div className="p-8 bg-gradient-to-r from-slate-50 via-white to-slate-50">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">
                      {selectedGallery.komoditas}
                    </h3>
                    <p className="text-slate-600 font-medium">
                      Foto {selectedGallery.index + 1} dari{" "}
                      {selectedGallery.images.length} dalam galeri produk
                    </p>
                  </div>

                  <div className="flex space-x-3">
                    <button className="flex items-center space-x-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-semibold transition-all duration-300 hover:scale-105">
                      <Heart className="w-5 h-5" />
                      <span>Suka</span>
                    </button>
                    <button className="flex items-center space-x-2 px-6 py-3 border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white rounded-2xl font-semibold transition-all duration-300 hover:scale-105">
                      <ExternalLink className="w-5 h-5" />
                      <span>Bagikan</span>
                    </button>
                  </div>
                </div>

                {/* Thumbnail Navigation */}
                {selectedGallery.images.length > 1 && (
                  <div className="flex space-x-3 mt-6 overflow-x-auto pb-2">
                    {selectedGallery.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() =>
                          setSelectedGallery((prev) => ({ ...prev, index }))
                        }
                        className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-3 transition-all duration-300 hover:scale-110 ${
                          index === selectedGallery.index
                            ? "border-emerald-500 shadow-lg"
                            : "border-transparent hover:border-slate-300"
                        }`}
                      >
                        <img
                          src={image}
                          alt={`Thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Potensi;
