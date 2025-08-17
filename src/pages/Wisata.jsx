import React, { useState, useEffect } from "react";
import { Coffee } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/Hero";
import AnimatedSection from "../Animations/AnimatedSection";
import WisataCard from "../components/WisataCard";

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
        <HeroSection {...heroProps} />
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
          <div className="text-center mt-16 bg-gradient-to-r from-[#3F5231] to-[#2A6218] rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Siap Menjelajahi Desa Surjo?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Rasakan pengalaman tak terlupakan di tengah keindahan alam dan
              keramahan masyarakat Desa Surjo
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#3F5231] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Hubungi Kami
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#3F5231] transition-colors">
                Lihat Paket Wisata
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>

      <Footer />
    </div>
  );
};

export default Wisata;
