import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../App.css";

const beritaList = [
  {
    title: "Awal Mula Desa Surjo",
    date: "12 Juli 2025",
    excerpt:
      "Desa Surjo didirikan pada awal abad ke-20 oleh para pendatang yang mencari lahan subur di wilayah pesisir. Seiring waktu, desa ini berkembang menjadi pusat pertanian dan budaya lokal.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    content:
      "Sejarah Desa Surjo bermula dari para pendatang yang mencari lahan subur di pesisir. Mereka membangun komunitas yang berkembang menjadi pusat pertanian dan budaya lokal. Tradisi dan nilai gotong royong menjadi ciri khas masyarakat Surjo hingga kini.",
  },
  {
    title: "Perkembangan Sosial dan Budaya",
    date: "10 Juli 2025",
    excerpt:
      "Masyarakat Desa Surjo dikenal dengan semangat gotong royong dan tradisi yang masih dijaga hingga kini. Berbagai acara adat dan festival rutin digelar untuk mempererat kebersamaan.",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    content:
      "Perkembangan sosial dan budaya di Desa Surjo sangat pesat. Tradisi seperti sedekah bumi, festival panen, dan pertunjukan seni lokal menjadi agenda tahunan yang mempererat hubungan antarwarga.",
  },
  {
    title: "Potensi Alam dan Ekonomi",
    date: "8 Juli 2025",
    excerpt:
      "Selain pertanian, Desa Surjo juga memiliki potensi wisata alam yang menarik. Sungai dan sawah menjadi daya tarik utama bagi wisatawan lokal maupun mancanegara.",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
    content:
      "Potensi alam Desa Surjo meliputi sungai, sawah, dan hutan kecil yang menjadi sumber ekonomi dan wisata. Produk pertanian dan kerajinan lokal juga menjadi daya tarik ekonomi desa.",
  },
  {
    title: "Mr.J",
    date: "8 Juli 2025",
    excerpt:
      "We Wok De Tok Not Anle Tok De Tok",
    image: "https://1.bp.blogspot.com/-b6opCz_-GtQ/VHlR_JeT2uI/AAAAAAAABQg/8nQ5F43xA5k/s1600/presiden_jokowi.jpg",
    content:
      "Mr.J adalah tokoh inspiratif di Desa Surjo yang dikenal dengan semangat kepemimpinan dan inovasi dalam membangun desa.",
  }
];

const SejarahDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const berita = beritaList[id];

  if (!berita) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F7F4ED]">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#3F5231] mb-4">Berita tidak ditemukan</h2>
          <button
            className="bg-[#2A6218] text-white px-4 py-2 rounded shadow hover:bg-[#1e4612]"
            onClick={() => navigate(-1)}
          >
            Kembali
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F7F4ED]">
      <header className="bg-[#3F5231] text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-[#2A6218] rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold text-xl">DS</span>
              </div>
              <h1 className="text-2xl font-bold">Sejarah Desa Surjo</h1>
            </div>
          </div>
        </div>
      </header>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <nav className="text-sm text-[#3F5231] font-medium flex items-center space-x-2">
          <button
            onClick={() => navigate(-1)}
            className="hover:underline hover:text-[#2A6218] focus:outline-none bg-transparent border-none p-0 m-0 text-inherit cursor-pointer"
            style={{ background: "none" }}
          >
            Kembali
          </button>
          <span>/</span>
          <span>Sejarah Surjo</span>
        </nav>
      </div>
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-[#e5e7eb] p-8">
            <img
              src={berita.image}
              alt={berita.title}
              className="w-full h-64 object-cover rounded-xl mb-6"
            />
            <span className="bg-[#2A6218] text-white text-base px-5 py-2 rounded-full shadow font-semibold mb-4 inline-block">{berita.date}</span>
            <h2 className="text-3xl font-bold text-[#3F5231] mb-4">{berita.title}</h2>
            <p className="text-gray-700 text-base mb-4">{berita.content}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SejarahDetailPage;
