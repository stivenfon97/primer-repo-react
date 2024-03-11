import { useState } from "react";
import { AddCategory, GitGrid } from "./components";

export const GitExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories ]);
  };
  //console.log(categories);

  return (
    <>
      {/* Titulo */}
      <h1>GitExpertApp</h1>

      {/* Input */}
      <AddCategory
        //setCategories={ setCategories }
        onNewCategory={(value) => onAddCategory(value)}
      />

      {/* Listado de tarjetas */}
      {categories.map((category) => (
        //return <li key={category}>{category}</li>
        /* <div key={ category } >
                  <h3>{ category }</h3>
                  <li>{ category }</li>
               </div> */
        <GitGrid key={category} category={category} />
      ))}
    </>
  );
};
