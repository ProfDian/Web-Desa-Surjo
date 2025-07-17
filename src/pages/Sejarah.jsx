import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Sejarah = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F7F4ED] to-[#E8F5E8]">
      <Header />

      {/* Breadcrumb - Added proper spacing from header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-6">
        <nav className="text-sm text-[#3F5231] font-medium flex items-center space-x-2">
          <button
            onClick={() => navigate("/")}
            className="hover:underline hover:text-[#2A6218] focus:outline-none bg-transparent border-none p-0 m-0 text-inherit cursor-pointer transition-colors"
            style={{ background: "none" }}
          >
            Home
          </button>
          <span>/</span>
          <span>Sejarah Surjo</span>
        </nav>
      </div>

      {/* Hero Section - Reduced top padding since breadcrumb now has proper spacing */}
      <section className="relative py-8 lg:py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-[#2A6218] rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-20 w-48 h-48 bg-[#4A7C59] rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block relative mb-8">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#3F5231] mb-6 tracking-tight">
                Sejarah Desa Surjo
              </h1>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-full h-3 bg-gradient-to-r from-transparent via-[#2A6218] to-transparent opacity-20 blur-sm"></div>
            </div>

            <div className="relative flex justify-center items-center mb-12">
              <div className="w-20 h-0.5 bg-gradient-to-r from-transparent to-[#2A6218]"></div>
              <div className="w-8 h-8 bg-gradient-to-br from-[#2A6218] to-[#4A7C59] rounded-full mx-4 shadow-lg flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <div className="w-20 h-0.5 bg-gradient-to-l from-transparent to-[#4A7C59]"></div>
            </div>

            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
              Perjalanan panjang sebuah desa yang tumbuh dari masa ke masa,
              mengukir cerita tentang kehidupan, budaya, dan perkembangan
              masyarakat di lereng Pegunungan Dieng.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 lg:space-y-20">
            {/* Content Block 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#2A6218] to-[#4A7C59] rounded-3xl opacity-20 blur-lg"></div>
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
                  alt="Sejarah Awal Desa Surjo"
                  className="relative w-full h-64 lg:h-80 object-cover rounded-2xl shadow-2xl"
                />
              </div>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#2A6218] to-[#4A7C59] rounded-xl flex items-center justify-center text-2xl">
                    🏛️
                  </div>
                  <div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#3F5231]">
                      Awal Mula
                    </h2>
                    <span className="text-[#2A6218] font-semibold">
                      Abad ke-19
                    </span>
                  </div>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
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
                  beatae vitae dicta sunt explicabo.
                </p>
              </div>
            </div>

            {/* Content Block 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="space-y-6 lg:order-1">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#2A6218] to-[#4A7C59] rounded-xl flex items-center justify-center text-2xl">
                    🎭
                  </div>
                  <div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#3F5231]">
                      Budaya dan Tradisi
                    </h2>
                    <span className="text-[#2A6218] font-semibold">
                      Abad ke-20
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
                  possimus, omnis voluptas assumenda est.
                </p>
              </div>
              <div className="relative lg:order-2">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#4A7C59] to-[#2A6218] rounded-3xl opacity-20 blur-lg"></div>
                <img
                  src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80"
                  alt="Budaya dan Tradisi"
                  className="relative w-full h-64 lg:h-80 object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>

            {/* Content Block 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#2A6218] to-[#4A7C59] rounded-3xl opacity-20 blur-lg"></div>
                <img
                  src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80"
                  alt="Era Kemerdekaan"
                  className="relative w-full h-64 lg:h-80 object-cover rounded-2xl shadow-2xl"
                />
              </div>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#2A6218] to-[#4A7C59] rounded-xl flex items-center justify-center text-2xl">
                    🏗️
                  </div>
                  <div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#3F5231]">
                      Era Pembangunan
                    </h2>
                    <span className="text-[#2A6218] font-semibold">
                      1945 - 1990
                    </span>
                  </div>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Itaque earum rerum hic tenetur a sapiente delectus, ut aut
                  reiciendis voluptatibus maiores alias consequatur aut
                  perferendis doloribus asperiores repellat. Sed ut perspiciatis
                  unde omnis iste natus error sit voluptatem accusantium
                  doloremque laudantium.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                  qui dolorem ipsum quia dolor sit amet.
                </p>
              </div>
            </div>

            {/* Content Block 4 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="space-y-6 lg:order-1">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#2A6218] to-[#4A7C59] rounded-xl flex items-center justify-center text-2xl">
                    🌟
                  </div>
                  <div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#3F5231]">
                      Masa Kini
                    </h2>
                    <span className="text-[#2A6218] font-semibold">
                      1990 - Sekarang
                    </span>
                  </div>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Ut enim ad minima veniam, quis nostrum exercitationem ullam
                  corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                  consequatur? Quis autem vel eum iure reprehenderit qui in ea
                  voluptate velit esse quam nihil molestiae consequatur.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I will give
                  you a complete account of the system, and expound the actual
                  teachings of the great explorer of the truth.
                </p>
              </div>
              <div className="relative lg:order-2">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#4A7C59] to-[#2A6218] rounded-3xl opacity-20 blur-lg"></div>
                <img
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80"
                  alt="Masa Kini"
                  className="relative w-full h-64 lg:h-80 object-cover rounded-2xl shadow-2xl"
                />
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
              Melangkah Menuju Masa Depan
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              Dengan semangat gotong royong dan kearifan lokal yang telah teruji
              waktu, Desa Surjo terus melangkah maju membangun masa depan yang
              lebih baik untuk generasi mendatang.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sejarah;
