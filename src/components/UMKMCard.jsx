import { useState } from "react";
import {
  MapPin,
  Phone,
  Instagram,
  Facebook,
  ExternalLink,
  Store,
  Users,
  ChevronLeft,
  ChevronRight,
  Eye,
} from "lucide-react";

const UMKMCard = ({ umkm, viewMode, onImageClick }) => {
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  const [isGalleryHovered, setIsGalleryHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const formatPhoneNumber = (phone) => {
    return phone.replace(/[-\s]/g, "").replace(/^0/, "62");
  };

  const getDefaultImage = (jenis) => {
    const defaultImages = {
      Kopi: "https://img.freepik.com/premium-photo/roasted-coffee-beans-hd-8k-wallpaper-stock-photographic-image_890746-34276.jpg",
      Teh: "https://media.istockphoto.com/id/171279361/id/foto/teh-hitam.jpg?s=612x612&w=0&k=20&c=fKDEX-ruCqRecLPNBP1RDiRpnPRGvkgjB_7VogDafnQ=",
      Emping:
        "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2023/01/17043837/Meski-Tinggi-Purin-Ini-Manfaat-Emping-Melinjo-bagi-Kesehatan.jpg.webp",
    };
    return defaultImages[jenis] || "/images/default-umkm.jpg";
  };

  const nextGalleryImage = (e) => {
    e.stopPropagation();
    setCurrentGalleryIndex((prev) =>
      prev === umkm.gallery.length - 1 ? 0 : prev + 1
    );
  };

  const prevGalleryImage = (e) => {
    e.stopPropagation();
    setCurrentGalleryIndex((prev) =>
      prev === 0 ? umkm.gallery.length - 1 : prev - 1
    );
  };

  return (
    <article
      className={`group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-[#65724D]/10 hover:border-[#2A6218]/30 hover:-translate-y-2 ${
        viewMode === "list"
          ? "flex flex-col lg:flex-row"
          : "h-full flex flex-col"
      }`}
    >
      {/* Enhanced Image/Gallery Section */}
      <div
        className={`${
          viewMode === "list" ? "lg:w-96 lg:flex-shrink-0" : ""
        } relative overflow-hidden`}
        onMouseEnter={() => setIsGalleryHovered(true)}
        onMouseLeave={() => setIsGalleryHovered(false)}
      >
        <div
          className={`${
            viewMode === "grid" ? "h-80" : "h-80 lg:h-full"
          } bg-gradient-to-br from-[#65724D]/10 to-[#2A6218]/10 relative group/gallery`}
        >
          {umkm.gallery && umkm.gallery.length > 0 ? (
            <div className="relative w-full h-full">
              {/* Main Gallery Image */}
              <img
                src={umkm.gallery[currentGalleryIndex]}
                alt={`${umkm.nama_umkm} - Image ${currentGalleryIndex + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 cursor-pointer"
                onClick={() => onImageClick(umkm.gallery, currentGalleryIndex)}
                onError={(e) => {
                  e.target.src = getDefaultImage(umkm.jenis);
                }}
              />

              {/* Gallery Navigation - Only show if more than 1 image */}
              {umkm.gallery.length > 1 && (
                <>
                  {/* Navigation Buttons */}
                  <div
                    className={`absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 transition-opacity duration-300 ${
                      isGalleryHovered ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <button
                      onClick={prevGalleryImage}
                      className="bg-black/60 hover:bg-black/80 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextGalleryImage}
                      className="bg-black/60 hover:bg-black/80 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Gallery Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {umkm.gallery.map((_, index) => (
                      <button
                        key={index}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentGalleryIndex(index);
                        }}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentGalleryIndex
                            ? "bg-white w-6"
                            : "bg-white/50 hover:bg-white/80"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Gallery Counter */}
                  <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    {currentGalleryIndex + 1}/{umkm.gallery.length}
                  </div>
                </>
              )}

              {/* View Gallery Button */}
              <button
                onClick={() => onImageClick(umkm.gallery, currentGalleryIndex)}
                className={`absolute inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300 ${
                  isGalleryHovered ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="bg-white/90 backdrop-blur-sm text-[#2A6218] px-6 py-3 rounded-2xl font-semibold flex items-center gap-2 hover:bg-white hover:scale-105 transition-all duration-300">
                  <Eye className="w-5 h-5" />
                  Lihat Galeri
                </div>
              </button>
            </div>
          ) : (
            // Default placeholder when no gallery
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#65724D]/20 to-[#2A6218]/20">
              <div className="text-center">
                <Store className="w-20 h-20 text-[#65724D] mx-auto mb-4" />
                <p className="text-[#3F5231] font-bold text-xl mb-2 text align-cente">
                  {umkm.nama_umkm}
                </p>
                <p className="text-[#65724D] text-base">Produk {umkm.jenis}</p>
              </div>
            </div>
          )}

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm text-[#2A6218] px-4 py-2 rounded-full text-sm font-bold shadow-lg border border-[#2A6218]/20">
              <span className="w-2 h-2 bg-[#2A6218] rounded-full"></span>
              {umkm.jenis}
            </span>
          </div>
        </div>
      </div>

      {/* Enhanced Content Section */}
      <div
        className={`p-8 ${
          viewMode === "list" ? "flex-1" : ""
        } flex flex-col h-full`}
      >
        {/* Header with improved spacing */}
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-[#3F5231] mb-3 group-hover:text-[#2A6218] transition-colors duration-300 line-clamp-2">
            {umkm.nama_umkm}
          </h2>
          <div className="flex items-center text-center gap-2 text-[#65724D] font-medium ">
            <div className="p-2 bg-[#65724D]/10 rounded-full">
              <Users className="w-4 h-4 text-[#65724D]" />
            </div>
            <span>Pemilik: {umkm.pemilik} </span>
          </div>
        </div>

        {/* Enhanced Description */}
        <div className="mb-6 flex-1">
          {/* Deskripsi dengan line-clamp untuk truncate */}
          <p
            className={`text-gray-700 leading-relaxed text-justify transition-all duration-300 ${
              isExpanded ? "line-clamp-none" : "line-clamp-4"
            }`}
          >
            {umkm.pengantar_singkat}
          </p>

          {/* Tombol See More / See Less */}
          <button
            onClick={() => setIsExpanded(!isExpanded)} // Toggle antara expand/collapse
            className="text-[#2A6218] font-semibold mt-2"
          >
            {isExpanded ? "See Less" : "See More"}
          </button>
        </div>

        {/* Enhanced Gallery Carousel Preview */}
        {umkm.gallery && umkm.gallery.length > 1 && (
          <div className="mb-6">
            <h4 className="text-sm font-bold text-[#3F5231] mb-3 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#2A6218] rounded-full"></span>
              Galeri ({umkm.gallery.length} foto)
            </h4>
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {umkm.gallery.slice(0, 6).map((image, idx) => (
                <div key={idx} className="relative flex-shrink-0 group/thumb">
                  <img
                    src={image}
                    alt={`${umkm.nama_umkm} ${idx + 1}`}
                    className="w-20 h-20 object-cover rounded-xl cursor-pointer hover:ring-4 hover:ring-[#2A6218]/30 transition-all duration-300 hover:scale-110"
                    onClick={() => onImageClick(umkm.gallery, idx)}
                  />
                  {idx === currentGalleryIndex && (
                    <div className="absolute inset-0 bg-[#2A6218]/20 rounded-xl border-2 border-[#2A6218]"></div>
                  )}
                </div>
              ))}
              {umkm.gallery.length > 6 && (
                <div
                  className="w-20 h-20 bg-gradient-to-br from-[#65724D] to-[#2A6218] rounded-xl flex items-center justify-center text-white text-xs font-bold cursor-pointer hover:scale-110 transition-transform duration-300 flex-shrink-0"
                  onClick={() => onImageClick(umkm.gallery, 0)}
                >
                  +{umkm.gallery.length - 6}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Enhanced Contact Section */}
        <div className="space-y-4 mb-6">
          <h4 className="text-sm font-bold text-[#3F5231] flex items-center gap-2">
            <span className="w-2 h-2 bg-[#2A6218] rounded-full"></span>
            Hubungi Kami
          </h4>

          {/* WhatsApp - Primary Contact */}
          {umkm.informasi_kontak.wa && (
            <a
              href={`https://wa.me/${formatPhoneNumber(
                umkm.informasi_kontak.wa
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-gradient-to-r from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 p-4 rounded-2xl transition-all duration-300 group/contact border-2 border-green-200 hover:border-green-300 hover:shadow-lg"
            >
              <div className="p-3 bg-green-500 rounded-2xl group-hover/contact:scale-110 group-hover/contact:bg-green-600 transition-all duration-300 shadow-lg">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="font-bold text-green-800">WhatsApp</p>
                <p className="text-green-600 text-sm font-medium">
                  {umkm.informasi_kontak.wa}
                </p>
              </div>
              <ExternalLink className="w-5 h-5 text-green-500 group-hover/contact:translate-x-1 group-hover/contact:scale-110 transition-transform duration-300" />
            </a>
          )}

          {/* Social Media Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {umkm.informasi_kontak.ig && (
              <a
                href={`https://instagram.com/${umkm.informasi_kontak.ig.replace(
                  "@",
                  ""
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-gradient-to-r from-pink-50 to-pink-100 hover:from-pink-100 hover:to-pink-200 p-4 rounded-xl transition-all duration-300 group/social border-2 border-pink-200 hover:border-pink-300 hover:shadow-md"
              >
                <div className="p-2 bg-pink-500 rounded-xl group-hover/social:scale-110 group-hover/social:bg-pink-600 transition-all duration-300">
                  <Instagram className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-pink-800 text-sm truncate">
                    {umkm.informasi_kontak.ig}
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-pink-500 group-hover/social:scale-110 transition-transform duration-300" />
              </a>
            )}

            {umkm.informasi_kontak.fb && (
              <a
                href={`https://facebook.com/${umkm.informasi_kontak.fb.replace(
                  "@",
                  ""
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 p-4 rounded-xl transition-all duration-300 group/social border-2 border-blue-200 hover:border-blue-300 hover:shadow-md"
              >
                <div className="p-2 bg-blue-500 rounded-xl group-hover/social:scale-110 group-hover/social:bg-blue-600 transition-all duration-300">
                  <Facebook className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-blue-800 text-sm truncate">
                    {umkm.informasi_kontak.fb}
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-blue-500 group-hover/social:scale-110 transition-transform duration-300" />
              </a>
            )}
          </div>
        </div>

        {/* Enhanced Location & Maps */}
        <div className="border-t border-[#65724D]/20 pt-6 mt-auto">
          <div className="flex items-center gap-2 text-gray-700 font-medium mb-4">
            <div className="p-2 bg-[#2A6218]/10 rounded-full">
              <MapPin className="w-4 h-4 text-[#2A6218]" />
            </div>
            <span className="text-sm leading-relaxed">{umkm.alamat}</span>
          </div>
          <a
            href={umkm.link_maps}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#2A6218] to-[#3F5231] hover:from-[#3F5231] hover:to-[#2A6218] text-white px-6 py-3 rounded-2xl font-semibold hover:shadow-xl transition-all duration-300 group/maps w-full justify-center"
          >
            <MapPin className="w-5 h-5 group-hover/maps:scale-110 transition-transform duration-300" />
            Lihat Lokasi di Maps
            <ExternalLink className="w-4 h-4 group-hover/maps:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </article>
  );
};

export default UMKMCard;
