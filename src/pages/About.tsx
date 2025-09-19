const About = () => {
    /*
   bg-[url('/fondo_pantalla.jpg')] bg-cover bg-center bg-no-repeat*/
    return (
      <div className="flex flex-col lg:flex-row items-center lg:items-start p-3 lg:p-5 space-y-5 lg:space-y-0 lg:space-x-5">
        {/* Imagen */}
        <img
          src="artista_3.JPG"
          alt="Ilustración de la artista con su hermano y tía"
          className="w-full sm:w-3/4 lg:w-1/3 h-auto"
        />
  
        {/* Contenedor de Texto */}
        <div className="lg:w-2/3  ">
          <h1 className="text-3xl sm:text-3xl font-bold mb-4 text-center">
            About Me
          </h1>
          <p className="text-m sm:text-lg leading-relaxed text-justify mb-4">
             Jasmin is a 34-year-old Italian-Argentinian mixed media artist based
          in Barcelona. Born and raised in Rome, her upbringing was shaped by a
          family that embraced travel and cultural diversity, instilling in her
          an early appreciation for difference as a source of beauty. Her
          artistic journey began in London, where she completed a BA in 3D
          Animation at Ravensbourne College. Yet, it was during these years that
          she discovered her true calling: creating with her hands rather than
          through screens. This realization led her to pursue an MA in
          Illustration at Camberwell College of Arts, where she began
          cultivating the visual language that defines her practice today. What
          followed was a period of exploration and artistic growth. Jasmin built
          her career step by step through commissions, competitions, and an
          unrelenting passion for storytelling through art. On her travels she
          encountered Cuba, a place that profoundly moved her and inspired a
          period of intense creation. Days were filled with colour, painting,
          and immersion in the rhythms of the island. When the global pandemic
          called her back to Europe, Barcelona became her new home, offering the
          light, vibrancy, and energy that continue to nourish her work. Today,
          Jasmin paints and creates in Barcelona while also working with young
          children, guiding them to explore self-expression through art. Her
          workshops for children aged 3-6 and small groups of 6-14 foster joy,
          experimentation, and the freedom to discover creativity at an early
          age. Her artistic style is vivid and colourful, often centred on the
          figure of a woman. Through her paintings, Jasmin explores the silent
          and loud, the bold and the shy, the joyful and the fearful facets of
          womanhood. Her portraits weave together female energy, cultural
          heritage, and elements of fauna, creating pieces that speak of
          resilience, beauty, and the unseen strength of women around the world.
          Working primarily with watercolour, acrylic, and pencil, she often
          chooses recycled wood as her canvas — a material whose textures and
          imperfections echo the layered stories of the women she portrays. For
          Jasmin, art is both personal and universal. It is her way of seeing
          the world — through travels, encounters, traditions, and above all,
          through the presence of women in their societies. Each piece is a
          reflection of the complexity, power, and beauty that women embody, a
          tribute to their role in shaping culture and humanity itself.
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
  