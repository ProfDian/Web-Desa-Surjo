import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Leaf,
  Coffee,
  Mountain,
  Eye,
  Play,
  Star,
  Camera,
  CheckCircle,
  ExternalLink,
  BarChart3,
  ArrowRight,
} from "lucide-react";

const PotensiCard = ({
  komoditas,
  index,
  isHovered,
  onMouseEnter,
  onMouseLeave,
  onGalleryClick,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

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

  const colors = getAccentColors(index);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const handleGalleryItemClick = (imgIndex) => {
    onGalleryClick({
      komoditas: komoditas.nama,
      images: komoditas.galeri,
      index: imgIndex,
    });
  };

  const handleViewAllGallery = () => {
    onGalleryClick({
      komoditas: komoditas.nama,
      images: komoditas.galeri,
      index: 0,
    });
  };

  return (
    <div
      className={`group relative bg-white rounded-3xl shadow-xl hover:shadow-3xl transition-all duration-700 overflow-hidden border border-slate-200/50 hover:border-transparent transform hover:scale-[1.02] ${
        isHovered ? "z-10" : ""
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
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

          {/* Quality Indicators */}
          <div className="flex space-x-2">
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
              onClick={toggleExpanded}
              className={`flex items-center justify-between w-full p-6 ${colors.bgLight} hover:bg-gradient-to-r hover:from-${colors.bgLight} hover:to-white rounded-2xl transition-all duration-500 group/btn border ${colors.border} shadow-lg hover:shadow-xl`}
            >
              <div className="flex items-center space-x-4">
                <div
                  className={`w-12 h-12 ${colors.bg} rounded-2xl flex items-center justify-center shadow-lg group-hover/btn:shadow-xl transition-all duration-300 group-hover/btn:scale-110`}
                >
                  <Play className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <span className={`font-bold ${colors.text} text-lg`}>
                    Proses Produksi
                  </span>
                  <p className="text-sm text-slate-600 mt-1">
                    {komoditas.proses.length} tahapan berkualitas
                  </p>
                </div>
              </div>
              <div className="group-hover/btn:scale-110 transition-transform duration-300">
                {isExpanded ? (
                  <ChevronUp className={`w-6 h-6 ${colors.text}`} />
                ) : (
                  <ChevronDown className={`w-6 h-6 ${colors.text}`} />
                )}
              </div>
            </button>

            {isExpanded && (
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
                          Tahap {stepIndex + 1} dari {komoditas.proses.length}
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
              <div className={`px-4 py-2 ${colors.bgLight} rounded-full`}>
                <span className={`text-sm font-semibold ${colors.text}`}>
                  {komoditas.galeri.length} foto
                </span>
              </div>
            )}
          </div>

          {komoditas.galeri && komoditas.galeri.length > 0 ? (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {komoditas.galeri.slice(0, 4).map((image, imgIndex) => (
                  <div
                    key={imgIndex}
                    className="group/img relative aspect-square bg-slate-100 rounded-2xl overflow-hidden cursor-pointer hover:scale-105 hover:shadow-2xl transition-all duration-500 border border-slate-200"
                    onClick={() => handleGalleryItemClick(imgIndex)}
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
                  onClick={handleViewAllGallery}
                >
                  <BarChart3 className="w-5 h-5" />
                  <span>Lihat {komoditas.galeri.length - 4} foto lainnya</span>
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
};

export default PotensiCard;
