// src/components/ContactForm.jsx

const ContactForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;
    const phoneNumber = "6281252670529"; // Ganti dengan nomor WhatsApp yang dituju

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=` + `Name: ${encodeURIComponent(name)}%0A` + `Email: ${encodeURIComponent(email)}%0A` + `Message: ${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="flex justify-center items-center min-h-screen bg-lightblue text-dark py-20" id="contact">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-primary mb-6">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-secondary mb-2">
              Name
            </label>
            <input type="text" id="name" name="name" className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-primary" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-secondary mb-2">
              Email
            </label>
            <input type="email" id="email" name="email" className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-primary" required />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-secondary mb-2">
              Message
            </label>
            <textarea id="message" name="message" rows="4" className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-primary" required></textarea>
          </div>
          <button type="submit" className="w-full bg-primary text-white p-3 rounded hover:bg-dark transition duration-300">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
