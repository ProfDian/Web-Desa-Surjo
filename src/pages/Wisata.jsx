import React, { useState, useEffect } from "react";
import { Coffee } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero, { wisataSlides } from "../components/Hero";
import AnimatedSection from "../Animations/AnimatedSection";
import WisataCard from "../components/WisataCard";
import { FaInstagram } from "react-icons/fa";

const Wisata = () => {
  const [wisataData, setWisataData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  useEffect(() => {
    // Fetch data from public folder
    fetch("/data/Wisata.json")
      .then((response) => response.json())
      .then((data) => {
        setWisataData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading wisata data:", error);
        setLoading(false);
      });
  }, []);

  const getUniqueCategories = () => {
    if (!wisataData?.rencana_wisata) return ["Semua"];
    const categories = [
      "Semua",
      ...new Set(wisataData.rencana_wisata.map((item) => item.kategori)),
    ];
    return categories;
  };

  const getFilteredWisata = () => {
    if (!wisataData?.rencana_wisata) return [];
    if (selectedCategory === "Semua") return wisataData.rencana_wisata;
    return wisataData.rencana_wisata.filter(
      (item) => item.kategori === selectedCategory
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F7F4ED] flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#3F5231]"></div>
      </div>
    );
  }

  const heroProps = {
    title: "Destinasi Wisata Desa Surjo",
    subtitle:
      "Jelajahi keindahan alam dan cita rasa kuliner yang memanjakan jiwa",
    backgroundImage: "/images/hero-wisata.jpg",
  };

  return (
    <div className="min-h-screen bg-[#F7F4ED]">
      <Header />

      <AnimatedSection animationType="fadeInUp">
        <Hero
          mainTitle="Rencana Wisata"
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

      <div className="container mx-auto px-4 py-16 max-w-7xl">
        {/* Introduction Section */}
        <AnimatedSection animationType="fadeInUp" delay={200}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#3F5231] mb-6">
              Pesona Desa Surjo
            </h2>
            <div className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed space-y-4">
              {wisataData?.pengantar?.split("\n").map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph.trim()}
                </p>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Category Filter */}
        <AnimatedSection animationType="fadeInUp" delay={400}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {getUniqueCategories().map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${
                  selectedCategory === category
                    ? "bg-[#3F5231] text-white shadow-lg"
                    : "bg-white text-[#3F5231] border-2 border-[#3F5231] hover:bg-[#3F5231] hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Wisata Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {getFilteredWisata().map((wisata, index) => (
            <AnimatedSection
              key={index}
              animationType="fadeInUp"
              delay={600 + index * 200}
            >
              <WisataCard wisata={wisata} index={index} />
            </AnimatedSection>
          ))}
        </div>

        {/* Empty State */}
        {getFilteredWisata().length === 0 && (
          <AnimatedSection animationType="fadeInUp" delay={600}>
            <div className="text-center py-16">
              <Coffee className="w-24 h-24 mx-auto text-[#65724D] mb-6" />
              <h3 className="text-2xl font-bold text-[#3F5231] mb-4">
                Destinasi Wisata Sedang Dipersiapkan
              </h3>
              <p className="text-gray-600 max-w-md mx-auto">
                Kami sedang mempersiapkan informasi destinasi wisata terbaik
                untuk Anda. Nantikan update terbaru dari kami!
              </p>
            </div>
          </AnimatedSection>
        )}

        {/* Call to Action */}
        <AnimatedSection animationType="fadeInUp" delay={800}>
          <div className="text-center mt-16 bg-gradient-to-br from-[#3F5231] via-[#2A6218] to-[#1a4a0f] rounded-3xl p-8 md:p-12 text-white shadow-2xl border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-3xl"></div>

            <div className="relative z-10">
              <h3 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent">
                Siap Menjelajahi Desa Surjo?
              </h3>
              <p className="text-lg md:text-xl mb-10 opacity-90 max-w-3xl mx-auto leading-relaxed">
                Rasakan pengalaman tak terlupakan di tengah keindahan alam dan
                keramahan masyarakat Desa Surjo. Temukan pesona wisata alam yang
                memukau!
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                {/* Instagram Button */}
                <a
                  href="https://www.instagram.com/destinasi_surjo"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Instagram Desa Surjo"
                  className="group relative overflow-hidden"
                >
                  <div className="flex items-center gap-3 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                    <div className="relative">
                      <FaInstagram className="w-6 h-6 text-white transition-transform group-hover:rotate-12" />
                      <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500"></div>
                    </div>
                    <span className="text-white">Follow Instagram</span>
                  </div>

                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      <Footer />
    </div>
  );
};

export default Wisata;
