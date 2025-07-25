const AboutSurjo = () => (
  <section id="tentang" className="relative mb-20 px-4 overflow-hidden">
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-5">
      <svg
        className="w-full h-full"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="dots"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="10" cy="10" r="1" fill="#2A6218" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>
    </div>

    <div className="relative z-10">
      {/* Header Section */}
      <div className="text-center mb-20">
        <div className="inline-block relative mb-8">
          <h2 className="text-4xl md:text-6xl font-bold text-[#3F5231] mb-6 tracking-tight relative z-10">
            Tentang Desa Surjo
          </h2>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-full h-3 bg-gradient-to-r from-transparent via-[#2A6218] to-transparent opacity-20 blur-sm"></div>
        </div>

        <div className="relative flex justify-center items-center mb-12">
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent to-[#2A6218]"></div>
          <div className="w-8 h-8 bg-gradient-to-br from-[#2A6218] to-[#4A7C59] rounded-full mx-4 shadow-lg flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
          <div className="w-20 h-0.5 bg-gradient-to-l from-transparent to-[#4A7C59]"></div>
        </div>

        {/* Main Description Card */}
        <div className="relative max-w-5xl mx-auto mb-16">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#2A6218] to-[#4A7C59] rounded-3xl blur opacity-20"></div>
          <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
            <div className="absolute -top-4 -left-4 w-12 h-12 text-[#2A6218] opacity-30 text-8xl font-serif leading-none">
              "
            </div>
            <div className="relative z-10">
              <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-light mb-6">
                Desa Surjo merupakan{" "}
                <span className="font-semibold text-[#2A6218]">
                  permata tersembunyi
                </span>{" "}
                yang berada di wilayah Kecamatan Bawang, Kabupaten Batang, Jawa
                Tengah. Terletak di lereng timur Pegunungan Dieng pada
                ketinggian sekitar{" "}
                <span className="font-semibold text-[#4A7C59]">800 meter</span>{" "}
                di atas permukaan laut, desa ini dianugerahi udara sejuk yang
                menyegarkan, pemandangan hijau yang memukau, dan lingkungan yang
                tenang—menjadikannya destinasi sempurna untuk pengembangan desa
                wisata berbasis alam, budaya, dan pertanian berkelanjutan.
              </p>
              <div className="flex justify-center">
                <div className="w-24 h-1 bg-gradient-to-r from-[#2A6218] to-[#4A7C59] rounded-full"></div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 text-[#2A6218] opacity-30 text-8xl font-serif leading-none rotate-180">
              "
            </div>
          </div>
        </div>

        {/* Featured Highlight Card */}
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#4A7C59] to-[#2A6218] rounded-3xl blur opacity-30 animate-pulse"></div>
          <div className="relative bg-gradient-to-br from-[#2A6218] via-[#3F5231] to-[#4A7C59] rounded-3xl p-8 md:p-12 text-white shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12 blur-2xl"></div>

            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
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
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </div>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                Kekayaan Lokal yang Menawan
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Kopi Premium</h4>
                  <p className="text-white/90 text-sm">
                    Berkualitas tinggi dari ketinggian pegunungan
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Teh Aromatis</h4>
                  <p className="text-white/90 text-sm">
                    Pegunungan dengan aroma yang memukau
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-lg mb-2">
                    Seni Tradisional
                  </h4>
                  <p className="text-white/90 text-sm">
                    Kuntulan dan tongprek yang autentik
                  </p>
                </div>
              </div>

              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <p className="text-lg md:text-xl leading-relaxed opacity-95 text-center">
                  Kini, Desa Surjo mulai membuka diri sebagai{" "}
                  <span className="font-semibold">desa wisata</span>, menyambut
                  hangat para pengunjung yang ingin merasakan pengalaman
                  autentik di tengah keindahan alam dan budaya pedesaan Jawa
                  yang mempesona.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Enhanced Decorative Elements */}
    <div className="absolute -z-10 top-20 left-10 w-40 h-40 bg-gradient-to-br from-[#2A6218] to-transparent opacity-10 rounded-full blur-3xl animate-pulse"></div>
    <div
      className="absolute -z-10 bottom-20 right-10 w-60 h-60 bg-gradient-to-tl from-[#4A7C59] to-transparent opacity-10 rounded-full blur-3xl animate-pulse"
      style={{ animationDelay: "1s" }}
    ></div>
    <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#2A6218] to-[#4A7C59] opacity-5 rounded-full blur-3xl"></div>
  </section>
);

export default AboutSurjo;
