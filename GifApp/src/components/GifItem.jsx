import React from 'react'

export const GifItem = ({title,url}) => {
  return (
    <div className=''>
        <img className='aspect-[9/14] object-cover' src={url} alt={title} />
        <p className='bg-white text-center rounded-b-md py-3'>{title}</p>
    </div>
  )
}
