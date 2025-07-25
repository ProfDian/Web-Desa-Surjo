import { Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "Beranda", href: "#" },
    { label: "Tentang Desa", href: "#" },
    { label: "Berita", href: "#" },
    { label: "Layanan", href: "#" },
  ];

  const contactItems = [
    {
      icon: MapPin,
      title: "Alamat",
      content:
        "Jalan Bawang-Limpung Km. 03 Kauman, Desa Surjo Kec. Bawang Kab. Batang 51274",
      link: "https://maps.app.goo.gl/KZ7ygQGg5Scu79b4Y",
    },
    {
      icon: Phone,
      title: "Telepon",
      content: "0823-22 132 977",
    },
    {
      icon: Mail,
      title: "Email",
      content: "pemdesdesasurjo@gmail.com",
    },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-[#2A3B1F] via-[#3F5231] to-[#4A5E36] text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M30%2030c0%2016.569%2013.431%2030%2030%2030v-30H30z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"></div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#2A6218] to-transparent rounded-full blur-3xl opacity-30 -translate-x-16 -translate-y-16"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-[#65724D] to-transparent rounded-full blur-3xl opacity-20 translate-x-20 translate-y-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-6">
              <div className="relative flex-shrink-0">
                <div className="w-14 h-14 bg-gradient-to-br from-[#2A6218] to-[#4A7C59] rounded-2xl flex items-center justify-center shadow-xl">
                  <span className="text-white font-bold text-lg">DS</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#7FB069] rounded-full animate-pulse"></div>
              </div>
              <h3 className="ml-4 text-2xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                Desa Surjo
              </h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Desa yang kaya akan budaya, tradisi, dan potensi alam yang
              memukau.
            </p>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/pemerintahdesasurjo/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Desa Surjo"
                className="group relative w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-110"
              >
                <Instagram className="w-6 h-6 text-white transition-colors" />
              </a>
              <a
                href="https://youtube.com/@desasurjo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube Desa Surjo"
                className="group relative w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-red-500 hover:to-red-600 transition-all duration-300 transform hover:scale-110"
              >
                <Youtube className="w-6 h-6 text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 relative">
              <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                Tautan Cepat
              </span>
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-[#2A6218] to-[#7FB069] rounded-full"></div>
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="group flex items-center text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2"
                  >
                    <div className="w-2 h-2 bg-[#7FB069] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-6 relative">
              <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                Kontak
              </span>
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-[#2A6218] to-[#7FB069] rounded-full"></div>
            </h4>
            <div className="space-y-4">
              {contactItems.map((item, index) => (
                <div
                  key={index}
                  className="group flex items-start text-gray-300 hover:text-white transition-colors duration-300"
                >
                  <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center mr-3 mt-0.5 group-hover:bg-[#2A6218] transition-all duration-300 flex-shrink-0">
                    <item.icon className="w-5 h-5" strokeWidth={2} />
                  </div>
                  <div>
                    <p className="font-medium">{item.title}</p>
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm hover:underline"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-sm">{item.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            {/* Embedded Google Map */}
            <div className="mt-8">
              <iframe
                className="w-full h-64 rounded-xl shadow-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.123!2d109.89917!3d-7.09722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMDUnNTAnUyAxMDniNTMnNTcnRQ!5e0!3m2!1sen!2sid!4v1721999999999"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Balai Desa Surjo"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="relative mt-16 pt-8">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#65724D] to-transparent"></div>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm">
            <p className="text-gray-300">
              © 2025 Desa Surjo. Semua hak dilindungi undang-undang.
            </p>
            <div className="text-gray-400">Dibuat Untuk Masyarakat</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
