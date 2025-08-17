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
      className="relative w-full min-h-screen overflow-hidden"
    >
      <div className="w-full h-screen">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
            "--swiper-navigation-size": "clamp(20px, 4vw, 44px)",
            "--swiper-pagination-bullet-size": "clamp(8px, 2vw, 15px)",
          }}
          speed={600}
          parallax={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
          modules={[Parallax, Pagination, Navigation]}
          className="w-full h-full"
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
          {/* Parallax Background */}
          <div
            slot="container-start"
            className="absolute left-0 top-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://res.cloudinary.com/dovmzvx6b/image/upload/v1755427626/Pemandangan_odc3rp.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "150%",
              transform: "translateX(-25%)",
            }}
            data-swiper-parallax="-23%"
          >
            {/* Overlay untuk membuat teks lebih readable */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* Main Content Slide */}
          <SwiperSlide>
            <div className="relative z-10 w-full h-full flex flex-col justify-center items-center py-8 sm:py-12 md:py-16">
              <div className="w-full max-w-[100vw] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                {/* Title */}
                <div
                  className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12"
                  data-swiper-parallax="-300"
                >
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white mb-3 sm:mb-4 md:mb-6 lg:mb-8 tracking-tight leading-tight">
                    Tentang Desa Surjo
                  </h2>
                  <div className="w-16 sm:w-20 md:w-24 lg:w-32 xl:w-40 h-0.5 sm:h-0.5 md:h-1 bg-gradient-to-r from-[#2A6218] to-[#4A7C59] mx-auto rounded-full"></div>
                </div>

                {/* Subtitle */}
                <div
                  className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12"
                  data-swiper-parallax="-200"
                >
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-white/90 font-light leading-relaxed px-4 sm:px-6">
                    Permata Tersembunyi di Lereng Pegunungan Dieng
                  </h3>
                </div>

                {/* Main Description */}
                <div
                  className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12"
                  data-swiper-parallax="-100"
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 border border-white/20 max-w-7xl mx-auto">
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-white leading-relaxed font-light">
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

                {/* Features Grid */}
                <div
                  className="w-full max-w-6xl mx-auto"
                  data-swiper-parallax="-50"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                    <div className="bg-gradient-to-br from-[#2A6218]/20 to-[#4A7C59]/20 backdrop-blur-sm rounded-lg md:rounded-xl p-4 sm:p-5 md:p-6 text-center border border-white/20">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 md:mb-5">
                        <Coffee className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" />
                      </div>
                      <h4 className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white mb-2 sm:mb-3">
                        Kopi Premium
                      </h4>
                      <p className="text-white/80 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
                        Berkualitas tinggi dari ketinggian pegunungan
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-[#2A6218]/20 to-[#4A7C59]/20 backdrop-blur-sm rounded-lg md:rounded-xl p-4 sm:p-5 md:p-6 text-center border border-white/20">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 md:mb-5">
                        <Leaf className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" />
                      </div>
                      <h4 className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white mb-2 sm:mb-3">
                        Teh Aromatis
                      </h4>
                      <p className="text-white/80 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
                        Pegunungan dengan aroma yang memukau
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-[#2A6218]/20 to-[#4A7C59]/20 backdrop-blur-sm rounded-lg md:rounded-xl p-4 sm:p-5 md:p-6 text-center border border-white/20 md:col-span-2 lg:col-span-1">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 md:mb-5">
                        <Music className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" />
                      </div>
                      <h4 className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white mb-2 sm:mb-3">
                        Seni Tradisional
                      </h4>
                      <p className="text-white/80 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
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
            <div className="relative z-10 w-full h-full flex flex-col justify-center items-center py-8 sm:py-12 md:py-16">
              <div className="w-full max-w-[100vw] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                <div
                  className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12"
                  data-swiper-parallax="-300"
                >
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white mb-3 sm:mb-4 md:mb-6 lg:mb-8 tracking-tight leading-tight">
                    Kekayaan Lokal yang Menawan
                  </h2>
                  <div className="w-16 sm:w-20 md:w-24 lg:w-32 xl:w-40 h-0.5 sm:h-0.5 md:h-1 bg-gradient-to-r from-[#4A7C59] to-[#2A6218] mx-auto rounded-full"></div>
                </div>

                <div
                  className="text-center max-w-5xl mx-auto"
                  data-swiper-parallax="-200"
                >
                  <div className="bg-gradient-to-br from-[#2A6218]/20 via-[#3F5231]/20 to-[#4A7C59]/20 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 border border-white/20">
                    <div className="flex items-center justify-center mb-4 sm:mb-6 md:mb-8 lg:mb-10">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 bg-white/20 rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center backdrop-blur-sm">
                        <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 text-white" />
                      </div>
                    </div>

                    <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-white leading-relaxed font-light">
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
