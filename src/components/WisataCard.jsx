import { useState } from "react";
import {
  MapPin,
  ExternalLink,
  Camera,
  Mountain,
  Utensils,
  Info,
  ChevronDown,
  ChevronUp,
  X,
} from "lucide-react";

const WisataCard = ({ wisata = 0 }) => {
  const [showModal, setShowModal] = useState(false);
  const getCategoryIcon = (category) => {
    switch (category.toLowerCase()) {
      case "alam":
        return <Mountain className="w-5 h-5" />;
      case "kuliner":
        return <Utensils className="w-5 h-5" />;
      default:
        return <Camera className="w-5 h-5" />;
    }
  };

  const getCategoryColor = (category) => {
    switch (category.toLowerCase()) {
      case "alam":
        return "bg-[#2A6218] text-white";
      case "kuliner":
        return "bg-[#65724D] text-white";
      default:
        return "bg-[#3F5231] text-white";
    }
  };

  const truncateText = (text, maxLength = 120) => {
    if (!text || text === "")
      return "Informasi detail destinasi wisata ini akan segera tersedia. Nantikan update terbaru dari kami!";
    return text;
  };

  const getPreviewText = (text, maxLength = 120) => {
    if (!text || text === "")
      return "Informasi detail destinasi wisata ini akan segera tersedia. Nantikan update terbaru dari kami!";
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  const shouldShowReadMore = (text) => {
    if (!text || text === "") return false;
    return text.length > 120;
  };

  const hasValidLocation = wisata.lokasi && wisata.lokasi.trim() !== "";
  const hasValidMaps = wisata.link_maps && wisata.link_maps.trim() !== "";

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden group h-full flex flex-col">
      {/* Image Container - Fixed Height */}
      <div className="relative h-56 bg-gradient-to-br from-[#65724D] to-[#3F5231] overflow-hidden flex-shrink-0">
        {wisata.gallery && wisata.gallery.length > 0 ? (
          <img
            src={wisata.gallery[0]}
            alt={wisata.nama_wisata}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center text-white">
              <Camera className="w-12 h-12 mx-auto mb-3 opacity-60" />
              <p className="text-sm font-medium opacity-80">
                Foto Segera Hadir
              </p>
            </div>
          </div>
        )}

        {/* Category Badge */}
        <div
          className={`absolute top-4 left-4 px-3 py-2 rounded-full text-sm font-semibold flex items-center gap-2 ${getCategoryColor(
            wisata.kategori
          )} shadow-lg backdrop-blur-sm`}
        >
          {getCategoryIcon(wisata.kategori)}
          {wisata.kategori}
        </div>

        {/* Status Indicator */}
        <div className="absolute top-4 right-4">
          {(!hasValidLocation || !hasValidMaps) && (
            <div className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
              <Info className="w-3 h-3" />
              Info Terbatas
            </div>
          )}
        </div>
      </div>

      {/* Content Container - Flex Grow */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Title */}
        <h3 className="text-xl font-bold text-[#3F5231] mb-3 group-hover:text-[#2A6218] transition-colors line-clamp-2 min-h-[3.5rem]">
          {wisata.nama_wisata}
        </h3>

        {/* Description - Fixed Height */}
        <div className="mb-4 flex-grow">
          <p className="text-gray-600 text-sm leading-relaxed h-16 overflow-hidden">
            {getPreviewText(wisata.pengantar_singkat, 120)}
          </p>
          {shouldShowReadMore(wisata.pengantar_singkat) && (
            <button
              onClick={() => setShowModal(true)}
              className="text-[#2A6218] hover:text-[#3F5231] text-sm font-medium mt-2 flex items-center gap-1 transition-colors"
            >
              Baca Selengkapnya
              <ChevronDown className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Location Info - Fixed Height */}
        <div className="mb-4 h-12 flex items-start">
          {hasValidLocation ? (
            <div className="flex items-start gap-3 text-gray-600">
              <MapPin className="w-4 h-4 text-[#2A6218] mt-1 flex-shrink-0" />
              <span className="text-sm leading-relaxed line-clamp-2">
                {wisata.lokasi.length > 80
                  ? `${wisata.lokasi.substring(0, 80)}...`
                  : wisata.lokasi}
              </span>
            </div>
          ) : (
            <div className="flex items-center gap-3 text-gray-400">
              <MapPin className="w-4 h-4" />
              <span className="text-sm italic">
                Lokasi akan segera diperbaharui
              </span>
            </div>
          )}
        </div>

        {/* Action Buttons - Fixed at Bottom */}
        <div className="grid grid-cols-2 gap-3 mt-auto">
          {/* Maps Button */}
          {hasValidMaps ? (
            <a
              href={wisata.link_maps}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2A6218] text-white px-4 py-2.5 rounded-lg hover:bg-[#3F5231] transition-all duration-300 flex items-center justify-center gap-2 text-sm font-medium hover:scale-105 active:scale-95"
            >
              <ExternalLink className="w-4 h-4" />
              Lihat Maps
            </a>
          ) : (
            <button
              disabled
              className="bg-gray-100 text-gray-400 px-4 py-2.5 rounded-lg cursor-not-allowed flex items-center justify-center gap-2 text-sm font-medium border border-gray-200"
            >
              <MapPin className="w-4 h-4  " />
              Maps Segera
            </button>
          )}

          {/* Detail Button */}
          <button
            onClick={() => setShowModal(true)}
            className="bg-[#65724D] text-white px-4 py-2.5 rounded-lg hover:bg-[#3F5231] transition-all duration-300 flex items-center justify-center gap-2 text-sm font-medium hover:scale-105 active:scale-95"
          >
            <Info className="w-4 h-4" />
            Detail
          </button>
        </div>
      </div>

      {/* Modal for Full Content */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div
                    className={`px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-2 ${getCategoryColor(
                      wisata.kategori
                    )}`}
                  >
                    {getCategoryIcon(wisata.kategori)}
                    {wisata.kategori}
                  </div>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>
              <h2 className="text-2xl font-bold text-[#3F5231] mt-4">
                {wisata.nama_wisata}
              </h2>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Image */}
              <div className="relative h-64 bg-gradient-to-br from-[#65724D] to-[#3F5231] rounded-xl overflow-hidden mb-6">
                {wisata.gallery && wisata.gallery.length > 0 ? (
                  <img
                    src={wisata.gallery[0]}
                    alt={wisata.nama_wisata}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center text-white">
                      <Camera className="w-16 h-16 mx-auto mb-4 opacity-60" />
                      <p className="text-lg font-medium opacity-80">
                        Foto Segera Hadir
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Full Description */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-[#3F5231] mb-3">
                  Deskripsi
                </h3>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {wisata.pengantar_singkat ||
                    "Informasi detail destinasi wisata ini akan segera tersedia. Nantikan update terbaru dari kami!"}
                </p>
              </div>

              {/* Location Information */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-[#3F5231] mb-3">
                  Lokasi
                </h3>
                {hasValidLocation ? (
                  <div className="flex items-start gap-3 text-gray-700">
                    <MapPin className="w-5 h-5 text-[#2A6218] mt-1 flex-shrink-0" />
                    <span className="leading-relaxed">{wisata.lokasi}</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-3 text-gray-400">
                    <MapPin className="w-5 h-5" />
                    <span className="italic">
                      Informasi lokasi akan segera diperbaharui
                    </span>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                {hasValidMaps ? (
                  <a
                    href={wisata.link_maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#2A6218] text-white px-6 py-3 rounded-lg hover:bg-[#3F5231] transition-all duration-300 flex items-center justify-center gap-2 font-medium hover:scale-105 active:scale-95"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Buka di Google Maps
                  </a>
                ) : (
                  <button
                    disabled
                    className="flex-1 bg-gray-100 text-gray-400 px-6 py-3 rounded-lg cursor-not-allowed flex items-center justify-center gap-2 font-medium border border-gray-200"
                  >
                    <MapPin className="w-5 h-5" />
                    Maps Segera Tersedia
                  </button>
                )}

                <button
                  onClick={() => setShowModal(false)}
                  className="px-6 py-3 border-2 border-[#65724D] text-[#65724D] rounded-lg hover:bg-[#65724D] hover:text-white transition-all duration-300 font-medium"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WisataCard;
