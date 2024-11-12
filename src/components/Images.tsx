import { Link } from "react-router-dom";


const Images = () => {
  return (
    <div className="grid gap-2 grid-cols-3 m-3 p-5  ">

      <Link to="/image/tota.JPG">
        <img
          src="tota.JPG"
          alt="Ilustración de la artista con su hermano y tía "
          className="w-60 h-60 border-2 border-gray-600 hover:animate-zoomOut lg:w-90 lg:h-60"
        />
      </Link>

      <Link to="/image/shell.png">
      <img
        src="shell.png"
        alt="Fondo marino"
        className="w-60 h-60 border-2 border-purple-600 hover:animate-zoomOut  lg:w-90 lg:h-60"
      />
      </Link>

      <Link to="/image/sea.png">
         
      <img
        src="sea.png"
        alt="fondo marino"
        className="w-60 h-60 border-2 border-purple-600 hover:animate-zoomOut  lg:w-90 lg:h-60"
      />
      </Link>

      <Link to="/image/WhiteBird.jpg">
    
      <img
        src="WhiteBird.jpg"
        alt="pareja de gatos"
        className="w-60 h-60 border-2 border-purple-600 hover:animate-zoomOut  lg:w-90 lg:h-60"
      />
      </Link>

      <Link to="/image/piñas.jpg">
      
      <img
        src="piñas.jpg"
        alt="piñas"
        className="w-60 h-60 border-2 border-purple-600 hover:animate-zoomOut  lg:w-90 lg:h-60"
      />
      </Link>

      <Link to="/image/african_woman.jpg">
      <img
        src="african_woman.jpg"
        alt="african woman"
        className="w-60 h-60 border-2 border-purple-600 hover:animate-zoomOut  lg:w-90 lg:h-60"
      />
      </Link>

      <Link to="/image/Basic_Survival.jpg">
     
      <img
        src="Basic_Survival.jpg"
        alt="Basic Survival"
        className="w-60 h-60 border-2 border-purple-600 hover:animate-zoomOut  lg:w-90 lg:h-60"
      />
      </Link>

      <Link to="/image/Boon_page.jpg">
     
      <img
        src="Boon_page.jpg"
        alt="figura de cuento"
        className="w-60 h-60 border-2 border-purple-600 hover:animate-zoomOut  lg:w-90 lg:h-60"
      />
      </Link>

      <Link to="/image/Boon_page2.jpg">
  
      <img
        src="Boon_page2.jpg"
        alt="figura de cuento"
        className="w-60 h-60 border-2 border-purple-600 hover:animate-zoomOut  lg:w-90 lg:h-60"
      />
      </Link>

      <Link to="/image/cantante.jpg">

      <img
        src="cantante.jpg"
        alt="cantante"
        className="w-60 h-60 border-2 border-purple-600 hover:animate-zoomOut  lg:w-90 lg:h-60"
      />
      </Link>


      <Link to="/image/cantante_1.jpg">

<img
  src="cantante_1.jpg"
  alt="cantante"
  className="w-60 h-60 border-2 border-purple-600 hover:animate-zoomOut  lg:w-90 lg:h-60"
/>
</Link>



<Link to="/image/cantante_2.jpg">

<img
  src="cantante_2.jpg"
  alt="cantante"
  className="w-60 h-60 border-2 border-purple-600 hover:animate-zoomOut lg:w-90 lg:h-60"
/>
</Link>



<Link to="/image/card.jpg">

<img
  src="card.jpg"
  alt="card"
  className="w-60 h-60 border-2 border-purple-600 hover:animate-zoomOut  lg:w-90 lg:h-60"
/>
</Link>











































































    </div>

  );
};

export default Images;
 


