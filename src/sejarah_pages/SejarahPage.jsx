import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const headlineList = [
  {
    title: "Awal Mula Desa Surjo",
    date: "12 Juli 2025",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    link: "#",
  },
  {
    title: "Perkembangan Sosial dan Budaya",
    date: "10 Juli 2025",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    link: "#",
  },
  {
    title: "Potensi Alam dan Ekonomi",
    date: "8 Juli 2025",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
    link: "#",
  },
  {
    title: "Mr.J",
    date: "8 Juli 2025",
    image: "https://1.bp.blogspot.com/-b6opCz_-GtQ/VHlR_JeT2uI/AAAAAAAABQg/8nQ5F43xA5k/s1600/presiden_jokowi.jpg",
    link: "#",
  },
];

function HeadlineSlider() {
  const [current, setCurrent] = useState(0);
  const total = headlineList.length;
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((current + 1) % total);
    }, 3000);
    return () => clearTimeout(timer);
  }, [current, total]);

  return (
    <div className="relative mb-12">
      <div className="flex items-center justify-center">
        <div className="w-full max-w-5xl mx-auto">
          <div className="flex items-center bg-white rounded-2xl shadow-xl overflow-hidden border border-[#e5e7eb] min-h-[260px]">
            <a href={headlineList[current].link} className="block w-96 h-60 flex-shrink-0">
              <img
                src={headlineList[current].image}
                alt={headlineList[current].title}
                className="w-full h-full object-cover rounded-l-2xl"
              />
            </a>
            <div className="p-10 flex-1">
              <span className="bg-[#2A6218] text-white text-base px-5 py-2 rounded-full shadow font-semibold mb-4 inline-block">{headlineList[current].date}</span>
              <a href={headlineList[current].link} className="block text-3xl font-bold text-[#3F5231] hover:text-[#2A6218] transition mb-2 leading-snug">
                {headlineList[current].title}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-4 gap-2">
        {headlineList.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-4 h-4 rounded-full border-2 border-[#2A6218] ${current === idx ? "bg-[#2A6218]" : "bg-white"}`}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

const beritaList = [
  {
    title: "Awal Mula Desa Surjo",
    date: "12 Juli 2025",
    excerpt:
      "Desa Surjo didirikan pada awal abad ke-20 oleh para pendatang yang mencari lahan subur di wilayah pesisir. Seiring waktu, desa ini berkembang menjadi pusat pertanian dan budaya lokal.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Perkembangan Sosial dan Budaya",
    date: "10 Juli 2025",
    excerpt:
      "Masyarakat Desa Surjo dikenal dengan semangat gotong royong dan tradisi yang masih dijaga hingga kini. Berbagai acara adat dan festival rutin digelar untuk mempererat kebersamaan.",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Potensi Alam dan Ekonomi",
    date: "8 Juli 2025",
    excerpt:
      "Selain pertanian, Desa Surjo juga memiliki potensi wisata alam yang menarik. Sungai dan sawah menjadi daya tarik utama bagi wisatawan lokal maupun mancanegara.",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Mr.J",
    date: "8 Juli 2025",
    excerpt:
      "We Wok De Tok Not Anle Tok De Tok",
    image: "https://1.bp.blogspot.com/-b6opCz_-GtQ/VHlR_JeT2uI/AAAAAAAABQg/8nQ5F43xA5k/s1600/presiden_jokowi.jpg",
  }
];

const SejarahPage = () => {
  const navigate = useNavigate();
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
            Home
          </button>
          <span>/</span>
          <span>Sejarah Surjo</span>
        </nav>
      </div>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#3F5231] mb-8 text-center">Berita & Cerita Sejarah</h2>
          <HeadlineSlider />
          <div className="flex flex-col gap-6">
            {beritaList.map((berita, idx) => (
              <div
                key={idx}
                className="group flex items-stretch bg-white rounded-xl shadow-md overflow-hidden border border-[#e5e7eb] hover:border-[#2A6218] transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative w-40 flex-shrink-0 overflow-hidden rounded-l-xl">
                  <img
                    src={berita.image}
                    alt={berita.title}
                    className="w-full h-full object-cover object-center"
                    style={{ display: "block", height: '100%' }}
                  />
                  <span className="absolute top-2 left-2 bg-[#2A6218] text-white text-xs px-2 py-1 rounded shadow font-semibold">{berita.date}</span>
                </div>
                <div className="flex-1 p-4 flex flex-col justify-center">
                  <h3 className="text-lg font-bold text-[#3F5231] mb-1 group-hover:text-[#2A6218] transition-colors duration-300 leading-snug">{berita.title}</h3>
                  <p className="text-gray-700 text-sm mb-2 line-clamp-3">{berita.excerpt}</p>
                  <button
                    className="self-start bg-[#2A6218] hover:bg-[#1e4612] text-white font-semibold px-4 py-1 rounded shadow transition-all duration-300 group-hover:ring-2 group-hover:ring-[#2A6218] text-xs"
                    onClick={() => navigate(`/sejarah/${idx}`)}
                  >
                    Baca Selengkapnya
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SejarahPage;
