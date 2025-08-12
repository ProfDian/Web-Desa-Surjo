import { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    image:
      "https://cdn.pixabay.com/photo/2017/09/04/18/39/coffee-2714970_1280.jpg",
    title: "Keindahan Alam Desa Surjo",
    description:
      "Pemandangan yang memukau dengan hamparan hijau yang menenangkan",
  },
  {
    id: 2,
    image: "pexels-pixabay-68507.jpg",
    title: "Tradisi dan Budaya",
    description: "Warisan leluhur yang terus dilestarikan dengan penuh cinta",
  },
  {
    id: 3,
    image: "pexels-pixabay-158063.jpg",
    title: "Potensi Wisata",
    description: "Destinasi wisata yang menawan dengan kearifan lokal",
  },
  {
    id: 4,
    image: "teafarm.jpg",
    title: "Masyarakat Bersatu",
    description: "Komunitas yang solid dan penuh semangat gotong royong",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 9000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Background Image */}
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Fallback gradient if image fails to load */}
              <div
                className={`w-full h-full bg-gradient-to-br ${
                  index === 0
                    ? "from-[#4A5D3A] via-[#65724D] to-[#3F5231]"
                    : index === 1
                    ? "from-[#2A6218] via-[#3F5231] to-[#65724D]"
                    : index === 2
                    ? "from-[#65724D] via-[#4A5D3A] to-[#2A6218]"
                    : "from-[#3F5231] via-[#2A6218] to-[#4A5D3A]"
                } mix-blend-overlay opacity-60`}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-full shadow-lg transition-all z-10"
      ></button>
      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-full shadow-lg transition-all z-10"
      ></button>

      {/* Centered Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="text-center max-w-6xl mx-auto">
          {/* Announcement banner */}
          <div className="mb-8">
            <div className="inline-block rounded-full px-4 py-2 text-sm text-white/90 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all">
              Selamat datang di website resmi Desa Wisata Surjo.{" "}
              <a
                href="#tentang"
                className="font-semibold text-white underline hover:text-white/80"
              >
                Pelajari lebih lanjut <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Selamat Datang di{" "}
            <span className="text-[#90EE90] drop-shadow-lg">
              Desa Wisata Surjo
            </span>
          </h1>

          {/* Dynamic description based on current slide */}
          <p className="text-xl sm:text-2xl text-white/90 max-w-4xl mx-auto mb-4 leading-relaxed">
            {slides[currentSlide].description}
          </p>

          {/* Static description */}
          <p className="text-lg text-white/80 max-w-4xl mx-auto mb-12 leading-relaxed">
            Desa yang kaya akan budaya, tradisi, dan potensi alam yang memukau.
            Bergabunglah dengan kami untuk mengenal lebih dekat kehidupan
            masyarakat Desa Surjo.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="/potensi"
              className="bg-[#2A6218] hover:bg-[#1e4612] text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              Jelajahi Potensi Desa
            </a>
            <a
              href="#tentang"
              className="text-white hover:text-[#90EE90] text-lg font-semibold border-b-2 border-transparent hover:border-[#90EE90] transition-all"
            >
              Pelajari Lebih Lanjut <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full transition-all ${
              index === currentSlide
                ? "bg-white shadow-lg"
                : "bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* Slide title indicator */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10">
        <h3 className="text-white text-lg font-semibold text-center">
          {slides[currentSlide].title}
        </h3>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 text-white/70 text-sm">
        <div className="flex items-center space-x-2">
          <span>Scroll</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full relative">
            <div className="w-1 h-2 bg-white/60 rounded-full absolute left-1/2 top-2 transform -translate-x-1/2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
