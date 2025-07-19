import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPenNib } from "react-icons/fa";
import "./Hero.css";

const Hero = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null); // 🆕 Track which icon is hovered
  const videoRef = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]); // Parallax effect

  const socialLinks = [
    {
      id: "github",
      icon: <FaGithub />,
      label: "GitHub",
      url: "https://github.com/srideviblogs",
    },
    {
      id: "linkedin",
      icon: <FaLinkedin />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/sridevi-v-9ba35b243/",
    },
    {
      id: "email",
      icon: <FaEnvelope />,
      label: "Email",
      url: "mailto:sridevi.velpula.official@gmail.com",
    },
    {
      id: "blog",
      icon: <FaPenNib />,
      label: "Blog",
      url: "https://srideviblogs.github.io/",
    },
  ];

  return (
    <section
      id="home"
      ref={videoRef}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden"
    >
      {/* 🔹 Video Background */}
      <motion.video
        style={{ y }}
        className="absolute right-0 top-0 h-full w-auto object-cover opacity-20 md:opacity-40 lg:opacity-60 pointer-events-none z-0 animate-fadeIn"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/image1.mp4" type="video/mp4" />
      </motion.video>

      {/* 🔹 Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10 pointer-events-none" />

      {/* 🔹 Text + Icons */}
      <div className="relative z-20 text-center px-6 max-w-3xl">
        <motion.h1
          className="text-3xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Sridevi Velpula
        </motion.h1>

        <motion.h2
          className="text-2xl text-gray-300 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          DevOps Engineer
        </motion.h2>

        {/* 🔹 Social Icons + Descriptions */}
        <motion.div
          className="flex justify-center gap-6 text-2xl relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          {socialLinks.map((item) => (
            <div
              key={item.id}
              className="relative flex flex-col items-center"
              onMouseEnter={() => setHoveredIcon(item.id)}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400"
              >
                {item.icon}
              </a>

              {/* 🔹 Label Animation */}
              <AnimatePresence>
                {hoveredIcon === item.id && (
                  <motion.span
                    className="text-sm text-gray-300 mt-1"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
