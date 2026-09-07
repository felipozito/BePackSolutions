import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.jpeg";

const MenuItem = ({ title, link, submenu, showProducts, setShowProducts }) => {
  if (submenu) {
    return (
      <div
        onMouseEnter={() => setShowProducts(true)}
        onMouseLeave={() => setShowProducts(false)}
        className="relative"
      >
        <button className="text-gray-700 hover:text-indigo-600 transition-colors flex items-center">
          {title}
          <svg
            className="ml-2 h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        {showProducts && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-background ring-1 ring-black ring-opacity-5"
          >
            {submenu.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="block px-4 py-2 text-gray-700 hover:bg-main"
              >
                {item.title}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    );
  }
  return (
    <a
      href={link}
      className="text-gray-700 hover:text-indigo-600 transition-colors"
    >
      {title}
    </a>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showProducts, setShowProducts] = useState(false);

  const menuItems = [
    { title: "Inicio", link: "#" },
    { title: "Nosotros", link: "#" },
    {
      title: "Productos",
      submenu: [
        { title: "Bolsas Biodegradables", link: "#" },
        { title: "Caja Alimenticia", link: "#" },
        { title: "Envase Alimenticia", link: "#" },
        { title: "Recipientes", link: "#" },
      ],
    },
    { title: "Contactos", link: "#" },
  ];

  return (
    <nav className="bg-background shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <img className="h-8 w-auto" src={logo} alt="Logo" />

          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <MenuItem
                key={index}
                {...item}
                showProducts={showProducts}
                setShowProducts={setShowProducts}
              />
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-indigo-600"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden pb-4"
            >
              {menuItems.map((item, index) => (
                <div key={index} className="py-2">
                  <a
                    href={item.link}
                    className="block px-4 text-gray-700 hover:bg-indigo-50"
                  >
                    {item.title}
                  </a>
                  {item.submenu && showProducts && (
                    <div className="pl-6 mt-2 space-y-2">
                      {item.submenu.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href={subItem.link}
                          className="block px-4 py-1 text-gray-700 hover:bg-indigo-50"
                        >
                          {subItem.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
