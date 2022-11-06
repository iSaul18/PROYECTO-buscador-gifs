import { useState } from "react";
import { AddCategory, GifGrid } from "./components/";

const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onNewCategory = (newCategorie) => {
    // Verificar que no haya una categoria igual
    if (categories.includes(newCategorie)) return;

    setCategories([newCategorie, ...categories]);
  };

  return (
    <>
      <h1>Buscador de Gifs</h1>

      <AddCategory onNewCategory={onNewCategory} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};

export default GifExpertApp;
