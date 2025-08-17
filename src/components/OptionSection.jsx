import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const OptionsSection = () => {
  const navigate = useNavigate();
  const [visibleCards, setVisibleCards] = useState(new Set());
  const sectionRef = useRef(null);

  // Handler function untuk navigasi
  const handleNavigation = (path) => {
    navigate(path);
  };

  // Data cards yang sudah ada
  const options = [
    {
      id: 1,
      title: "Sejarah",
      description:
        "Pelajari perjalanan panjang dan sejarah terbentuknya Desa Surjo dari masa ke masa.",
      image:
        "https://i.pinimg.com/736x/c6/75/52/c6755269c6ad9ac1f6fd76ed74ec4b6c.jpg",
      gradient: "from-[#65724D] to-[#3F5231]",
      path: "/sejarah",
      linkText: "Baca Selengkapnya",
    },
    {
      id: 2,
      title: "Potensi Desa",
      description:
        "Temukan berbagai potensi unggulan yang dimiliki Desa Surjo di berbagai sektor.",
      image: "/Desa Surjo.jpg",
      gradient: "from-[#2A6218] to-[#65724D]",
      path: "/potensi",
      linkText: "Jelajahi Potensi",
    },
    {
      id: 3,
      title: "Budaya",
      description:
        "Mengenal tradisi, adat istiadat, dan kearifan lokal yang masih dilestarikan.",
      image:
        "https://i.pinimg.com/736x/ee/08/ca/ee08ca9809d8f76bb42503428c0b7a5a.jpg",
      gradient: "from-[#3F5231] to-[#2A6218]",
      path: "/budaya",
      linkText: "Pelajari Budaya",
    },
    {
      id: 4,
      title: "UMKM",
      description:
        "Dukung usaha mikro, kecil, dan menengah yang berkembang di desa kami.",
      image:
        "https://cdn.rri.co.id/berita/Jakarta/o/1729854463470-d0bd99163261318d5675e320af42c52d/n07c8yns8hqgivp.jpeg",
      gradient: "from-[#65724D] to-[#2A6218]",
      path: "/umkm",
      linkText: "Lihat UMKM",
    },
    {
      id: 5,
      title: "Objek Wisata",
      description: "Objek wisata yang akan ada di Desa Surjo",
      image:
        "https://res.cloudinary.com/dovmzvx6b/image/upload/v1755341718/tugu_mfvzla.webp",
      gradient: "from-[#65724D] to-[#2A6218]",
      path: "/wisata",
      linkText: "Lihat Wisata",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = parseInt(entry.target.dataset.cardId);
            setVisibleCards((prev) => new Set([...prev, cardId]));
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    const cards = sectionRef.current?.querySelectorAll("[data-card-id]");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="mb-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#3F5231] mb-4">
          Jelajahi Desa Surjo
        </h2>
        <div className="w-24 h-1 bg-[#2A6218] mx-auto mb-6"></div>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Temukan berbagai aspek menarik dari Desa Surjo melalui pilihan-pilihan
          berikut
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
        {options.map((option, index) => {
          const isVisible = visibleCards.has(option.id);

          return (
            <div
              key={option.id}
              data-card-id={option.id}
              className={`group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-500 cursor-pointer transform h-full flex flex-col ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              } hover:-translate-y-2 hover:scale-[1.02]`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => handleNavigation(option.path)}
            >
              {/* Image Container */}
              <div
                className={`h-48 bg-gradient-to-br ${option.gradient} flex items-center justify-center relative overflow-hidden`}
              >
                <img
                  src={option.image}
                  loading="lazy"
                  alt={option.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                />

                {/* Overlay effect */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>

                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>

              {/* Content */}
              <div className="p-6 relative flex-1 flex flex-col">
                <h3 className="text-xl font-semibold text-[#3F5231] mb-2 group-hover:text-[#2A6218] transition-colors duration-300">
                  {option.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-1">
                  {option.description}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-[#2A6218] hover:text-[#1e4612] font-medium group-hover:underline transition-all duration-300">
                    {option.linkText} →
                  </span>

                  {/* Animated dot */}
                  <div className="w-2 h-2 bg-[#2A6218] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:animate-pulse"></div>
                </div>

                {/* Bottom border animation */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#2A6218] to-[#65724D] group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OptionsSection;
