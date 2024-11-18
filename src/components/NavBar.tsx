import { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md">
      {/* Botón Hamburguesa */}
      <div className="flex items-center justify-between p-4 lg:hidden">
        <button
          className="text-black focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
            />
          </svg>
        </button>
      </div>

      {/* Menú Completo */}
      <ul
        className={`${
          menuOpen ? 'block' : 'hidden'
        } lg:flex lg:items-center lg:space-x-8 text-xl list-none m-2 lg:opacity-80`}
      >
        <li className="flex items-center transition ease-in-out delay-150 hover:bg-neutral-300 p-2 rounded-lg hover:scale-110 duration-300 font-font">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/home.gif" alt="home_button" className="w-10 h-10 lg:w-16 lg:h-16" />
            <span className="text-black">Home</span>
          </Link>
        </li>
        <li className="flex items-center transition ease-in-out delay-150 hover:bg-neutral-300 p-2 rounded-lg hover:scale-110 duration-300 font-font">
          <Link to="/images" className="flex items-center space-x-2">
            <img src="/brocha.gif" alt="imagenes_button" className="w-10 h-10 lg:w-16 lg:h-16" />
            <span className="text-black">Brushwork</span>
          </Link>
        </li>
        <li className="flex items-center transition ease-in-out delay-150 hover:bg-neutral-300 p-2 rounded-lg hover:scale-110 duration-300 font-font">
          <Link to="/children" className="flex items-center space-x-2">
            <img src="/tabla.gif" alt="imagenes_button" className="w-10 h-10 lg:w-16 lg:h-16" />
            <span className="text-black">Children Illustration</span>
          </Link>
        </li>
        <li className="flex items-center transition ease-in-out delay-150 hover:bg-neutral-300 p-2 rounded-lg hover:scale-110 duration-300 font-font">
          <Link to="/about" className="flex items-center space-x-2">
            <img src="/about.gif" alt="imagenes_button" className="w-10 h-10 lg:w-16 lg:h-16" />
            <span className="text-black">About the Illustrator</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
