import { useState } from 'react';

const images = [
  '/mujer_slider_0.jpg',
  '/mujer_slider_1.jpg',
  '/mujer_slider_2.jpg',
  '/mujer_slider_3.jpg',
  '/mujer_slider_4.jpg',
  '/mujer_slider_5.jpg',
  '/mujer_slider_6.jpg',
  '/mujer_slider_7.jpg',
  '/mujer_slider_8.jpg',
];

const Slider3D = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="flex items-center justify-center h-screen px-4 sm:px-8">
      <div className="flex gap-2 perspective-[1000px] overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative 
              w-[150px] h-[300px] 
              sm:w-[180px] sm:h-[350px] 
              md:w-[200px] md:h-[400px] 
              lg:w-[250px] lg:h-[450px] 
              xl:w-[300px] xl:h-[500px] 
              bg-center bg-cover 
              grayscale brightness-[0.5] 
              transition-transform duration-[1.25s] ease-[cubic-bezier(.1,.7,0,1)] 
              hover:grayscale-0 hover:brightness-100 hover:translate-z-[80px] focus:translate-z-[80px]"
            style={{ backgroundImage: `url(${image})` }}
            tabIndex={0}
            onClick={() => setSelectedImage(image)}
          ></div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative max-w-[90%] max-h-[50%] md:max-w-[80%] md:max-h-[50%] lg:max-w-[70%] lg:max-h-[50%]">
            {/* Imagen ajustada */}
            <img
              src={selectedImage}
              alt="Preview"
              className="w-full h-full md:h-96 object-cover"
            />
            {/* Botón para cerrar */}
            <button
              className="absolute top-4 right-4 text-lime-500 text-3xl font-bold"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Slider3D;
