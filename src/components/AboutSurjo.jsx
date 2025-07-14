{
  /* Tentang Desa Surjo */
}
const AboutSurjo = () => (
  <section id="tentang" className="mb-20">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-[#3F5231] mb-4">
        Tentang Desa Surjo
      </h2>
      <div className="w-24 h-1 bg-[#2A6218] mx-auto mb-6"></div>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        Desa Surjo adalah desa yang terletak di wilayah yang strategis dengan
        kekayaan alam dan budaya yang luar biasa.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
        <div className="w-12 h-12 bg-[#2A6218] rounded-full flex items-center justify-center mb-4">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-[#3F5231] mb-2">
          Lokasi Strategis
        </h3>
        <p className="text-gray-600">
          Terletak di lokasi yang mudah diakses dengan pemandangan alam yang
          indah dan udara yang sejuk.
        </p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
        <div className="w-12 h-12 bg-[#2A6218] rounded-full flex items-center justify-center mb-4">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-[#3F5231] mb-2">
          Masyarakat Ramah
        </h3>
        <p className="text-gray-600">
          Penduduk desa yang ramah dan menjunjung tinggi nilai-nilai gotong
          royong serta kekeluargaan.
        </p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
        <div className="w-12 h-12 bg-[#2A6218] rounded-full flex items-center justify-center mb-4">
          <svg
            className="w-6 h-6 text-white"
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
        <h3 className="text-xl font-semibold text-[#3F5231] mb-2">
          Potensi Unggulan
        </h3>
        <p className="text-gray-600">
          Memiliki berbagai potensi unggulan dalam bidang pertanian, pariwisata,
          dan industri kreatif.
        </p>
      </div>
    </div>
  </section>
);

export default AboutSurjo;
