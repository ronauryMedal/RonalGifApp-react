import React from 'react'
import './App.css';
import { useState } from "react";
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


const GifExpertApp = () => {

  const [categories, setcategories] = useState(['naruto']);

  const onaddcategorie = (newcategory)=>{
    if(categories.includes(newcategory)){
      alert("la categoreia ya ha hacido ingresada")
      return
    }
    setcategories([newcategory,...categories])
  }


  return (

    <div className="">
          <h1 className="text-6xl font-bold text-center text-blue-400 ">RonalGifApp</h1>

          <AddCategory setCategorie={onaddcategorie}/>
         {/*  <button className='mb-5 mt-1 rounded-lg border bg-slate-500 px-5' onClick={()=>onaddcategorie()} >agregar </button> */}

    
      {
        categories.map(categorie=>(
        <GifGrid
          key={categorie} 
          category={categorie} />
        ))
      }
    

    </div>

    

  )
}

export default GifExpertApp