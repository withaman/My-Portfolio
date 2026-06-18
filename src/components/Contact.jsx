import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
    budget: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = `
🚀 New Project Inquiry

👤 Name: ${formData.name}
📧 Email: ${formData.email}
📱 Phone: ${formData.phone}
💻 Project Type: ${formData.project}
💰 Budget: ${formData.budget}

📝 Message:
${formData.message}
    `;

    const whatsappURL = `https://wa.me/9634847461?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div
      className="
      grid grid-cols-1 lg:grid-cols-2 gap-10
      mt-10 rounded-3xl p-6 md:p-10
      mb-7
      bg-white/10
      backdrop-blur-lg
      border border-white/20
      shadow-[0_8px_32px_rgba(255,255,255,0.08)]
    "
    >
      {/* Left Side */}
      <div className="flex flex-col justify-center">
        <p className="text-yellow-400 font-medium mb-3">
          Contact Me
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          Let’s Talk About Your Next Project
        </h2>

        <p className="text-white/70 mt-5 leading-7">
          Have an idea, startup, business website, or web application in mind?
          Let’s build something modern, responsive, and visually amazing together.
        </p>

        {/* Contact Info */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">

  <div className="
    flex items-center gap-3
    bg-white/5
    border border-white/10
    rounded-2xl
    px-3 py-3
    hover:bg-white/10
    transition-all duration-300
  ">
    <div className="
      bg-green-500/20
      p-2
      rounded-xl
      text-green-400
      text-lg
    ">
      <i className="ri-phone-fill"></i>
    </div>

    <div>
      <p className="text-white/40 text-xs">Phone</p>
      <p className="text-white text-sm font-medium">
        +91 96348 47461
      </p>
    </div>
  </div>

  <div className="
    flex items-center gap-3
    bg-white/5
    border border-white/10
    rounded-2xl
    px-3 py-3
    hover:bg-white/10
    transition-all duration-300
  ">
    <div className="
      bg-red-500/20
      p-2
      rounded-xl
      text-red-400
      text-lg
    ">
      <i className="ri-mail-fill"></i>
    </div>

    <div>
      <p className="text-white/40 text-xs">Email</p>
      <p className="text-white text-sm font-medium break-all">
        rawataman186@gmail.com
      </p>
    </div>
  </div>

  <div className="
    flex items-center gap-3
    bg-white/5
    border border-white/10
    rounded-2xl
    px-3 py-3
    hover:bg-white/10
    transition-all duration-300
  ">
    <div className="
      bg-blue-500/20
      p-2
      rounded-xl
      text-blue-400
      text-lg
    ">
      <i className="ri-linkedin-box-fill"></i>
    </div>

    <div>
      <p className="text-white/40 text-xs">LinkedIn</p>
      <p className="text-white text-sm font-medium">
        aman-rawat
      </p>
    </div>
  </div>

  <div className="
    flex items-center gap-3
    bg-white/5
    border border-white/10
    rounded-2xl
    px-3 py-3
    hover:bg-white/10
    transition-all duration-300
  ">
    <div className="
      bg-yellow-500/20
      p-2
      rounded-xl
      text-yellow-400
      text-lg
    ">
      <i className="ri-map-pin-2-fill"></i>
    </div>

    <div>
      <p className="text-white/40 text-xs">Location</p>
      <p className="text-white text-sm font-medium">
        Dehradun, Uttarakhand
      </p>
    </div>
  </div>

</div>

      </div>

      {/* Right Side Form */}
      <form
        onSubmit={handleSubmit}
        className="
  flex flex-col gap-4
  bg-black/20
  border border-white/10
  rounded-3xl
  p-5 md:p-6
  h-fit
"
      >
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-semibold text-white">
            Start a Project
          </h3>

          <div className="bg-green-500/20 text-green-400 p-2 rounded-xl text-xl">
            <i className="ri-whatsapp-line"></i>
          </div>
        </div>

        {/* Name + Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
            required
            className="
      bg-white/10
      border border-white/10
      rounded-xl
      px-4 py-3
      text-sm
      text-white
      placeholder:text-white/40
      outline-none
    "
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            onChange={handleChange}
            required
            className="
      bg-white/10
      border border-white/10
      rounded-xl
      px-4 py-3
      text-sm
      text-white
      placeholder:text-white/40
      outline-none
    "
          />
        </div>

        {/* Phone + Budget */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            className="
      bg-white/10
      border border-white/10
      rounded-xl
      px-4 py-3
      text-sm
      text-white
      placeholder:text-white/40
      outline-none
    "
          />

          <input
            type="text"
            name="budget"
            placeholder="Budget"
            onChange={handleChange}
            className="
      bg-white/10
      border border-white/10
      rounded-xl
      px-4 py-3
      text-sm
      text-white
      placeholder:text-white/40
      outline-none
    "
          />
        </div>

        {/* Project Type */}
        <input
          type="text"
          name="project"
          placeholder="Project Type"
          onChange={handleChange}
          className="
    bg-white/10
    border border-white/10
    rounded-xl
    px-4 py-3
    text-sm
    text-white
    placeholder:text-white/40
    outline-none
  "
        />

        {/* Message */}
        <textarea
          rows="4"
          name="message"
          placeholder="Tell me about your project..."
          onChange={handleChange}
          className="
    bg-white/10
    border border-white/10
    rounded-xl
    px-4 py-3
    text-sm
    text-white
    placeholder:text-white/40
    outline-none
    resize-none
  "
        ></textarea>

        <button
          type="submit"
          className="
    bg-white
    text-black
    font-semibold
    rounded-xl
    py-3
    hover:bg-yellow-400
    transition-all duration-300
  "
        >
          Send via WhatsApp
        </button>
      </form>
    </div>
  );
};

export default Contact;
