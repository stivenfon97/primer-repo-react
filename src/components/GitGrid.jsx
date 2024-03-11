import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";


export const GitGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs( category );
  //console.log({isLoading, images});

  return (
    <>
      <h3> { category } </h3>
        
      { isLoading && <h2>Cargando...</h2> }	

      <div className="card-grid">
          {
            images.map( (img) => 
                          <GifItem key={ img.id } { ...img } />
                      )
          }
      </div>

    </>
  )
}
