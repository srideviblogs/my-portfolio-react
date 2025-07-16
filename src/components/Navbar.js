import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const links = ["home", "about", "resume", "portfolio", "contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full z-20 bg-black text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">Sridevi Velpula</h1>

        <ul className="hidden md:flex gap-6 uppercase">
          {links.map(link => (
            <li key={link}>
              <a href={`#${link}`} className="hover:text-pink-400">{link}</a>
            </li>
          ))}
        </ul>

        <div className="md:hidden z-30" onClick={() => setOpen(!open)}>
          {open ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        {open && (
          <motion.ul
            className="absolute top-16 left-0 w-full bg-black flex flex-col items-center py-6 space-y-6"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {links.map(link => (
              <li key={link}>
                <a
                  href={`#${link}`}
                  onClick={() => setOpen(false)}
                  className="text-xl hover:text-pink-400"
                >
                  {link}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
