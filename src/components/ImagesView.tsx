 import { useParams } from 'react-router-dom';

const ImagesView = () => {
  const { imageName } = useParams<{ imageName: string }>();

  // Ruta completa de la imagen
  const imageUrl = `/${imageName}`;

  return (
    <div className=" max-w-full max-h-full flex justify-center items-center">
      <img src={imageUrl} alt={imageName} className=" w-screen m-1 p-3"/>
    </div>
  );
};

export default ImagesView;
 


