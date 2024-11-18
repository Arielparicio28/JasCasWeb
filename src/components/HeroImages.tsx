import './hero.css';

const HeroImages = () => {
  return (
    <div className="relative">
      <div className="lg:bg-[url('/fondo_pantalla.jpg')] bg-[url('/recortada.jpg')] bg-cover bg-center w-full h-screen">
        <h1 className='text-right mr-4 mt-4 text-4xl font-font text-red-600'>Jas Cas</h1>
      </div>
    </div>
  );
}

export default HeroImages;
