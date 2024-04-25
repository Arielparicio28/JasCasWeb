 import { useParams } from 'react-router-dom';

const ImagesView = () => {
  const { imageName } = useParams<{ imageName: string }>();

  // Ruta completa de la imagen
  const imageUrl = `/${imageName}`;

  return (
    <div className="flex justify-center items-center  h-screen">
      <img src={imageUrl} alt={imageName} />
    </div>
  );
};

export default ImagesView;
 


