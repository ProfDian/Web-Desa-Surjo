import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Potensi = () => {
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
              Desa Surjo, yang terletak di wilayah Kecamatan Bawang, Kabupaten
              Batang, merupakan desa yang menyimpan jejak panjang sejarah
              kolonialisme dan perdagangan di Jawa Tengah. Berdasarkan catatan
              dan cerita masyarakat setempat, Surjo sejatinya adalah wilayah
              penting di masa lalu bukan sekadar desa biasa, melainkan kawasan
              yang seharusnya menjadi pusat pemerintahan kecamatan, bahkan
              distrik. Pada masa kolonial Belanda, arsip-arsip lama menunjukkan
              adanya Distrik Surjo, bukan Distrik Bawang. Bahkan hingga kini,
              data sejarah resmi mengenai Distrik Bawang hampir tidak ditemukan,
              sedangkan catatan tentang Distrik Surjo pernah ada. Hal ini
              diperkuat oleh keberadaan pasar tradisional di Surjo yang sudah
              berdiri sejak tahun 1884, menjadi pusat aktivitas ekonomi dan
              titik kumpul masyarakat kala itu. Keberadaan pasar ini menandai
              peran strategis Surjo sebagai pusat perdagangan dan pertemuan
              antar bangsa, termasuk Belanda, Tionghoa, dan penduduk lokal.
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
                  src="https://dio-living.id/wp-content/uploads/2022/05/1566911962-keragaman-.jpg"
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
                      Pusat Perdagangan dan Jejak Kolonial
                    </h2>
                    <span className="text-[#2A6218] font-semibold">
                      Desa Surjo
                    </span>
                  </div>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Pada era kolonial, Desa Surjo menjadi jalur dan tempat
                  aktivitas para saudagar, termasuk pedagang dari etnis
                  Tionghoa. Bahkan, jejak pemukiman dan pemakaman etnis Tionghoa
                  masih dapat ditemukan di kawasan desa hingga saat ini. Bukti
                  ini mempertegas peran Surjo sebagai salah satu sentra
                  perdagangan dan lintas budaya di kawasan Batang.
                </p>
                <p>
                  Selain menjadi pusat ekonomi, Surjo juga pernah menjadi saksi
                  peperangan antara pihak Belanda dan kelompok masyarakat
                  Tionghoa, sebelum kemudian pecah konflik di masa pendudukan
                  Jepang. Wilayah Pengempon, yang berdekatan dengan Surjo,
                  menjadi titik kumpul pasukan, namun medan pertempuran utamanya
                  justru terjadi di Desa Surjo. Ini menunjukkan betapa
                  strategisnya posisi Surjo secara militer dan geografis pada
                  masa itu.
                </p>
                <p>
                  Keputusan kolonial untuk memindahkan pusat kecamatan ke
                  Bawang, diyakini lebih karena letak Bawang yang berada di
                  titik tengah wilayah administratif, bukan karena faktor
                  sejarah atau kekuatan ekonomi. Namun, secara historis, Surjo
                  lebih dulu menjadi pusat distrik dan titik ekonomi di kawasan
                  ini.
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
                      Komoditas Kopi, Teh, dan Tradisi Minum
                    </span>
                  </div>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Seiring masuknya penjajah Belanda, kebiasaan minum kopi dan
                  teh mulai membudaya di kalangan penduduk Surjo. Hal ini tidak
                  terlepas dari kebiasaan para tuan tanah dan pengusaha
                  perkebunan Belanda yang memperkenalkan kopi dan teh sebagai
                  komoditas penting. Tanah di sekitar Surjo yang subur
                  dimanfaatkan untuk budidaya tanaman tersebut. Hingga kini,
                  tradisi minum kopi dan teh tetap hidup dan menjadi bagian dari
                  identitas masyarakat Surjo, bahkan berkembang menjadi salah
                  satu daya tarik wisata desa. Menurut catatan dari Sejarah Kopi
                  Indonesia (Pusat Penelitian Kopi dan Kakao Indonesia),
                  kebiasaan minum kopi di Indonesia memang berkembang pesat pada
                  abad ke-19, seiring dengan dibukanya perkebunan kopi di
                  wilayah Jawa oleh Belanda. Desa Surjo adalah bagian dari
                  sejarah besar itu di lingkup lokal Batang.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Sejarah Desa Surjo bukan hanya soal kisah lokal, tapi potret
                  kecil dari cerita besar kolonialisme, perdagangan, dan
                  kebudayaan di Indonesia. Sebagai desa dengan jejak kolonial
                  Belanda, pengaruh peranakan Tionghoa, dan titik strategis
                  dalam perekonomian kawasan, Surjo layak dikenang sebagai pusat
                  sejarah dan budaya yang hidup hingga kini.
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

export default Potensi;
