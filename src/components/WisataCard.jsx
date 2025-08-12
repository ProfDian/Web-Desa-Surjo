import React from "react";

const WisataCard = ({ wisata, viewMode, onImageClick }) => {
  return (
    <div
      className={
        viewMode === "grid"
          ? "bg-white rounded-2xl shadow-lg p-6 flex flex-col h-full hover:scale-105 transition-transform duration-200"
          : "bg-white rounded-2xl shadow-lg p-6 flex flex-row gap-6 items-center hover:scale-[1.01] transition-transform duration-200"
      }
    >
      <div className="flex-shrink-0 w-full md:w-48 h-40 md:h-32 overflow-hidden rounded-xl mb-4 md:mb-0 cursor-pointer" onClick={() => onImageClick(wisata.gallery, 0)}>
        <img
          src={wisata.gallery[0]}
          alt={wisata.nama_wisata}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-bold text-[#2A6218] mb-2">{wisata.nama_wisata}</h3>
        <p className="text-[#3F5231] mb-2">{wisata.pengantar_singkat}</p>
        <div className="text-sm text-[#65724D] mb-2">Kategori: {wisata.kategori}</div>
        <div className="text-xs text-[#65724D]">Lokasi: {wisata.lokasi}</div>
        <a
          href={wisata.link_maps}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 text-[#2A6218] hover:underline text-sm"
        >
          Lihat di Google Maps
        </a>
      </div>
    </div>
  );
};

export default WisataCard;
