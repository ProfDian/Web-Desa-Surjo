import React, { useState, useEffect } from "react";
import {
  Github,
  Instagram,
  Linkedin,
  ExternalLink,
  Twitter,
  ChevronLeft,
  ChevronRight,
  Users,
  Award,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AnimatedSection from "../Animations/AnimatedSection";
import Hero, { wisataSlides } from "../components/Hero";

// Enhanced Developer Card Component
const DeveloperCard = ({ developer }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getSocialIcon = (platform) => {
    switch (platform.toLowerCase()) {
      case "github":
        return <Github size={18} />;
      case "instagram":
        return <Instagram size={18} />;
      case "linkedin":
        return <Linkedin size={18} />;
      case "twitter":
        return <Twitter size={18} />;
      default:
        return <ExternalLink size={18} />;
    }
  };

  return (
    <div
      className={`group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 transform ${
        isHovered ? "scale-[1.02] -translate-y-2" : "scale-100"
      } border border-[#3F5231]/10`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#3F5231]/5 to-[#2A6218]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-[#3F5231] to-[#2A6218] rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
      <div className="absolute bottom-4 left-4 w-8 h-8 bg-gradient-to-br from-[#2A6218] to-[#3F5231] rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>

      {/* Photo Section */}
      <div className="relative p-6 pb-4">
        <div className="relative">
          <div className="w-full h-72 sm:h-80 overflow-hidden rounded-2xl shadow-xl bg-gradient-to-br from-[#F7F4ED] to-[#3F5231]/20">
            <img
              src={
                developer.foto ||
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&crop=face"
              }
              alt={developer.nama}
              className={`w-full h-full object-cover transition-transform duration-700 ${
                isHovered ? "scale-110" : "scale-105"
              }`}
            />
            {/* Photo overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#3F5231]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#3F5231] to-[#2A6218] text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
            <span className="text-center capitalize">{developer.jobdesk}</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 pt-8 relative z-10">
        {/* Name */}
        <div className="text-center mb-4">
          <h3 className="text-2xl font-bold text-[#3F5231] mb-2 group-hover:text-[#2A6218] transition-colors duration-300">
            {developer.nama}
          </h3>
        </div>

        {/* University Logo */}
        <div className="flex justify-center mb-4">
          <div className="bg-[#F7F4ED] rounded-full p-3 shadow-md group-hover:shadow-lg transition-shadow duration-300">
            <img
              src="/Undip.png"
              alt="Logo Universitas Diponegoro"
              className="w-12 h-12 object-contain"
            />
          </div>
        </div>

        {/* Academic Info */}
        <div className="space-y-3 mb-6 bg-[#F7F4ED]/50 rounded-2xl p-4 backdrop-blur-sm">
          <div className="flex flex-col sm:flex-row sm:justify-between text-sm">
            <span className="font-medium text-[#3F5231]/70 mb-1 sm:mb-0">
              Fakultas:
            </span>
            <span className="text-[#2A6218] font-medium text-right">
              {developer.fakultas}
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between text-sm">
            <span className="font-medium text-[#3F5231]/70 mb-1 sm:mb-0">
              Program Studi:
            </span>
            <span className="text-[#2A6218] font-medium text-right">
              {developer.prodi}
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between text-sm">
            <span className="font-medium text-[#3F5231]/70 mb-1 sm:mb-0">
              Angkatan:
            </span>
            <span className="text-[#2A6218] font-medium text-right">
              {developer.angkatan}
            </span>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex space-x-3 justify-center">
          {developer.socialLinks && developer.socialLinks.length > 0 ? (
            developer.socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-11 h-11 rounded-xl bg-gradient-to-br from-[#3F5231] to-[#2A6218] hover:from-[#2A6218] hover:to-[#3F5231] flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 hover:-rotate-3 shadow-lg hover:shadow-xl ${
                  isHovered ? "animate-pulse" : ""
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {getSocialIcon(link.platform)}
              </a>
            ))
          ) : (
            <>
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#3F5231] to-[#2A6218] flex items-center justify-center text-white transition-all duration-300 shadow-lg hover:shadow-xl">
                <Twitter size={18} />
              </div>
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#3F5231] to-[#2A6218] flex items-center justify-center text-white transition-all duration-300 shadow-lg hover:shadow-xl">
                <Linkedin size={18} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

// Main Tentang Component
const Tentang = () => {
  const [developers, setDevelopers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const loadDevelopers = async () => {
      try {
        const response = await fetch("/data/Developer.json");
        const data = await response.json();
        setDevelopers(data);
        setLoading(false);
      } catch (error) {
        console.error("Error loading developers:", error);
        setLoading(false);
      }
    };

    loadDevelopers();
  }, []);

  // Responsive slides calculation
  const getSlidesPerView = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) return 3; // lg
      if (window.innerWidth >= 768) return 2; // md
      return 1; // sm
    }
    return 3;
  };

  const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView());

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(getSlidesPerView());
      setCurrentSlide(0); // Reset slide on resize
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto slide functionality
  useEffect(() => {
    if (developers.length > 0) {
      const maxSlides = Math.ceil(developers.length / slidesPerView);
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % maxSlides);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [developers, slidesPerView]);

  const nextSlide = () => {
    const maxSlides = Math.ceil(developers.length / slidesPerView);
    setCurrentSlide((prev) => (prev + 1) % maxSlides);
  };

  const prevSlide = () => {
    const maxSlides = Math.ceil(developers.length / slidesPerView);
    setCurrentSlide((prev) => (prev - 1 + maxSlides) % maxSlides);
  };

  const maxSlides = Math.ceil(developers.length / slidesPerView);

  return (
    <div className="min-h-screen bg-[#F7F4ED]">
      <Header />

      <AnimatedSection>
        <Hero
          mainTitle="Tim Pengembang"
          highlightTitle="Desa Surjo"
          staticDescription="Rencana Wisata yang akan segera hadir di Desa Surjo."
          slides={wisataSlides}
          primaryCTA={{ text: "Lihat Rencana Wisata Desa Surjo", href: "" }}
          secondaryCTA={{ text: "", href: "" }}
          announcement={{
            text: "Cerita Kita",
          }}
        />
      </AnimatedSection>

      {/* Our Team Section */}
      <AnimatedSection>
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 relative overflow-hidden">
          {/* Enhanced Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-64 sm:w-96 h-64 sm:h-96 bg-[#3F5231] rounded-full blur-3xl animate-pulse"></div>
            <div
              className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-64 sm:w-96 h-64 sm:h-96 bg-[#2A6218] rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 sm:w-48 h-32 sm:h-48 bg-[#65724D] rounded-full blur-2xl animate-pulse"
              style={{ animationDelay: "4s" }}
            ></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Enhanced Section Header */}
            <div className="text-center mb-12 sm:mb-16">
              <AnimatedSection>
                <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 shadow-lg">
                  <Users className="w-6 h-6 text-[#3F5231]" />
                  <span className="text-[#3F5231] font-semibold">
                    Tim Developer
                  </span>
                  <Award className="w-6 h-6 text-[#2A6218]" />
                </div>

                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-[#3F5231] via-[#2A6218] to-[#3F5231] bg-clip-text text-transparent">
                    Kenalan Dengan Tim
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-[#2A6218] via-[#65724D] to-[#2A6218] bg-clip-text text-transparent">
                    Developer Kami
                  </span>
                </h2>

                <div className="w-24 h-1 bg-gradient-to-r from-[#3F5231] to-[#2A6218] mx-auto mb-6 rounded-full"></div>

                <p className="text-xl sm:text-2xl text-[#2A6218] font-light italic mb-4">
                  Keahlian dari Berbagai Bidang
                </p>
                <p className="text-base sm:text-lg text-[#65724D] max-w-4xl mx-auto leading-relaxed px-4">
                  Kami adalah tim yang berdedikasi dalam pengembangan Website
                  Desa Wisata Surjo melalui program KKN dan pengabdian
                  masyarakat. Dengan keahlian dari berbagai bidang, kami
                  berkomitmen memberikan hasil terbaik untuk kemajuan desa.
                </p>
              </AnimatedSection>
            </div>

            {/* Team Carousel */}
            {loading ? (
              <div className="flex justify-center items-center py-20">
                <div className="relative">
                  <div className="animate-spin rounded-full h-16 w-16 border-4 border-[#3F5231]/20 border-t-[#3F5231]"></div>
                  <div className="absolute inset-0 animate-ping rounded-full h-16 w-16 border-4 border-[#2A6218]/20"></div>
                </div>
              </div>
            ) : (
              <div className="relative">
                {/* Navigation Buttons */}
                {developers.length > slidesPerView && (
                  <>
                    <button
                      onClick={prevSlide}
                      className="absolute left-0 sm:-left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-[#3F5231] hover:bg-[#3F5231] hover:text-white transition-all duration-300 hover:scale-110 border border-[#3F5231]/20"
                    >
                      <ChevronLeft size={20} />
                    </button>

                    <button
                      onClick={nextSlide}
                      className="absolute right-0 sm:-right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-[#3F5231] hover:bg-[#3F5231] hover:text-white transition-all duration-300 hover:scale-110 border border-[#3F5231]/20"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}

                {/* Cards Container */}
                <div className="overflow-hidden mx-4 sm:mx-8 lg:mx-12">
                  <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{
                      transform: `translateX(-${
                        currentSlide * (100 / slidesPerView)
                      }%)`,
                      width: `${(developers.length / slidesPerView) * 100}%`,
                    }}
                  >
                    {developers.map((developer, index) => (
                      <div
                        key={index}
                        className="px-2 sm:px-4"
                        style={{
                          width: `${
                            (100 / developers.length) * slidesPerView
                          }%`,
                        }}
                      >
                        <AnimatedSection>
                          <DeveloperCard developer={developer} />
                        </AnimatedSection>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enhanced Slide Indicators */}
                {developers.length > slidesPerView && (
                  <div className="flex justify-center space-x-2 mt-8 sm:mt-12">
                    {Array.from({ length: maxSlides }).map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          index === currentSlide
                            ? "bg-[#3F5231] w-8 shadow-lg"
                            : "bg-[#65724D]/30 w-2 hover:bg-[#65724D]/50"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </section>
      </AnimatedSection>

      <Footer />
    </div>
  );
};

export default Tentang;
