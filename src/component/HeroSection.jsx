import { useEffect, useState } from "react";
import logo from "../assets/img/Gambar_WhatsApp_2024-10-26_pukul_19.44.42_f6d4720d-removebg-preview.png"; // Ganti dengan path logo kamu
import img1 from "../assets/album/1.jpg";
import img2 from "../assets/album/2.jpg";
import img3 from "../assets/album/3.jpg";
import img4 from "../assets/album/4.jpg";
import img5 from "../assets/album/5.jpg";
import img6 from "../assets/album/6.jpg";
import img7 from "../assets/album/7.jpg";
import img8 from "../assets/album/8.jpg";
import img9 from "../assets/album/9.jpg";
import img10 from "../assets/album/10.jpg";
import img11 from "../assets/album/11.jpg";
import img12 from "../assets/album/12.jpg";
import img13 from "../assets/album/13.jpg";

// Tambahkan impor gambar lainnya

const HeroSection = () => {
  const [logoVisible, setLogoVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState("");

  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    // Tambahkan gambar lainnya di sini
  ];

  useEffect(() => {
    // Pilih gambar acak dari array
    const randomImage = images[Math.floor(Math.random() * images.length)];
    setBackgroundImage(randomImage);

    // Animasi logo masuk dari kanan
    setTimeout(() => setLogoVisible(true), 500);

    // Animasi nama masuk per baris dari kiri dengan jeda
    setTimeout(() => setTextVisible(true), 1000);

    // Animasi fade in tombol
    setTimeout(() => setButtonVisible(true), 2000);
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-lightblue text-dark font-sans p-4"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      id="home"
    >
      {/* Container logo dan nama organisasi */}
      <div className="flex flex-col md:flex-row items-center mb-12">
        {/* Logo */}
        <div className={`transform transition-transform duration-1000 ${logoVisible ? "translate-x-0" : "translate-x-full"}`}>
          <img src={logo} alt="Logo" className="w-32 h-32 md:w-48 md:h-48" /> {/* Sesuaikan ukuran logo */}
        </div>

        {/* Nama Organisasi dengan stroke */}
        <div className="mt-6 md:mt-0 md:ml-16 text-4xl md:text-6xl font-bold text-center md:text-left">
          <p className={`transition-transform duration-1000 ${textVisible ? "translate-x-0" : "-translate-x-full"} delay-150`} style={{ WebkitTextStroke: "1px white" }}>
            Peduli
          </p>
          <p className={`transition-transform duration-1000 ${textVisible ? "translate-x-0" : "-translate-x-full"} delay-300`} style={{ WebkitTextStroke: "1px white" }}>
            Lingkungan
          </p>
          <p className={`transition-transform duration-1000 ${textVisible ? "translate-x-0" : "-translate-x-full"} delay-450`} style={{ WebkitTextStroke: "1px white" }}>
            Community
          </p>
        </div>
      </div>

      {/* Tombol "Ikuti Kami" */}
      <button className={`px-6 py-2 bg-primary text-white text-base md:text-lg font-semibold rounded-full mt-6 transition-opacity duration-1000 ${buttonVisible ? "opacity-100" : "opacity-0"}`}>
        {" "}
        <a href="https://www.instagram.com/pl.community24/" target="_blank">
          Follow Us
        </a>
      </button>
    </div>
  );
};

export default HeroSection;
