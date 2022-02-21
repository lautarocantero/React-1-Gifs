import React/*, { useState , useEffect}*/ from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const {data:images, loading} = useFetchGifs(category);
    // console.log(images);
    // console.log(loading);
    

  return (
        <>
        <h3>{category}</h3>

        {loading && <p>Loading</p>}

        <div className='card-grid'>
            {
                    images.map( img =>(
                        <GifGridItem
                            key={img.id} 
                            {...img} 
                        />
                        // <li key={img.id}> {img.title}</li>
                            // id= {ima.id}
                            // title={ima.title}
                            // url={ima.url}
                        
                    ))
                }
            
        </div>
        </>
  )
}
