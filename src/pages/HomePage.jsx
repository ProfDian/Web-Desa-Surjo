import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import { Target, Eye, CheckCircle, Users } from "lucide-react";
import AboutSurjo from "../components/AboutSurjo";
import { motion } from "framer-motion";
import OptionsSection from "../components/OptionSection";
import AnimatedSection from "../Animations/AnimatedSection";

const HomePage = () => {
  return (
    <motion.div
      className="min-h-screen w-full bg-[#F7F4ED]" // REMOVED overflow-x-hidden
      initial={{ opacity: 0, y: 50, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -0, scale: 0.98 }}
      transition={{
        duration: 0.5,
        ease: [0.4, 0.0, 0.2, 1],
      }}
    >
      <Header />

      {/* Hero Section */}
      <AnimatedSection animationType="fadeInUp">
        <div className="w-full">
          <Hero />
        </div>
      </AnimatedSection>

      {/* About Desa Surjo Section - NO WRAPPER */}
      <div className="w-full relative">
        <AboutSurjo />
      </div>

      {/* Separator between About and Main Content */}
      <div className="relative w-full">
        <svg
          className="w-full h-8 sm:h-12 md:h-16 text-[#F7F4ED] rotate-180"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            fill="currentColor"
          />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-t from-[#F7F4ED] via-transparent to-transparent h-20 bottom-0"></div>
      </div>

      {/* Main Section - Visi Misi */}
      <main className="w-full py-8 sm:py-12 md:py-16 lg:py-20 bg-[#F7F4ED] overflow-x-hidden">
        <div className="w-full max-w-none sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          {/* Visi, Misi, Tujuan, Sasaran */}
          <AnimatedSection animationType="fadeInUp">
            <section className="mb-12 sm:mb-16 md:mb-20 px-2 sm:px-4">
              {/* Header */}
              <div className="text-center mb-8 sm:mb-12 md:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#3F5231] mb-4 sm:mb-6 relative">
                  Visi & Misi
                  <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-gradient-to-r from-[#2A6218] to-[#65724D] rounded-full opacity-20"></div>
                </h2>
                <div className="w-16 sm:w-20 md:w-24 lg:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-[#2A6218] to-[#65724D] mx-auto mb-3 sm:mb-4"></div>
                <p className="text-gray-600 max-w-xs sm:max-w-lg md:max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-4">
                  Komitmen kami untuk membangun Desa Surjo yang lebih baik
                </p>
              </div>

              {/* Vision & Mission Cards */}
              <AnimatedSection animationType="scaleIn" delay={200}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
                  {/* Vision Card */}
                  <div className="group relative overflow-hidden bg-gradient-to-br from-[#3F5231] via-[#4A5D37] to-[#65724D] text-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 hover:scale-105 transition-all duration-300 shadow-xl">
                    <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-white/10 rounded-full -mr-8 -mt-8 sm:-mr-10 sm:-mt-10 md:-mr-12 md:-mt-12 lg:-mr-16 lg:-mt-16"></div>
                    <div className="absolute bottom-0 left-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-white/5 rounded-full -ml-6 -mb-6 sm:-ml-7 sm:-mb-7 md:-ml-8 md:-mb-8 lg:-ml-10 lg:-mb-10"></div>

                    <div className="relative z-10">
                      <div className="flex items-center justify-center mb-3 sm:mb-4 md:mb-6">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                          <Eye className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
                        </div>
                      </div>
                      <h3 className="text-center text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 md:mb-6">
                        Visi
                      </h3>
                      <p className="text-center text-sm sm:text-base md:text-lg leading-relaxed opacity-95 px-2">
                        "Mewujudkan Desa Surjo yang mandiri, sejahtera, dan
                        berkelanjutan berdasarkan nilai-nilai kearifan lokal dan
                        inovasi modern."
                      </p>
                    </div>
                  </div>

                  {/* Mission Card */}
                  <div className="group relative overflow-hidden bg-white border-2 border-[#65724D] rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 hover:shadow-2xl transition-all duration-300 shadow-lg">
                    <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-[#2A6218]/10 to-[#65724D]/10 rounded-full -mr-8 -mt-8 sm:-mr-10 sm:-mt-10 md:-mr-12 md:-mt-12 lg:-mr-16 lg:-mt-16"></div>

                    <div className="relative z-10">
                      <div className="flex items-center justify-center mb-3 sm:mb-4 md:mb-6">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#2A6218] to-[#65724D] rounded-full flex items-center justify-center">
                          <Target className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
                        </div>
                      </div>
                      <h3 className="text-center text-xl sm:text-2xl md:text-3xl font-bold text-[#3F5231] mb-3 sm:mb-4 md:mb-6">
                        Misi
                      </h3>
                      <ul className="space-y-2 sm:space-y-3 md:space-y-4 text-gray-700">
                        {[
                          "Mengembangkan potensi sumber daya alam dan manusia",
                          "Meningkatkan kesejahteraan masyarakat melalui program pemberdayaan",
                          "Melestarikan budaya dan tradisi lokal",
                          "Menciptakan tata kelola pemerintahan yang transparan dan akuntabel",
                        ].map((item, index) => (
                          <li
                            key={index}
                            className="flex items-start group-hover:translate-x-2 transition-transform duration-300"
                          >
                            <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-gradient-to-r from-[#2A6218] to-[#65724D] rounded-full mr-2 sm:mr-3 md:mr-4 mt-0.5 sm:mt-1 flex items-center justify-center flex-shrink-0">
                              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-white rounded-full"></div>
                            </div>
                            <span className="text-xs sm:text-sm md:text-base leading-relaxed">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Goals & Targets */}
              <AnimatedSection animationType="slideInUp" delay={400}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                  {/* Goals Card */}
                  <div className="group relative overflow-hidden bg-gradient-to-br from-white to-gray-50 rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 p-4 sm:p-6 md:p-8 hover:shadow-2xl transition-all duration-300">
                    <div className="absolute top-0 right-0 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-[#2A6218]/10 to-[#65724D]/10 rounded-full -mr-7 -mt-7 sm:-mr-8 sm:-mt-8 md:-mr-10 md:-mt-10 lg:-mr-12 lg:-mt-12"></div>

                    <div className="relative z-10">
                      <div className="flex items-center justify-center mb-3 sm:mb-4 md:mb-6">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#2A6218] to-[#65724D] rounded-lg sm:rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
                          <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                        </div>
                      </div>
                      <h3 className="text-center text-lg sm:text-xl md:text-2xl font-bold text-[#3F5231] mb-3 sm:mb-4 md:mb-6">
                        Tujuan
                      </h3>
                      <ul className="space-y-1.5 sm:space-y-2 md:space-y-3 text-gray-700">
                        {[
                          "Meningkatkan taraf hidup masyarakat",
                          "Mengembangkan ekonomi kreatif dan UMKM",
                          "Melestarikan lingkungan hidup",
                          "Membangun infrastruktur yang memadai",
                        ].map((item, index) => (
                          <li
                            key={index}
                            className="flex items-center group-hover:translate-x-1 transition-transform duration-300"
                          >
                            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-gradient-to-r from-[#2A6218] to-[#65724D] rounded-full mr-2 sm:mr-2.5 md:mr-3 flex-shrink-0"></div>
                            <span className="text-xs sm:text-sm md:text-base leading-relaxed">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Targets Card */}
                  <div className="group relative overflow-hidden bg-gradient-to-br from-white to-gray-50 rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 p-4 sm:p-6 md:p-8 hover:shadow-2xl transition-all duration-300">
                    <div className="absolute top-0 right-0 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-[#2A6218]/10 to-[#65724D]/10 rounded-full -mr-7 -mt-7 sm:-mr-8 sm:-mt-8 md:-mr-10 md:-mt-10 lg:-mr-12 lg:-mt-12"></div>

                    <div className="relative z-10">
                      <div className="flex items-center justify-center mb-3 sm:mb-4 md:mb-6">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#2A6218] to-[#65724D] rounded-lg sm:rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
                          <Users className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                        </div>
                      </div>
                      <h3 className="text-center text-lg sm:text-xl md:text-2xl font-bold text-[#3F5231] mb-3 sm:mb-4 md:mb-6">
                        Sasaran
                      </h3>
                      <ul className="space-y-1.5 sm:space-y-2 md:space-y-3 text-gray-700">
                        {[
                          "Peningkatan pendapatan per kapita",
                          "Pengurangan angka kemiskinan",
                          "Peningkatan kualitas pendidikan",
                          "Peningkatan akses kesehatan",
                        ].map((item, index) => (
                          <li
                            key={index}
                            className="flex items-center group-hover:translate-x-1 transition-transform duration-300"
                          >
                            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-gradient-to-r from-[#2A6218] to-[#65724D] rounded-full mr-2 sm:mr-2.5 md:mr-3 flex-shrink-0"></div>
                            <span className="text-xs sm:text-sm md:text-base leading-relaxed">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </section>
          </AnimatedSection>

          {/* Options Section */}
          <AnimatedSection animationType="fadeInUp" delay={600}>
            <div className="w-full">
              <OptionsSection />
            </div>
          </AnimatedSection>
        </div>
      </main>

      <Footer />
    </motion.div>
  );
};

export default HomePage;
