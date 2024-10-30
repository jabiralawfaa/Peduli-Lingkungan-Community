// src/components/Footer.jsx
import Whatsapp from "../assets/img/whatsapp.svg";
import Instagram from "../assets/img/instagram.svg";

const Footer = () => {
  return (
    <footer className="bg-dark text-beige py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h4 className="text-lg font-semibold">Contact Information</h4>
            <p>Karangsari, Kedaleman, Kec. Rogojampi, Kabupaten Banyuwangi, Jawa Timur 68462</p>
            <p>Email: pl.community24@gmail.com</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://wa.me/6281252670529" target="_blank" className="text-lightblue hover:text-primary">
              <img src={Whatsapp} alt="Whatsapp" className="w-16" />
            </a>
            <a href="https://www.instagram.com/pl.community24/" target="_blank" className="text-lightblue hover:text-primary">
              <img src={Instagram} alt="Whatsapp" className="w-16" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
