import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // Verificar valores nulos
    if (inputValue.trim().length <= 1) return;

    // Renderizar la nueva categoria
    onNewCategory(inputValue.trim());

    // Vaciar el Input
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input value={inputValue} onChange={onChange} type="text" />
      <button type="submit">Agregar</button>
    </form>
  );
};
