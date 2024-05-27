const Footer = () => {
    return (
      <div className="fixed bottom-0 right-0 w-full md:w-auto md:right-0 md:bottom-0 p-4 bg-gradient-to-r from-neutral-600 to-neutral-300">
        <ul className="flex flex-row justify-end md:flex-col text-white list-none space-x-4 md:space-x-0 md:space-y-2">
          <li>
            <a href="https://www.instagram.com" target="_blank">
              <img src="instagram.png" alt="icono_instagram" className='w-10 h-10'/>
            </a>
          </li>
          <li>
            <a href="https://www.whatsapp.com" target="_blank">
              <img src="whatsapp.png" alt="icono_whatsapp" className='w-10 h-10'/>
            </a>
          </li>
          <li>
            <a href="mailto:example@example.com" target="_blank">
              <img src="email.png" alt="icono_email" className='w-10 h-10'/>
            </a>
          </li>
        </ul>
      </div>
    );
  }
  
  export default Footer;
  