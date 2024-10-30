import "./App.css";
import Navbar from "./component/Navbar";
import HeroSection from "./component/HeroSection";
import AboutUsSection from "./component/AboutUsSection";
import CuratorFeed from "./component/CurratorFeed";
import ContactForm from "./component/ContactForm";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutUsSection />
      <CuratorFeed />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
