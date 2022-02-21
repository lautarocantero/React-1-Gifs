import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

    const [categories, setcategories] = useState(['anime'])



    return(
        <>
            <h2>GiftExpertApp</h2>  
            <AddCategory setcategories = {setcategories} />
            <hr />


            <ol>
                {
                    categories.map(category => (
                     <GifGrid 
                        key={category} 
                        category = {category} 
                    />
                    ))
                }
            </ol>

        </>
    )
}
