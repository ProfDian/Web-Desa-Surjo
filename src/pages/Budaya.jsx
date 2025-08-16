import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero, { budayaSlides } from "../components/Hero";

const Budaya = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F7F4ED] to-[#E8F5E8]">
      <Header />
      <Hero
        mainTitle="Budaya"
        highlightTitle="Desa Surjo"
        staticDescription="              Desa Surjo memiliki kekayaan budaya yang unik dan beragam,
              mencerminkan perpaduan tradisi Jawa dengan pengaruh berbagai etnis
              yang pernah menetap di wilayah ini. Kebudayaan yang hidup dan
              berkembang hingga kini menjadi identitas dan kebanggaan masyarakat
              Surjo."
        slides={budayaSlides}
        primaryCTA={{ text: "Lihat Budaya", href: "" }}
        secondaryCTA={{ text: "Hubungi UMKM", href: "" }}
        announcement={{
          text: "Potensi Mendalam dari Desa Surjo",
        }}
      />

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 lg:space-y-20">
            {/* Content Block 1 - Kuntulan */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#2A6218] to-[#4A7C59] rounded-3xl opacity-20 blur-lg"></div>
                <img
                  src=""
                  alt="Tradisi Kuntulan"
                  className="relative w-full h-64 lg:h-80 object-cover rounded-2xl shadow-2xl"
                />
              </div>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#2A6218] to-[#4A7C59] rounded-xl flex items-center justify-center text-2xl">
                    🎭
                  </div>
                  <div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#3F5231]">
                      Kuntulan
                    </h2>
                    <span className="text-[#2A6218] font-semibold">
                      Tradisi Budaya Desa
                    </span>
                  </div>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit.
                </p>
              </div>
            </div>

            {/* Content Block 2 - Tongprek */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="space-y-6 lg:order-1">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#2A6218] to-[#4A7C59] rounded-xl flex items-center justify-center text-2xl">
                    🎵
                  </div>
                  <div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#3F5231]">
                      Tongprek
                    </h2>
                    <span className="text-[#2A6218] font-semibold">
                      Seni Musik Tradisional
                    </span>
                  </div>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecati cupiditate
                  non provident, similique sunt in culpa qui officia deserunt
                  mollitia animi.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Et harum quidem rerum facilis est et expedita distinctio. Nam
                  libero tempore, cum soluta nobis est eligendi optio cumque
                  nihil impedit quo minus id quod maxime placeat facere
                  possimus, omnis voluptas assumenda est, omnis dolor
                  repellendus.
                </p>
              </div>
              <div className="relative lg:order-2">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#4A7C59] to-[#2A6218] rounded-3xl opacity-20 blur-lg"></div>
                <img
                  src=""
                  alt="Seni Tongprek"
                  className="relative w-full h-64 lg:h-80 object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>

            {/* Content Block 3 - Tradisi dan Upacara */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#2A6218] to-[#4A7C59] rounded-3xl opacity-20 blur-lg"></div>
                <img
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"
                  alt="Tradisi dan Upacara"
                  className="relative w-full h-64 lg:h-80 object-cover rounded-2xl shadow-2xl"
                />
              </div>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#2A6218] to-[#4A7C59] rounded-xl flex items-center justify-center text-2xl">
                    🕯️
                  </div>
                  <div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#3F5231]">
                      Tradisi dan Upacara
                    </h2>
                    <span className="text-[#2A6218] font-semibold">
                      Ritual Sakral Masyarakat
                    </span>
                  </div>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Temporibus autem quibusdam et aut officiis debitis aut rerum
                  necessitatibus saepe eveniet ut et voluptates repudiandae sint
                  et molestiae non recusandae. Itaque earum rerum hic tenetur a
                  sapiente delectus, ut aut reiciendis voluptatibus maiores
                  alias consequatur aut perferendis doloribus asperiores
                  repellat.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit, sed quia non numquam eius
                  modi tempora incidunt ut labore et dolore magnam aliquam
                  quaerat voluptatem. Ut enim ad minima veniam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-[#2A6218] to-[#4A7C59]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Melestarikan Budaya untuk Masa Depan
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              Dengan tetap menjaga dan melestarikan warisan budaya leluhur, Desa
              Surjo berkomitmen untuk terus menumbuhkan rasa cinta dan
              kebanggaan terhadap kekayaan budaya lokal di tengah arus
              modernisasi.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Budaya;
