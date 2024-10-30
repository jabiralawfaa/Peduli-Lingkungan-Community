import { useEffect, useRef, useState } from "react";

const AboutUsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMottoVisible, setIsMottoVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            setIsMottoVisible(true); // Aktifkan visibilitas motto
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-dark text-white py-16 px-8" id="about">
      <div className="text-center py-20 font-sans font-bold text-4xl">Tentang Kami</div>

      <p className="mx-auto md:mx-0 text-center py-10">
        "Kami berkomitmen untuk menciptakan lingkungan hidup yang bersih, indah, tertib, aman, dan nyaman bagi seluruh masyarakat. Melalui peningkatan kualitas sumber daya alam dan manusia, upaya pelestarian lingkungan yang berkelanjutan,
        serta kerja sama yang erat dengan berbagai pihak, kami berupaya mewujudkan pengelolaan lingkungan yang holistik dan sistematis. Tujuan kami adalah memberikan kontribusi nyata dalam menjaga kelestarian alam dan meningkatkan kualitas
        hidup generasi mendatang."
      </p>

      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center text-center md:text-left space-y-8 md:space-y-0 md:space-x-12">
        {/* Visi Section */}
        <div className={`md:w-1/2 ${isVisible ? "animate-slideInLeft" : "opacity-0"}`}>
          <h2 className="text-3xl font-bold mb-4">Visi</h2>
          <p className="mx-auto md:mx-0">Terwujudnya lingkungan yang Bersih, Indah, Tertib, Aman dan Nyaman.</p>
        </div>

        {/* Misi Section */}
        <div className={`md:w-1/2 ${isVisible ? "animate-slideInRight" : "opacity-0"}`}>
          <h2 className="text-3xl font-bold mb-4">Misi</h2>
          <ul className="list-disc list-inside mx-auto md:mx-0 space-y-2">
            <li>1. Meningkatkan kualitas SDA Dan SDM</li>
            <li>2. Meningkatkan upaya pelestarian sumber daya alam, ekosistem dan keanekaragaman hayati</li>
            <li>3. Meningkatkan kerjasama dan kemitraan dengan berbagai pihak dalam perlindungan dan pengelolaan lingkungan secara sistematik dan holistik</li>
          </ul>
        </div>
      </div>

      {/* Jargon Section */}
      <div className={`text-center mt-8 ${isMottoVisible ? "animate-fadeIn" : "opacity-0"}`}>
        <p className="text-xl font-semibold">“Peduli Lingkungan Community”</p>
        <p className="text-xl font-semibold">“Come With Solution”</p>
      </div>
    </section>
  );
};

export default AboutUsSection;
