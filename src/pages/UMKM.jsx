import React, { useState, useEffect } from "react";
import {
  MapPin,
  Phone,
  Instagram,
  Facebook,
  ExternalLink,
  ChevronRight,
  Home,
  Filter,
  Grid,
  List,
  X,
  ChevronLeft,
  Store,
  Users,
  Award,
  TrendingUp,
  Search,
  ArrowRight,
  Heart,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const UMKMPage = () => {
  const [umkms, setUmkms] = useState([]);
  const [filteredUmkms, setFilteredUmkms] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [viewMode, setViewMode] = useState("grid");
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchUMKMData = async () => {
      try {
        const response = await fetch("/data/UMKM.json");
        const data = await response.json();
        setUmkms(data);
        setFilteredUmkms(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching UMKM data:", error);
        setLoading(false);
      }
    };

    fetchUMKMData();
  }, []);

  const categories = ["Semua", ...new Set(umkms.map((umkm) => umkm.jenis))];

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    filterUmkms(category, searchTerm);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    filterUmkms(selectedCategory, term);
  };

  const filterUmkms = (category, search) => {
    let filtered = umkms;

    if (category !== "Semua") {
      filtered = filtered.filter((umkm) => umkm.jenis === category);
    }

    if (search) {
      filtered = filtered.filter(
        (umkm) =>
          umkm.nama_umkm.toLowerCase().includes(search.toLowerCase()) ||
          umkm.pemilik.toLowerCase().includes(search.toLowerCase()) ||
          umkm.pengantar_singkat.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredUmkms(filtered);
  };

  const formatPhoneNumber = (phone) => {
    return phone.replace(/[-\s]/g, "").replace(/^0/, "62");
  };

  const openImageModal = (images, index) => {
    setSelectedImage(images);
    setCurrentImageIndex(index);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === selectedImage.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? selectedImage.length - 1 : prev - 1
    );
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

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F7F4ED]">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#2A6218] mx-auto mb-4"></div>
            <p className="text-[#3F5231] text-lg font-medium">
              Memuat data UMKM...
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F7F4ED]">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#3F5231] via-[#2A6218] to-[#65724D] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>

        <div className="relative container mx-auto px-4 py-16 md:py-24">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center space-x-2 text-sm mb-8 opacity-90">
            <a
              href="/"
              className="flex items-center hover:text-[#F7F4ED] transition-colors duration-200"
            >
              <Home className="w-4 h-4 mr-1" />
              Beranda
            </a>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#F7F4ED] font-medium">UMKM Desa Surjo</span>
          </nav>

          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              UMKM Desa
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#F7F4ED] to-yellow-200">
                Surjo
              </span>
            </h1>

            <p className="text-lg md:text-xl text-[#F7F4ED]/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Temukan produk lokal berkualitas dari para pengrajin dan petani
              terbaik di Desa Wisata Surjo. Setiap produk dibuat dengan cinta
              dan tradisi turun temurun.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 mb-2 mx-auto w-fit">
                  <Store className="w-8 h-8 mx-auto text-yellow-300" />
                </div>
                <div className="text-2xl font-bold">{umkms.length}</div>
                <div className="text-sm text-[#F7F4ED]/80">UMKM Aktif</div>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 mb-2 mx-auto w-fit">
                  <Users className="w-8 h-8 mx-auto text-green-300" />
                </div>
                <div className="text-2xl font-bold">
                  {categories.length - 1}
                </div>
                <div className="text-sm text-[#F7F4ED]/80">Kategori</div>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 mb-2 mx-auto w-fit">
                  <Award className="w-8 h-8 mx-auto text-blue-300" />
                </div>
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm text-[#F7F4ED]/80">Lokal</div>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 mb-2 mx-auto w-fit">
                  <Heart className="w-8 h-8 mx-auto text-pink-300" />
                </div>
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm text-[#F7F4ED]/80">Terpercaya</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter & Search Section */}
      <section className="bg-white shadow-lg border-b border-[#65724D]/10 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#65724D]" />
              <input
                type="text"
                placeholder="Cari UMKM atau pemilik..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border-2 border-[#65724D]/20 rounded-xl focus:border-[#2A6218] focus:ring-2 focus:ring-[#2A6218]/20 outline-none transition-all duration-200"
              />
            </div>

            {/* Category Filters */}
            <div className="flex items-center gap-3 flex-wrap">
              <Filter className="w-5 h-5 text-[#3F5231]" />
              <span className="text-[#3F5231] font-semibold whitespace-nowrap">
                Kategori:
              </span>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryFilter(category)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                    selectedCategory === category
                      ? "bg-[#2A6218] text-white shadow-lg transform scale-105"
                      : "bg-[#F7F4ED] text-[#3F5231] hover:bg-[#65724D] hover:text-white border-2 border-[#65724D]/20 hover:border-[#65724D]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* View Toggle */}
            <div className="flex items-center bg-[#F7F4ED] rounded-xl p-1 border-2 border-[#65724D]/20">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-3 rounded-lg transition-all duration-200 ${
                  viewMode === "grid"
                    ? "bg-[#2A6218] text-white shadow-md"
                    : "text-[#3F5231] hover:bg-[#65724D] hover:text-white"
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-3 rounded-lg transition-all duration-200 ${
                  viewMode === "list"
                    ? "bg-[#2A6218] text-white shadow-md"
                    : "text-[#3F5231] hover:bg-[#65724D] hover:text-white"
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Results Info */}
      <div className="container mx-auto px-4 py-4">
        <p className="text-[#65724D] font-medium">
          Menampilkan {filteredUmkms.length} UMKM
          {selectedCategory !== "Semua" &&
            ` dalam kategori "${selectedCategory}"`}
          {searchTerm && ` dengan pencarian "${searchTerm}"`}
        </p>
      </div>

      {/* UMKM Cards */}
      <section className="container mx-auto px-4 pb-16">
        <div
          className={`${
            viewMode === "grid"
              ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
              : "space-y-6"
          }`}
        >
          {filteredUmkms.map((umkm, index) => (
            <article
              key={index}
              className={`group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-[#65724D]/10 hover:border-[#2A6218]/30 hover:-translate-y-2 ${
                viewMode === "list" ? "flex flex-col lg:flex-row" : ""
              }`}
            >
              {/* Image Section */}
              <div
                className={`${
                  viewMode === "list" ? "lg:w-80 lg:flex-shrink-0" : ""
                } relative overflow-hidden`}
              >
                <div
                  className={`${
                    viewMode === "grid" ? "h-64" : "h-64 lg:h-full"
                  } bg-gradient-to-br from-[#65724D]/10 to-[#2A6218]/10 relative`}
                >
                  {umkm.gallery && umkm.gallery.length > 0 ? (
                    <>
                      <img
                        src={umkm.gallery[0]}
                        alt={umkm.nama_umkm}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 cursor-pointer"
                        onClick={() => openImageModal(umkm.gallery, 0)}
                        onError={(e) => {
                          e.target.src = getDefaultImage(umkm.jenis);
                        }}
                      />
                      {umkm.gallery.length > 1 && (
                        <div className="absolute top-4 right-4 bg-[#2A6218]/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                          +{umkm.gallery.length - 1} foto
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#65724D]/20 to-[#2A6218]/20">
                      <div className="text-center">
                        <Store className="w-16 h-16 text-[#65724D] mx-auto mb-3" />
                        <p className="text-[#3F5231] font-medium text-lg">
                          {umkm.nama_umkm}
                        </p>
                        <p className="text-[#65724D] text-sm mt-1">
                          Produk {umkm.jenis}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-block bg-white/95 backdrop-blur-sm text-[#2A6218] px-4 py-2 rounded-full text-sm font-bold shadow-lg border border-[#2A6218]/20">
                      {umkm.jenis}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div
                className={`p-8 ${
                  viewMode === "list" ? "flex-1" : ""
                } flex flex-col`}
              >
                {/* Header */}
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-[#3F5231] mb-3 group-hover:text-[#2A6218] transition-colors duration-300">
                    {umkm.nama_umkm}
                  </h2>
                  <div className="flex items-center gap-2 text-[#65724D] font-medium">
                    <Users className="w-4 h-4" />
                    <span>Pemilik: {umkm.pemilik}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 mb-6 leading-relaxed text-justify flex-1">
                  {umkm.pengantar_singkat}
                </p>

                {/* Gallery Thumbnails */}
                {umkm.gallery && umkm.gallery.length > 1 && (
                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-[#3F5231] mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#2A6218] rounded-full"></span>
                      Galeri
                    </h4>
                    <div className="flex gap-2 overflow-x-auto pb-2">
                      {umkm.gallery.slice(0, 5).map((image, idx) => (
                        <img
                          key={idx}
                          src={image}
                          alt={`${umkm.nama_umkm} ${idx + 1}`}
                          className="w-16 h-16 object-cover rounded-xl cursor-pointer hover:ring-4 hover:ring-[#2A6218]/30 transition-all duration-300 flex-shrink-0 hover:scale-110"
                          onClick={() => openImageModal(umkm.gallery, idx)}
                        />
                      ))}
                      {umkm.gallery.length > 5 && (
                        <div
                          className="w-16 h-16 bg-gradient-to-br from-[#65724D] to-[#2A6218] rounded-xl flex items-center justify-center text-white text-xs font-bold cursor-pointer hover:scale-110 transition-transform duration-300 flex-shrink-0"
                          onClick={() => openImageModal(umkm.gallery, 0)}
                        >
                          +{umkm.gallery.length - 5}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Contact Section */}
                <div className="space-y-4 mb-6">
                  <h4 className="text-sm font-bold text-[#3F5231] flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#2A6218] rounded-full"></span>
                    Hubungi Kami
                  </h4>

                  {umkm.informasi_kontak.wa && (
                    <a
                      href={`https://wa.me/${formatPhoneNumber(
                        umkm.informasi_kontak.wa
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 bg-green-50 hover:bg-green-100 p-4 rounded-2xl transition-all duration-300 group/contact border border-green-200 hover:border-green-300"
                    >
                      <div className="p-3 bg-green-500 rounded-2xl group-hover/contact:scale-110 transition-transform duration-300">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-green-800">WhatsApp</p>
                        <p className="text-green-600 text-sm">
                          {umkm.informasi_kontak.wa}
                        </p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-green-500 group-hover/contact:translate-x-1 transition-transform duration-300" />
                    </a>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {umkm.informasi_kontak.ig && (
                      <a
                        href={`https://instagram.com/${umkm.informasi_kontak.ig.replace(
                          "@",
                          ""
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 bg-pink-50 hover:bg-pink-100 p-3 rounded-xl transition-all duration-300 group/social border border-pink-200 hover:border-pink-300"
                      >
                        <div className="p-2 bg-pink-500 rounded-xl group-hover/social:scale-110 transition-transform duration-300">
                          <Instagram className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-pink-800 text-sm truncate">
                            {umkm.informasi_kontak.ig}
                          </p>
                        </div>
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
                        className="flex items-center gap-3 bg-blue-50 hover:bg-blue-100 p-3 rounded-xl transition-all duration-300 group/social border border-blue-200 hover:border-blue-300"
                      >
                        <div className="p-2 bg-blue-500 rounded-xl group-hover/social:scale-110 transition-transform duration-300">
                          <Facebook className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-blue-800 text-sm truncate">
                            {umkm.informasi_kontak.fb}
                          </p>
                        </div>
                      </a>
                    )}
                  </div>
                </div>

                {/* Location & Maps */}
                <div className="border-t border-[#65724D]/20 pt-6">
                  <div className="flex items-start gap-3 mb-4">
                    <MapPin className="w-5 h-5 text-[#2A6218] mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {umkm.alamat}
                    </p>
                  </div>
                  <a
                    href={umkm.link_maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-[#2A6218] to-[#3F5231] hover:from-[#3F5231] hover:to-[#2A6218] text-white px-6 py-3 rounded-2xl font-semibold hover:shadow-xl transition-all duration-300 group/maps"
                  >
                    <MapPin className="w-5 h-5 group-hover/maps:scale-110 transition-transform duration-300" />
                    Lihat Lokasi di Maps
                    <ExternalLink className="w-4 h-4 group-hover/maps:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {filteredUmkms.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-white rounded-3xl p-12 shadow-lg border border-[#65724D]/10 max-w-md mx-auto">
              <Store className="w-16 h-16 text-[#65724D] mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-[#3F5231] mb-3">
                Tidak Ada UMKM Ditemukan
              </h3>
              <p className="text-[#65724D] mb-6">
                Tidak ada UMKM yang sesuai dengan kriteria pencarian Anda.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("Semua");
                  setSearchTerm("");
                  setFilteredUmkms(umkms);
                }}
                className="bg-gradient-to-r from-[#2A6218] to-[#3F5231] text-white px-6 py-3 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300"
              >
                Reset Filter
              </button>
            </div>
          </div>
        )}
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-5xl w-full">
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              <X className="w-6 h-6" />
            </button>

            {selectedImage.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            <img
              src={selectedImage[currentImageIndex]}
              alt={`Gallery ${currentImageIndex + 1}`}
              className="w-full h-auto max-h-[85vh] object-contain rounded-2xl"
            />

            {selectedImage.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                {currentImageIndex + 1} / {selectedImage.length}
              </div>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default UMKMPage;
