import { Link } from "react-router-dom";

const Images = () => {
  return (
    <div className="grid gap-4 grid-cols-3 m-1">
      <Link to="/image/tota.JPG">
        <img
          src="tota.JPG"
          alt="Ilustración de la artista con su hermano y tía "
          className="w-60 h-60 border-2 border-gray-600"
        />
      </Link>

      <Link to="/image/conejo.jpg">
      <img
        src="conejo.jpg"
        alt="conejo"
        className="w-60 h-60 border-2 border-purple-600"
      />
      </Link>
      <Link to="/image/gato.jpg">
         
      <img
        src="gato.jpg"
        alt="gato ojos azules"
        className="w-60 h-60 border-2 border-purple-600"
      />
      </Link>

      <Link to="/image/gato2.jpg">
    
      <img
        src="gato2.jpg"
        alt="pareja de gatos"
        className="w-60 h-60 border-2 border-purple-600"
      />
      </Link>

      <Link to="/image/leon.jpg">
      
      <img
        src="leon.jpg"
        alt="leon"
        className="w-60 h-60 border-2 border-purple-600"
      />
      </Link>

      <Link to="/image/mono.jpg">
      <img
        src="mono.jpg"
        alt="mono"
        className="w-60 h-60 border-2 border-purple-600"
      />
      </Link>

      <Link to="/image/pareja de leones.jpg">
     
      <img
        src="pareja de leones.jpg"
        alt="pareja de leones"
        className="w-60 h-60 border-2 border-purple-600"
      />
      </Link>

      <Link to="/image/perro.jpg">
     
      <img
        src="perro.jpg"
        alt="perro"
        className="w-60 h-60 border-2 border-purple-600"
      />
      </Link>
      <Link to="/image/pez.jpg">
  
      <img
        src="pez.jpg"
        alt="pez"
        className="w-60 h-60 border-2 border-purple-600"
      />
      </Link>
      <Link to="/image/tortuga.jpg">

      <img
        src="tortuga.jpg"
        alt="tortuga"
        className="w-60 h-60 border-2 border-purple-600"
      />
      </Link>
    </div>
  );
};

export default Images;
 


