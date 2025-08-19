import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Navigation } from "swiper/modules";
import { Coffee, Leaf, Music, Sparkles } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const AboutSurjo = () => {
  return (
    <section
      id="tentang"
      className="relative w-full z-20"
      style={{
        minHeight: "100vh",
        height: "auto",
      }}
    >
      {/* Custom CSS for parallax background - zoom safe */}
      <style jsx>{`
        .parallax-bg {
          position: absolute;
          left: 0;
          top: 0;
          width: 130%; /* Key: Extra width for parallax movement */
          height: 100%;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        .mySwiper {
          width: 100%;
          min-height: 100vh;
          height: auto;
          background: #000;
        }

        .swiper-slide {
          box-sizing: border-box;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Zoom-safe navigation and pagination */
        .mySwiper .swiper-button-next,
        .mySwiper .swiper-button-prev {
          --swiper-navigation-size: 40px;
        }

        .mySwiper .swiper-pagination-bullet {
          --swiper-pagination-bullet-size: 12px;
        }

        @media (max-width: 768px) {
          .parallax-bg {
            width: 120%; /* Reduce parallax width on mobile for better performance */
          }
        }
      `}</style>

      <div
        className="w-full relative"
        style={{
          minHeight: "100vh",
          height: "auto",
        }}
      >
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          speed={600}
          parallax={true} // ENABLED: For background movement
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
          modules={[Parallax, Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{
            320: {
              spaceBetween: 10,
            },
            640: {
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 30,
            },
          }}
        >
          {/* Parallax Background - Following Swiper.js Official Pattern */}
          <div
            slot="container-start"
            className="parallax-bg"
            style={{
              backgroundImage:
                "url(https://res.cloudinary.com/dovmzvx6b/image/upload/v1755427626/Pemandangan_odc3rp.jpg)",
            }}
            data-swiper-parallax="-23%" // Key: Background parallax movement
          >
            {/* Stable overlay - not affected by parallax */}
            <div className="absolute inset-0 bg-black/50 z-10"></div>
          </div>

          {/* Main Content Slide */}
          <SwiperSlide>
            <div className="relative z-30 w-full flex flex-col justify-center items-center px-4 py-8">
              <div className="w-full max-w-6xl mx-auto">
                {/* Title - Reduced parallax for zoom safety */}
                <div
                  className="text-center mb-8"
                  data-swiper-parallax="-200" // Reduced from -300
                >
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                    Tentang Desa Surjo
                  </h2>
                  <div className="w-32 lg:w-40 h-1 bg-gradient-to-r from-[#2A6218] to-[#4A7C59] mx-auto rounded-full"></div>
                </div>

                {/* Subtitle */}
                <div
                  className="text-center mb-8"
                  data-swiper-parallax="-150" // Reduced from -200
                >
                  <h3 className="text-xl md:text-2xl lg:text-3xl text-white/90 font-light leading-relaxed px-6">
                    Permata Tersembunyi di Lereng Pegunungan Dieng
                  </h3>
                </div>

                {/* Main Description */}
                <div
                  className="text-center mb-8 px-4"
                  data-swiper-parallax="-100" // Reduced from -100
                >
                  <div className="bg-white/15 backdrop-blur-md rounded-2xl p-8 lg:p-12 border border-white/20 max-w-5xl mx-auto">
                    <p className="text-lg md:text-xl lg:text-2xl text-white leading-relaxed font-light">
                      Desa Surjo merupakan{" "}
                      <span className="font-semibold text-[#4A7C59]">
                        permata tersembunyi
                      </span>{" "}
                      yang berada di wilayah Kecamatan Bawang, Kabupaten Batang,
                      Jawa Tengah. Terletak di lereng timur Pegunungan Dieng
                      pada ketinggian sekitar{" "}
                      <span className="font-semibold text-[#2A6218]">
                        800 meter
                      </span>{" "}
                      di atas permukaan laut, desa ini dianugerahi udara sejuk
                      yang menyegarkan, pemandangan hijau yang memukau, dan
                      lingkungan yang tenang—menjadikannya destinasi sempurna
                      untuk pengembangan desa wisata berbasis alam, budaya, dan
                      pertanian berkelanjutan.
                    </p>
                  </div>
                </div>

                {/* Features Grid - Minimal parallax */}
                <div
                  className="w-full max-w-4xl mx-auto px-4"
                  data-swiper-parallax="-50"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gradient-to-br from-[#2A6218]/25 to-[#4A7C59]/25 backdrop-blur-md rounded-xl p-6 text-center border border-white/20">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Coffee className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="font-semibold text-lg text-white mb-3">
                        Kopi Premium
                      </h4>
                      <p className="text-white/80 text-base leading-relaxed">
                        Berkualitas tinggi dari ketinggian pegunungan
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-[#2A6218]/25 to-[#4A7C59]/25 backdrop-blur-md rounded-xl p-6 text-center border border-white/20">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Leaf className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="font-semibold text-lg text-white mb-3">
                        Teh Aromatis
                      </h4>
                      <p className="text-white/80 text-base leading-relaxed">
                        Pegunungan dengan aroma yang memukau
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-[#2A6218]/25 to-[#4A7C59]/25 backdrop-blur-md rounded-xl p-6 text-center border border-white/20">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Music className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="font-semibold text-lg text-white mb-3">
                        Seni Tradisional
                      </h4>
                      <p className="text-white/80 text-base leading-relaxed">
                        Kuntulan dan tongprek yang autentik
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Second Slide - Additional Info */}
          <SwiperSlide>
            <div className="relative z-30 w-full flex flex-col justify-center items-center px-4 py-8">
              <div className="w-full max-w-6xl mx-auto">
                <div className="text-center mb-8" data-swiper-parallax="-200">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                    Kekayaan Lokal yang Menawan
                  </h2>
                  <div className="w-32 lg:w-40 h-1 bg-gradient-to-r from-[#4A7C59] to-[#2A6218] mx-auto rounded-full"></div>
                </div>

                <div
                  className="text-center max-w-4xl mx-auto px-4"
                  data-swiper-parallax="-150"
                >
                  <div className="bg-gradient-to-br from-[#2A6218]/20 via-[#3F5231]/20 to-[#4A7C59]/20 backdrop-blur-md rounded-2xl p-8 lg:p-12 border border-white/20">
                    <div className="flex items-center justify-center mb-8">
                      <div className="w-20 h-20 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                        <Sparkles className="w-10 h-10 text-white" />
                      </div>
                    </div>

                    <p className="text-lg md:text-xl lg:text-2xl text-white leading-relaxed font-light">
                      Kini, Desa Surjo mulai membuka diri sebagai{" "}
                      <span className="font-semibold text-[#4A7C59]">
                        desa wisata
                      </span>
                      , menyambut hangat para pengunjung yang ingin merasakan
                      pengalaman autentik di tengah keindahan alam dan budaya
                      pedesaan Jawa yang mempesona.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default AboutSurjo;
