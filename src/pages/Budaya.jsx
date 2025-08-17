import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero, { budayaSlides } from "../components/Hero";
import AnimatedSection from "../Animations/AnimatedSection";

const GalleryModal = ({
  isOpen,
  onClose,
  images,
  currentIndex,
  setCurrentIndex,
  title,
}) => {
  if (!isOpen) return null;

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") onClose();
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
      <div className="relative max-w-4xl max-h-full">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Navigation Buttons - Only show if more than 1 image */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition-all"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition-all"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </>
        )}

        {/* Image */}
        <img
          src={images[currentIndex]}
          alt={title}
          className="max-w-full max-h-[80vh] object-contain rounded-lg"
        />

        {/* Image Counter */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full">
            {currentIndex + 1} / {images.length}
          </div>
        )}

        {/* Title */}
        <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-4 py-2 rounded-lg">
          <h3 className="font-semibold">{title}</h3>
        </div>
      </div>
    </div>
  );
};

const Budaya = () => {
  const [budayaData, setBudayaData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentTitle, setCurrentTitle] = useState("");

  // Load data from JSON
  useEffect(() => {
    const loadBudayaData = async () => {
      try {
        const response = await fetch("data/Budaya.json");
        const data = await response.json();
        setBudayaData(data);
      } catch (error) {
        console.error("Error loading budaya data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadBudayaData();
  }, []);

  const openGallery = (images, title, index = 0) => {
    setCurrentImages(images);
    setCurrentTitle(title);
    setCurrentImageIndex(index);
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeGallery = () => {
    setModalOpen(false);
    document.body.style.overflow = "unset";
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F7F4ED] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2A6218]"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F7F4ED]">
      <Header />

      <AnimatedSection animationType="fadeInUp">
        <Hero
          mainTitle="Budaya"
          highlightTitle="Desa Surjo"
          staticDescription="Desa Surjo memiliki kekayaan budaya yang unik dan beragam,
                mencerminkan perpaduan tradisi Jawa dengan pengaruh berbagai etnis
                yang pernah menetap di wilayah ini. Kebudayaan yang hidup dan
                berkembang hingga kini menjadi identitas dan kebanggaan masyarakat
                Surjo."
          slides={budayaSlides}
          primaryCTA={{ text: "Baca Budaya Desa Surjo", href: "" }}
          secondaryCTA={{ text: "", href: "" }}
          announcement={{
            text: "Budaya Turun Temurun dari Desa Surjo",
          }}
        />
      </AnimatedSection>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 lg:space-y-24">
            {budayaData.map((budaya, index) => (
              <AnimatedSection
                key={budaya.nama}
                animationType={index % 2 === 0 ? "fadeInLeft" : "fadeInRight"}
                delay={200}
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image Section */}
                  <div
                    className={`relative group ${
                      index % 2 === 1 ? "lg:order-2" : ""
                    }`}
                  >
                    <div className="absolute -inset-4 bg-gradient-to-r from-[#2A6218] to-[#4A7C59] rounded-3xl opacity-20 blur-lg group-hover:opacity-30 transition-opacity"></div>
                    <div className="relative">
                      <img
                        src={budaya.galeri[0]}
                        alt={budaya.nama}
                        className="relative w-full h-64 lg:h-80 object-cover rounded-2xl shadow-2xl cursor-pointer transition-transform duration-300 hover:scale-105"
                        onClick={() => openGallery(budaya.galeri, budaya.nama)}
                      />

                      {/* Multiple Images Indicator */}
                      {budaya.galeri.length > 1 && (
                        <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm font-medium">
                          <svg
                            className="w-4 h-4 inline-block mr-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          {budaya.galeri.length}
                        </div>
                      )}

                      {/* Hover Overlay */}
                      <div
                        className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 rounded-2xl flex items-center justify-center opacity-0 hover:opacity-100 cursor-pointer"
                        onClick={() => openGallery(budaya.galeri, budaya.nama)}
                      >
                        <div className="bg-white bg-opacity-20 rounded-full p-4">
                          <svg
                            className="w-8 h-8 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div
                    className={`space-y-6 ${
                      index % 2 === 1 ? "lg:order-1" : ""
                    }`}
                  >
                    <AnimatedSection animationType="slideInUp" delay={400}>
                      <div className="flex items-start space-x-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-[#2A6218] to-[#4A7C59] rounded-xl flex items-center justify-center text-3xl shadow-lg">
                          {getIconForBudaya(budaya.nama)}
                        </div>
                        <div className="flex-1">
                          <h2 className="text-3xl lg:text-4xl font-bold text-[#3F5231] leading-tight">
                            {budaya.nama}
                          </h2>
                          <div className="mt-2 inline-block bg-gradient-to-r from-[#2A6218] to-[#4A7C59] text-white px-4 py-1 rounded-full text-sm font-semibold">
                            Tradisi Budaya Desa
                          </div>
                        </div>
                      </div>
                    </AnimatedSection>

                    <AnimatedSection animationType="fadeInUp" delay={600}>
                      <div className="prose prose-lg max-w-none">
                        <p className="text-gray-700 text-lg leading-relaxed">
                          {budaya.pengantar}
                        </p>
                      </div>
                    </AnimatedSection>

                    {/* Action Button */}
                    <AnimatedSection animationType="scaleIn" delay={800}>
                      <button
                        onClick={() => openGallery(budaya.galeri, budaya.nama)}
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#2A6218] to-[#4A7C59] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                      >
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                        Lihat Galeri
                      </button>
                    </AnimatedSection>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <AnimatedSection animationType="fadeInUp" delay={200}>
        <section className="py-16 lg:py-24 bg-gradient-to-r from-[#2A6218] to-[#4A7C59] relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full"></div>
            <div className="absolute top-32 right-20 w-16 h-16 bg-white rounded-full"></div>
            <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 bg-white rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/20">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Melestarikan Budaya untuk Masa Depan
              </h2>
              <p className="text-xl text-white/90 leading-relaxed mb-8">
                Dengan tetap menjaga dan melestarikan warisan budaya leluhur,
                Desa Surjo berkomitmen untuk terus menumbuhkan rasa cinta dan
                kebanggaan terhadap kekayaan budaya lokal di tengah arus
                modernisasi.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white/20 px-4 py-2 rounded-full text-white font-semibold">
                  {budayaData.length} Budaya Terdaftar
                </div>
                <div className="bg-white/20 px-4 py-2 rounded-full text-white font-semibold">
                  Warisan Leluhur
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <Footer />

      {/* Gallery Modal */}
      <GalleryModal
        isOpen={modalOpen}
        onClose={closeGallery}
        images={currentImages}
        currentIndex={currentImageIndex}
        setCurrentIndex={setCurrentImageIndex}
        title={currentTitle}
      />
    </div>
  );
};

// Helper function to get icon for each budaya
const getIconForBudaya = (nama) => {
  const iconMap = {
    Kuntulan: "🎭",
    Tongprek: "🎵",
    "Kenduri Kopi": "☕",
    "Tradisi Haul": "🕯️",
    "Kebudayaan Wayangan": "🎪",
    "Tradisi Sedekah Bumi": "🌾",
    "Jaran Eblek": "🐎",
  };
  return iconMap[nama] || "🎨";
};

export default Budaya;
