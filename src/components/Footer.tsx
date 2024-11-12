const Footer = () => {
  return (
    <div className="fixed bottom-0 right-0 w-full md:right-0 md:bottom-0 xl:static p-4">
      <ul className="flex flex-row text-white list-none space-x-4 justify-end">
        <li className="transition ease-in-out delay-150 hover:bg-neutral-100">
          <a href="https://www.instagram.com/jascasillustrations" target="_blank" rel="noopener noreferrer">
            <img src="/instagram.png" alt="icono_instagram" className='w-10 h-10'/>
          </a>
        </li>
        <li className="transition ease-in-out delay-150 hover:bg-neutral-100">
          <a href="https://wa.me/+34638971552" target="_blank" rel="noopener noreferrer">
            <img src="/whatsapp.png" alt="icono_whatsapp" className='w-10 h-10'/>
          </a>
        </li>
        <li className="transition ease-in-out delay-150 hover:bg-neutral-100">
          <a href="mailto:jasmin_castrioty@hotmail.com " target="_blank" rel="noopener noreferrer">
            <img src="/email.png" alt="icono_email" className='w-10 h-10'/>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
