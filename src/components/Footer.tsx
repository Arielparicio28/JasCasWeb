const Footer = () => {
  return (
    <div className="fixed bottom-0 right-0 w-full md:right-0 md:bottom-0 xl:static p-4">
      <ul className="flex flex-row text-white list-none space-x-4 justify-end">
        <li className="transition ease-in-out delay-150 hover:bg-neutral-100 rounded-full p-1">
          <a
            href="https://www.instagram.com/jascasillustrations"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visita mi Instagram"
          >
            <img src="/instagram.png" alt="Instagram" className="w-10 h-10" />
          </a>
        </li>
        <li className="transition ease-in-out delay-150 hover:bg-neutral-100 rounded-full p-1">
          <a
            href="https://wa.me/+34638971552"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contáctame por WhatsApp"
          >
            <img src="/whatsapp.png" alt="WhatsApp" className="w-10 h-10" />
          </a>
        </li>
        <li className="transition ease-in-out delay-150 hover:bg-neutral-100 rounded-full p-1">
          <a
            href="mailto:jasmin_castrioty@hotmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Envíame un correo"
          >
            <img src="/email.png" alt="Email" className="w-10 h-10" />
          </a>
        </li>
      </ul>
      <p className="text-center text-sm text-black mt-4">
        © 2024 Jasmin Castrioty Avendaño. Todos los derechos reservados. Prohibida la reproducción sin autorización.
      </p>
    </div>
  );
};

export default Footer;
