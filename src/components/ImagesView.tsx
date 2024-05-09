 import { useParams } from 'react-router-dom';

const ImagesView = () => {
  const { imageName } = useParams<{ imageName: string }>();

  // Ruta completa de la imagen
  const imageUrl = `/${imageName}`;

  return (
    <div className=" max-w-full max-h-full flex justify-center items-center bg-black">
      <img src={imageUrl} alt={imageName} />
    </div>
  );
};

export default ImagesView;
 


