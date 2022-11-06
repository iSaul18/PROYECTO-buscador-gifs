import { GifItem } from "./GifItem";
import useFetchGifs from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>

      {/* Cuando cargan los gifs */}
      {isLoading && <h2>Cargando...</h2>}

      {/* Si no hay ningún gif */}
      {!isLoading && !images.length && <h2>No se encontraron gifs relacionados 🙁</h2>}

      {/* Si encuentra gifs */}
      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
