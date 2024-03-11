export const getGifs = async ( category ) => {

   const URL = `https://api.giphy.com/v1/gifs/search?api_key=ElZATwx3LfFIvo34UB3sYx8TvT9Bz3bt&q=${ category }&limit=10`;
   const response = await fetch( URL );
   const { data = [] } = await response.json();

   const gifs = data.map( img => 
      ({
         id: img.id,
         title: img.title,
         url: img.images.downsized_medium.url
      })
   );
   //console.log( gifs );

   return gifs;
};
