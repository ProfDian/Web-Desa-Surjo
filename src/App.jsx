import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Home from "./pages/Home";
import About from "./pages/About";
import SejarahPage from "./sejarah_pages/SejarahPage";
import SejarahDetailPage from "./sejarah_pages/SejarahDetailPage";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Landing Page sebagai halaman utama */}
          <Route path="/" element={<HomePage />} />

          {/* Halaman-halaman lainnya */}
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />

          {/* Route untuk section-section spesifik */}
          <Route path="/sejarah" element={<SejarahPage />} />
          <Route path="/sejarah/:id" element={<SejarahDetailPage />} />
          <Route
            path="/potensi"
            element={<div>Halaman Potensi Desa (Coming Soon)</div>}
          />
          <Route
            path="/budaya"
            element={<div>Halaman Budaya (Coming Soon)</div>}
          />
          <Route path="/umkm" element={<div>Halaman UMKM (Coming Soon)</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
