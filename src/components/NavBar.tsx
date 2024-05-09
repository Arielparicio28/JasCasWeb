import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <nav className=' flex items-center justify-center w-full text-center bg-gradient-to-r from-violet-500 to-fuchsia-500 '>
      <ul className='flex justify-center text-xl space-x-4 list-none m-2 opacity-80'>
        <li className='hover:bg-red-300'>
          <Link to="/">🏠Home</Link>
        </li>
        <li className='hover:bg-red-300'>
          <Link to="/images">🖼️Images</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar

