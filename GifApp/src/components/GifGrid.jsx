import { useEffect,useState } from "react";
import { GifItem } from "./GifItem";

export const GifGrid = ({category}) => {

    const [images, setimages] = useState([])

    const getGif= async(category)=>{
        const url=`http://api.giphy.com/v1/gifs/search?api_key=yixlGhVAMYcorm7WqgVZVZXq7J43yY2u&q=${category}&limit=12 `;
        const res= await fetch(url);
        const {data} = await res.json();

        const gifs=data.map(img=>({
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }))

        console.log(gifs)
        return gifs
    }

    const getImagenes = async()=>{
        const newimages = await getGif(category)
        setimages(newimages)
    }


    useEffect(() => {
    getImagenes()
    }, [])
    



  return (
    <div>
        <h3 className="text-5xl">{category}</h3>
       
       <div className="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-4">
       {images.map((imagen)=>(
              <GifItem
              key={imagen.id}
              {...imagen}
              />
            ))
       }
       </div>

    </div>
  )
}
