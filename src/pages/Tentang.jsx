import React, { useState, useEffect } from "react";
import {
  Github,
  Instagram,
  Linkedin,
  ExternalLink,
  Twitter,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AnimatedSection from "../Animations/AnimatedSection";
import Hero from "../components/Hero";

// Developer Card Component with new design
const DeveloperCard = ({ developer }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getSocialIcon = (platform) => {
    switch (platform.toLowerCase()) {
      case "github":
        return <Github size={16} />;
      case "instagram":
        return <Instagram size={16} />;
      case "linkedin":
        return <Linkedin size={16} />;
      case "twitter":
        return <Twitter size={16} />;
      default:
        return <ExternalLink size={16} />;
    }
  };

  return (
    <div
      className={`bg-gradient-to-br from-[#3F5231] to-[#2A6218] rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 transform group relative ${
        isHovered ? "scale-105 shadow-3xl" : "scale-100"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-white rounded-full translate-x-12 translate-y-12"></div>
      </div>

      {/* Photo Section - Vertical Rectangle */}
      <div className="relative overflow-hidden p-6 pb-0">
        <div className="w-full h-80 overflow-hidden rounded-2xl shadow-xl">
          <img
            src={
              developer.foto ||
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&crop=face"
            }
            alt={developer.nama}
            className={`w-full h-full object-cover transition-transform duration-700 ${
              isHovered ? "scale-110" : "scale-100"
            }`}
          />
        </div>
        {/* Subtle glow effect */}
        <div
          className={`absolute inset-6 rounded-2xl transition-all duration-700 ${
            isHovered ? "shadow-[0_0_30px_rgba(101,114,77,0.3)]" : ""
          }`}
        ></div>
      </div>

      {/* Content Section */}
      <div className="p-6 pt-4 text-white relative z-10 text-center">
        {/* Name */}
        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#F7F4ED] transition-colors duration-300">
          {developer.nama}
        </h3>

        {/* Job Title */}
        <p className="text-white font-medium text-base mb-4 capitalize bg-white/20 inline-block px-3 py-1 rounded-full backdrop-blur-sm">
          {developer.jobdesk}
        </p>
        {/* Job Title */}
        <img
          src={"/Undip.png"}
          alt="Logo Universitas Diponegoro"
          className="w-15 h-16 mx-auto mb-5"
        />
        {/* Academic Info - Clean text format */}
        <div className="space-y-2 mb-6 text-[#F7F4ED]/90 text-sm">
          <p className="flex justify-between">
            <span className="text-[#F7F4ED]/70">Fakultas:</span>
            <span className="text-right flex-1 ml-2">{developer.fakultas}</span>
          </p>
          <p className="flex justify-between">
            <span className="text-[#F7F4ED]/70">Program Studi:</span>
            <span className="text-right flex-1 ml-2">{developer.prodi}</span>
          </p>
          <p className="flex justify-between">
            <span className="text-[#F7F4ED]/70">Angkatan:</span>
            <span className="text-right flex-1 ml-2">{developer.angkatan}</span>
          </p>
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
                className={`w-10 h-10 rounded-xl bg-white/20 hover:bg-[#65724D] flex items-center justify-center text-white hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-6 backdrop-blur-sm ${
                  isHovered ? "animate-bounce" : ""
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {getSocialIcon(link.platform)}
              </a>
            ))
          ) : (
            // Default social icons if no socialLinks provided
            <>
              <div className="w-10 h-10 rounded-xl bg-white/20 hover:bg-[#65724D] flex items-center justify-center text-white transition-all duration-300 backdrop-blur-sm">
                <Twitter size={16} />
              </div>
              <div className="w-10 h-10 rounded-xl bg-white/20 hover:bg-[#65724D] flex items-center justify-center text-white transition-all duration-300 backdrop-blur-sm">
                <Linkedin size={16} />
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

  // Auto slide functionality
  useEffect(() => {
    if (developers.length > 0) {
      const interval = setInterval(() => {
        setCurrentSlide(
          (prev) => (prev + 1) % Math.ceil(developers.length / 3)
        );
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [developers]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(developers.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + Math.ceil(developers.length / 3)) %
        Math.ceil(developers.length / 3)
    );
  };

  const visibleDevelopers = developers.slice(
    currentSlide * 3,
    (currentSlide + 1) * 3
  );

  return (
    <div className="min-h-screen bg-[#F7F4ED]">
      <Header />

      <AnimatedSection>
        <Hero />
      </AnimatedSection>

      {/* Our Team Section */}
      <AnimatedSection>
        <section className="py-20 px-6 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-20 w-96 h-96 bg-[#3F5231] rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#2A6218] rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Section Header */}
            <div className="text-center mb-16">
              <AnimatedSection>
                <h2 className="text-6xl font-bold bg-gradient-to-r from-[#3F5231] to-[#2A6218] bg-clip-text text-transparent mb-7">
                  Kenalan Dengan Anggota Kami
                </h2>
                <p className="text-2xl text-[#2A6218] font-light italic mb-4">
                  dari setiap bidang keahlian
                </p>
                <p className="text-lg text-[#65724D] max-w-3xl mx-auto leading-relaxed">
                  Kami berdedikasi dalam pengembangan Website Desa Wisata Surjo
                  melalui program KKN dan pengabdian masyarakat, berkomitmen
                  memberikan hasil terbaik untuk kemajuan desa.
                </p>
              </AnimatedSection>
            </div>

            {/* Team Carousel */}
            {loading ? (
              <div className="flex justify-center items-center py-20">
                <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-[#3F5231]"></div>
              </div>
            ) : (
              <div className="relative">
                {/* Cards Container */}
                <div className="overflow-hidden px-16">
                  <div
                    className="flex transition-transform duration-700 ease-in-out gap-8"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {developers.map((developer, index) => (
                      <div
                        key={index}
                        className="flex-shrink-0 w-full md:w-1/3"
                      >
                        <AnimatedSection>
                          <DeveloperCard developer={developer} />
                        </AnimatedSection>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Slide Indicators */}
                {developers.length > 3 && (
                  <div className="flex justify-center space-x-3 mt-12">
                    {Array.from({
                      length: Math.ceil(developers.length / 3),
                    }).map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-12 h-1 rounded-full transition-all duration-300 ${
                          index === currentSlide
                            ? "bg-[#3F5231]"
                            : "bg-[#65724D]/30"
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
