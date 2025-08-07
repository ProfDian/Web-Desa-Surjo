import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Pagination, Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import PotensiCard component (assuming it's in the same directory)
import PotensiCard from "../components/PotensiCard";

const SwiperCardsPotensi = ({
  data = [],
  autoplay = false,
  navigation = false,
  pagination = true,
  grabCursor = true,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [galleryModal, setGalleryModal] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleGalleryClick = (galleryData) => {
    setGalleryModal(galleryData);
  };

  const closeGalleryModal = () => {
    setGalleryModal(null);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-12">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-slate-800 mb-4">
            Potensi Unggulan Daerah
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Jelajahi berbagai komoditas unggulan dengan kualitas terbaik
          </p>
        </div>

        {/* Swiper Container */}
        <div className="flex justify-center items-center">
          <div className="w-full max-w-md">
            <Swiper
              effect="cards"
              grabCursor={grabCursor}
              modules={[
                EffectCards,
                ...(pagination ? [Pagination] : []),
                ...(navigation ? [Navigation] : []),
                ...(autoplay ? [Autoplay] : []),
              ]}
              cardsEffect={{
                perSlideOffset: 8,
                perSlideRotate: 2,
                rotate: true,
                slideShadows: true,
              }}
              pagination={
                pagination
                  ? {
                      clickable: true,
                      dynamicBullets: true,
                      renderBullet: function (index, className) {
                        return `<span class="${className} !bg-gradient-to-r !from-blue-500 !to-purple-600 !w-3 !h-3"></span>`;
                      },
                    }
                  : false
              }
              navigation={navigation}
              autoplay={
                autoplay
                  ? {
                      delay: 4000,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: true,
                    }
                  : false
              }
              loop={data.length > 1}
              className="cards-swiper !pb-12"
              style={{
                width: "400px",
                height: "600px",
              }}
            >
              {data.map((komoditas, index) => (
                <SwiperSlide key={index} className="!rounded-3xl">
                  <PotensiCard
                    komoditas={komoditas}
                    index={index}
                    isHovered={hoveredIndex === index}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    onGalleryClick={handleGalleryClick}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Gallery Modal */}
        {galleryModal && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full max-h-[90vh] overflow-hidden rounded-3xl bg-white shadow-2xl">
              <div className="p-6 border-b border-slate-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-slate-800">
                    Galeri {galleryModal.komoditas}
                  </h3>
                  <button
                    onClick={closeGalleryModal}
                    className="w-10 h-10 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center transition-colors duration-200"
                  >
                    <svg
                      className="w-6 h-6 text-slate-600"
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
                </div>
              </div>
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {galleryModal.images?.map((image, imgIndex) => (
                    <div
                      key={imgIndex}
                      className="aspect-square bg-slate-100 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer"
                    >
                      <img
                        src={image}
                        alt={`${galleryModal.komoditas} ${imgIndex + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Custom Styles */}
      <style>{`
        .cards-swiper .swiper-pagination {
          bottom: 0 !important;
        }
        
        .cards-swiper .swiper-pagination-bullet {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6) !important;
          opacity: 0.3 !important;
          width: 12px !important;
          height: 12px !important;
          margin: 0 6px !important;
          transition: all 0.3s ease !important;
        }
        
        .cards-swiper .swiper-pagination-bullet-active {
          opacity: 1 !important;
          transform: scale(1.2) !important;
        }

        .cards-swiper .swiper-slide {
          border-radius: 24px !important;
          overflow: hidden !important;
        }
      `}</style>
    </div>
  );
};

export default SwiperCardsPotensi;
