const About = () => {
    /*
   bg-[url('/fondo_pantalla.jpg')] bg-cover bg-center bg-no-repeat*/
    return (
      <div className="flex flex-col lg:flex-row items-center lg:items-start p-3 lg:p-5 space-y-5 lg:space-y-0 lg:space-x-5">
        {/* Imagen */}
        <img
          src="artista_3.jpg"
          alt="Ilustración de la artista con su hermano y tía"
          className="w-full sm:w-3/4 lg:w-1/3 h-auto"
        />
  
        {/* Contenedor de Texto */}
        <div className="lg:w-2/3  ">
          <h1 className="text-3xl sm:text-3xl font-bold mb-4 text-center">
            About Me
          </h1>
          <p className="text-xl sm:text-lg leading-relaxed text-justify mb-4">
            Hello, my name is Jasmin Castrioty, and I am an Italo-Argentinian illustrator based in Barcelona, Spain.
            When living and studying in London, United Kingdom, I obtained a BA in Animation Production in 2013 from
            Ravensbourne College, followed by an MA in Illustration in 2014.
            <br />
            <br />
            Throughout my education, I have always been interested in the visual side of storytelling, communicating my
            own vision and experience through art. I was lucky to be picked to volunteer and work for several
            Non-Governmental Organisations, catering to their needs to help minorities around the world. Working on
            independent commissions and entering competitions have pushed my creativity and helped me grow as an artist.
          </p>
  
          {/* Botón con Efecto de Máquina de Escribir */}
          <a
            href="https://www.instagram.com/jascasillustrations"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 sm:px-6 py-2 sm:py-3 text-white bg-blue-400 hover:bg-blue-600 rounded-lg text-sm sm:text-lg font-semibold shadow-md transition duration-300 ease-in-out"
          >
            <span className="inline-block animate-typewriter overflow-hidden whitespace-nowrap">
              Please, feel free to contact me for any collaborations.
            </span>
            <span className="animate-blinkingCursor animate-hideCursor"></span>
          </a>
        </div>
      </div>
    );
  };
  
  export default About;
  