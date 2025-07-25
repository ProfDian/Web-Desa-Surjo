import React, { useState, useEffect } from "react";
import {
  Home,
  Filter,
  Grid,
  List,
  X,
  ChevronLeft,
  ChevronRight,
  Store,
  Users,
  Award,
  Heart,
  Search,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import UMKMCard from "../components/UMKMCard";

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

  // Handle keyboard navigation for modal
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (selectedImage) {
        if (e.key === "ArrowLeft") {
          prevImage();
        } else if (e.key === "ArrowRight") {
          nextImage();
        } else if (e.key === "Escape") {
          closeImageModal();
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [selectedImage]);

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

      {/* Enhanced Hero Section */}
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
          </div>
        </div>
      </section>

      {/* Enhanced Filter & Search Section */}
      <section className="bg-white shadow-lg border-b border-[#65724D]/10 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            {/* Enhanced Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#65724D]" />
              <input
                type="text"
                placeholder="Cari UMKM atau pemilik..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border-2 border-[#65724D]/20 rounded-xl focus:border-[#2A6218] focus:ring-2 focus:ring-[#2A6218]/20 outline-none transition-all duration-200 bg-[#F7F4ED]/30"
              />
              {searchTerm && (
                <button
                  onClick={() => handleSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#65724D] hover:text-[#2A6218] transition-colors duration-200"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Enhanced Category Filters */}
            <div className="flex items-center gap-3 flex-wrap">
              <Filter className="w-5 h-5 text-[#3F5231]" />
              <span className="text-[#3F5231] font-semibold whitespace-nowrap">
                Kategori:
              </span>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryFilter(category)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 whitespace-nowrap border-2 ${
                    selectedCategory === category
                      ? "bg-[#2A6218] text-white shadow-lg transform scale-105 border-[#2A6218]"
                      : "bg-[#F7F4ED] text-[#3F5231] hover:bg-[#65724D] hover:text-white border-[#65724D]/20 hover:border-[#65724D] hover:shadow-md"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Enhanced View Toggle */}
            <div className="flex items-center bg-[#F7F4ED] rounded-xl p-2 border-2 border-[#65724D]/20">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-3 rounded-lg transition-all duration-200 ${
                  viewMode === "grid"
                    ? "bg-[#2A6218] text-white shadow-md"
                    : "text-[#3F5231] hover:bg-[#65724D] hover:text-white"
                }`}
                title="Tampilan Grid"
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
                title="Tampilan List"
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Results Info */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <p className="text-[#65724D] font-medium">
            Menampilkan {filteredUmkms.length} dari {umkms.length} UMKM
            {selectedCategory !== "Semua" &&
              ` dalam kategori "${selectedCategory}"`}
            {searchTerm && ` dengan pencarian "${searchTerm}"`}
          </p>
          {filteredUmkms.length > 0 && (
            <div className="text-sm text-[#65724D]/60 flex items-center gap-2">
              <span>Tampilan:</span>
              <span className="font-medium capitalize">{viewMode}</span>
            </div>
          )}
        </div>
      </div>

      {/* UMKM Cards using UMKMCard Component */}
      <section className="container mx-auto px-4 pb-16">
        <div
          className={`${
            viewMode === "grid"
              ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
              : "space-y-6"
          }`}
        >
          {filteredUmkms.map((umkm, index) => (
            <UMKMCard
              key={`${umkm.nama_umkm}-${index}`}
              umkm={umkm}
              viewMode={viewMode}
              onImageClick={openImageModal}
            />
          ))}
        </div>

        {/* Enhanced Empty State */}
        {filteredUmkms.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-white rounded-3xl p-12 shadow-lg border border-[#65724D]/10 max-w-md mx-auto">
              <div className="bg-[#65724D]/10 rounded-full p-6 w-fit mx-auto mb-6">
                <Store className="w-16 h-16 text-[#65724D] mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-[#3F5231] mb-3">
                Tidak Ada UMKM Ditemukan
              </h3>
              <p className="text-[#65724D] mb-6 leading-relaxed">
                Tidak ada UMKM yang sesuai dengan kriteria pencarian Anda.
                <br />
                Silakan coba kata kunci lain atau reset filter.
              </p>
              <div className="space-y-3">
                <button
                  onClick={() => {
                    setSelectedCategory("Semua");
                    setSearchTerm("");
                    setFilteredUmkms(umkms);
                  }}
                  className="bg-gradient-to-r from-[#2A6218] to-[#3F5231] text-white px-6 py-3 rounded-2xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 w-full"
                >
                  Reset Semua Filter
                </button>
                {searchTerm && (
                  <button
                    onClick={() => {
                      setSearchTerm("");
                      filterUmkms(selectedCategory, "");
                    }}
                    className="text-[#2A6218] hover:text-[#3F5231] font-medium transition-colors duration-200"
                  >
                    Hapus pencarian "{searchTerm}"
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Enhanced Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl w-full">
            {/* Close Button */}
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110"
              title="Tutup (ESC)"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            {selectedImage.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110"
                  title="Gambar Sebelumnya (←)"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110"
                  title="Gambar Selanjutnya (→)"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Main Image */}
            <div className="relative">
              <img
                src={selectedImage[currentImageIndex]}
                alt={`Gallery ${currentImageIndex + 1}`}
                className="w-full h-auto max-h-[85vh] object-contain rounded-2xl shadow-2xl"
              />

              {/* Image Counter */}
              {selectedImage.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  {currentImageIndex + 1} / {selectedImage.length}
                </div>
              )}
            </div>

            {/* Thumbnail Navigation */}
            {selectedImage.length > 1 && (
              <div className="flex justify-center gap-2 mt-6 overflow-x-auto pb-2 max-w-full">
                <div className="flex gap-2">
                  {selectedImage.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                        index === currentImageIndex
                          ? "border-white scale-110 shadow-lg"
                          : "border-white/30 hover:border-white/60 hover:scale-105 opacity-70 hover:opacity-100"
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
              </div>
            )}

            {/* Modal Background Click to Close */}
            <div
              className="absolute inset-0 -z-10"
              onClick={closeImageModal}
            ></div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default UMKMPage;
