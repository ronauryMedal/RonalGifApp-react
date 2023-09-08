import React from 'react'
import {useState}from 'react'

function AddCategory({setCategorie}) {

    const [inputValue, setinputValue] = useState('')

    const Oninputchange= (event)=>{
        setinputValue(event.target.value)
        console.log(event.target.value)
    }

    const Onsubmit=(event)=>{

        event.preventDefault();
        if(inputValue.trim()<=1)return
        setCategorie(inputValue);
        setinputValue([])
    }
 
  return (
    <div className='flex justify-center items-center'>
      <form className=' w-full max-w-md min-w-[310px]' onSubmit={Onsubmit}>
        <input
         className='mt-3' 
         type="text"
          placeholder='ingresar la categoria' 
          value={inputValue}
          onChange={(event)=>Oninputchange(event)}

          
          />
    </form>
    </div>
  )
}

export default AddCategory