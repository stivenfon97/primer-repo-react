import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

   const [inputValue, setInputValue] = useState('');

   const onInputChange = (event) => {
      //console.log( event.target.value );
      setInputValue( event.target.value );
   };

   const onSubmit = (event) => {
      event.preventDefault();
      const newInputValue =  inputValue.trim();
      if( newInputValue.length <= 1 ) return;
      //console.log( setCategories );
      //setCategories( categories => [inputValue, ...categories]);
      setInputValue('');
      onNewCategory( newInputValue );
   };

  return (
   <form onSubmit={ (event) => onSubmit( event ) }>
      <input 
         type="text"
         placeholder="Buscar GIFs..."
         value={ inputValue }
         onChange={ onInputChange }
      />
   </form>
  )
}
