import { useState } from "react";
import {
  MapPin,
  ExternalLink,
  Camera,
  Mountain,
  Utensils,
  Info,
  ChevronDown,
  X,
  ChevronLeft,
  ChevronRight,
  Image,
} from "lucide-react";

const WisataCard = ({ wisata = {} }) => {
  const [showModal, setShowModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showGallery, setShowGallery] = useState(false);

  const getCategoryIcon = (category) => {
    switch (category?.toLowerCase()) {
      case "alam":
        return <Mountain className="w-5 h-5" />;
      case "kuliner":
        return <Utensils className="w-5 h-5" />;
      default:
        return <Camera className="w-5 h-5" />;
    }
  };

  const getCategoryColor = (category) => {
    switch (category?.toLowerCase()) {
      case "alam":
        return "bg-[#2A6218] text-white";
      case "kuliner":
        return "bg-[#65724D] text-white";
      default:
        return "bg-[#3F5231] text-white";
    }
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
  const hasGallery = wisata.gallery && wisata.gallery.length > 0;

  const nextImage = () => {
    if (hasGallery) {
      setCurrentImageIndex((prev) => (prev + 1) % wisata.gallery.length);
    }
  };

  const prevImage = () => {
    if (hasGallery) {
      setCurrentImageIndex(
        (prev) => (prev - 1 + wisata.gallery.length) % wisata.gallery.length
      );
    }
  };

  const openGallery = (index = 0) => {
    setCurrentImageIndex(index);
    setShowGallery(true);
  };

  return (
    <>
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden group h-full flex flex-col">
        {/* Image Container - Fixed Height */}
        <div className="relative h-56 bg-gradient-to-br from-[#65724D] to-[#3F5231] overflow-hidden flex-shrink-0">
          {hasGallery ? (
            <img
              src={wisata.gallery[0]}
              alt={wisata.nama_wisata}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 cursor-pointer"
              onClick={() => openGallery(0)}
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

          {/* Gallery Indicator */}
          {hasGallery && wisata.gallery.length > 1 && (
            <div
              className="absolute bottom-4 right-4 bg-black bg-opacity-60 text-white px-2 py-1 rounded-full text-xs flex items-center gap-1 cursor-pointer hover:bg-opacity-80 transition-all"
              onClick={() => openGallery(0)}
            >
              <Image className="w-3 h-3" />
              {wisata.gallery.length}
            </div>
          )}

          {/* Category Badge */}
          <div
            className={`absolute top-4 left-4 px-3 py-2 rounded-full text-sm font-semibold flex items-center gap-2 ${getCategoryColor(
              wisata.kategori
            )} shadow-lg backdrop-blur-sm`}
          >
            {getCategoryIcon(wisata.kategori)}
            {wisata.kategori || "Wisata"}
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
            {wisata.nama_wisata || "Destinasi Wisata"}
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
                <MapPin className="w-4 h-4" />
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
      </div>

      {/* MODAL POPUP TENGAH LAYAR - DIPERBAIKI */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-[9999] overflow-y-auto">
          <div
            className="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden shadow-2xl transform scale-100 my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-gradient-to-r from-[#3F5231] to-[#2A6218] text-white p-4 flex items-center justify-between z-10">
              <div className="flex items-center gap-3">
                <div
                  className={`p-2 rounded-lg ${getCategoryColor(
                    wisata.kategori
                  )} bg-white/20`}
                >
                  {getCategoryIcon(wisata.kategori)}
                </div>
                <div>
                  <div className="text-xs opacity-80 uppercase tracking-wide">
                    {wisata.kategori || "Wisata"}
                  </div>
                  <h2 className="text-lg font-bold">
                    {wisata.nama_wisata || "Destinasi Wisata"}
                  </h2>
                </div>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="p-2 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content - Scrollable */}
            <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
              <div className="p-6 space-y-6">
                {/* Image Gallery */}
                <div className="relative">
                  <div className="relative h-64 sm:h-80 bg-gradient-to-br from-[#65724D] to-[#3F5231] rounded-xl overflow-hidden shadow-lg">
                    {hasGallery ? (
                      <img
                        src={wisata.gallery[currentImageIndex]}
                        alt={wisata.nama_wisata}
                        className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                        onClick={() => openGallery(currentImageIndex)}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-center text-white">
                          <Camera className="w-16 h-16 mx-auto mb-3 opacity-60" />
                          <p className="text-lg font-medium opacity-80">
                            Foto Segera Hadir
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Navigation for multiple images */}
                    {hasGallery && wisata.gallery.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all hover:scale-110"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all hover:scale-110"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>

                        {/* Image counter */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                          {currentImageIndex + 1} / {wisata.gallery.length}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Gallery thumbnails */}
                  {hasGallery && wisata.gallery.length > 1 && (
                    <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
                      {wisata.gallery.slice(0, 8).map((image, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                            currentImageIndex === index
                              ? "border-[#2A6218] scale-105 shadow-lg"
                              : "border-gray-300 hover:border-[#65724D] opacity-70 hover:opacity-100"
                          }`}
                        >
                          <img
                            src={image}
                            alt={`${wisata.nama_wisata} ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                      {wisata.gallery.length > 8 && (
                        <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-gray-200 flex items-center justify-center text-xs text-gray-600 font-medium">
                          +{wisata.gallery.length - 8}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Description */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-[#3F5231] mb-4 flex items-center gap-2">
                    <Info className="w-5 h-5" />
                    Deskripsi
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {wisata.pengantar_singkat ||
                      "Informasi detail destinasi wisata ini akan segera tersedia. Nantikan update terbaru dari kami!"}
                  </p>
                </div>

                {/* Location Information */}
                {hasValidLocation && (
                  <div className="bg-green-50 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-[#3F5231] mb-4 flex items-center gap-2">
                      <MapPin className="w-5 h-5" />
                      Lokasi
                    </h3>
                    <div className="flex items-start gap-3 text-gray-700">
                      <MapPin className="w-5 h-5 text-[#2A6218] mt-1 flex-shrink-0" />
                      <span className="leading-relaxed">{wisata.lokasi}</span>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  {hasValidMaps ? (
                    <a
                      href={wisata.link_maps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-[#2A6218] text-white px-6 py-4 rounded-xl hover:bg-[#3F5231] transition-all duration-300 flex items-center justify-center gap-3 font-semibold hover:scale-105 active:scale-95 shadow-lg"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Buka di Maps
                    </a>
                  ) : (
                    <button
                      disabled
                      className="flex-1 bg-gray-100 text-gray-400 px-6 py-4 rounded-xl cursor-not-allowed flex items-center justify-center gap-3 font-semibold border border-gray-200"
                    >
                      <MapPin className="w-5 h-5" />
                      Maps Segera Tersedia
                    </button>
                  )}

                  <button
                    onClick={() => setShowModal(false)}
                    className="px-8 py-4 border-2 border-[#65724D] text-[#65724D] rounded-xl hover:bg-[#65724D] hover:text-white transition-all duration-300 font-semibold hover:scale-105 active:scale-95"
                  >
                    Tutup
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Full Screen Gallery Modal - Tetap sama */}
      {showGallery && hasGallery && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 z-[60] transition-opacity duration-300"
          onClick={() => setShowGallery(false)}
        >
          <div className="relative w-full h-full max-w-6xl max-h-full flex items-center justify-center">
            {/* Close button */}
            <button
              onClick={() => setShowGallery(false)}
              className="absolute top-4 right-4 z-10 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all hover:scale-110 shadow-lg"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Main image */}
            <div className="relative w-full h-full flex items-center justify-center p-4">
              <img
                src={wisata.gallery[currentImageIndex]}
                alt={`${wisata.nama_wisata} ${currentImageIndex + 1}`}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />

              {/* Navigation */}
              {wisata.gallery.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all hover:scale-110 shadow-lg"
                  >
                    <ChevronLeft className="w-8 h-8" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all hover:scale-105 shadow-lg"
                  >
                    <ChevronRight className="w-8 h-8" />
                  </button>
                </>
              )}

              {/* Image info */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/70 text-white px-6 py-3 rounded-full max-w-md text-center shadow-lg">
                <span className="font-medium text-base truncate block">
                  {wisata.nama_wisata}
                </span>
                {wisata.gallery.length > 1 && (
                  <span className="text-sm opacity-75 block mt-1">
                    {currentImageIndex + 1} / {wisata.gallery.length}
                  </span>
                )}
              </div>
            </div>

            {/* Thumbnail navigation - only show on larger screens */}
            {wisata.gallery.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden sm:flex gap-2 bg-black/60 p-3 rounded-lg max-w-full overflow-x-auto shadow-lg">
                {wisata.gallery.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-12 h-12 rounded overflow-hidden border-2 transition-all ${
                      currentImageIndex === index
                        ? "border-white scale-110 shadow-lg"
                        : "border-gray-500 hover:border-white opacity-70 hover:opacity-100"
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
      )}
    </>
  );
};

export default WisataCard;
