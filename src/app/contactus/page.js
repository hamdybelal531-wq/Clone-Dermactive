"use client";
import { useState } from "react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { toast } from "sonner";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const validateForm = () => {
    const { fullName, phone, email, message } = formData;

    if (fullName.trim().length < 3) {
      toast.error("Error! Cheack Your Info in Name", {
        style: {
          background: "#f87171",
          fontWeight: "bold",
        },
      });
      return false;
    }

    if (!/^[0-9]{11}$/.test(phone)) {
      toast.error("Error! Cheack Your Info in Phone", {
        style: {
          background: "#f87171",
          fontWeight: "bold",
        },
      });
      return false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Error! Cheack Your Info in Email", {
        style: {
          background: "#f87171",
          fontWeight: "bold",
        },
      });
      return false;
    }

    if (message.trim().length < 10) {
      toast.error("Error! Message Under 10 Letter! ", {
        style: {
          background: "#f87171",
          fontWeight: "bold",
        },
      });
      return false;
    }

    return true;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    toast.success("Event has been created.");
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4 mt-20">
      <div className="flex flex-col md:flex-row max-w-4xl w-full bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="w-full md:w-1/2 p-8 lg:p-12 order-2 md:order-1 flex justify-center items-center">
          <form onSubmit={handleSubmit} className="w-full max-w-sm">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-3 mb-4 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            />

            {/* phone*/}
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 mb-4 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            />

            {/* email*/}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 mb-4 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            />

            {/* text */}
            <textarea
              name="message"
              placeholder="Write Us"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full p-3 mb-6 text-gray-700 bg-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            />

            {/*  */}
            <button
              type="submit"
              className="w-auto px-6 py-3 flex items-center justify-center bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-800 transition duration-300 shadow-md"
            >
              <IoSend className="mr-2 transform rotate-45" />
              SEND
            </button>
          </form>
        </div>

        <div className="w-full md:w-1/2 p-8 lg:p-12 order-1 md:order-2 bg-white flex flex-col justify-start">
          <p className="text-gray-500 uppercase tracking-wider text-sm mb-2">
            Contact Us
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 leading-snug mb-6">
            If You Have Any <br />
            Comments Or Inquiries <br />
            Please Feel Free To <br />
            Contact Us By Using
          </h2>

          <p className="text-gray-600 mb-6 text-base">
            the following e-mail address: **info@derma-active.com** or you can
            use the following form to contact us and we will get back to you
            within 24 hours and as soon as possible
          </p>

          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 transition duration-300"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-pink-600 transition duration-300"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-black transition duration-300"
            >
              <FaTiktok size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
