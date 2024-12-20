import React from 'react'

export default function CardInformation({title , description , price} : {title:string , description : string , price:string}) {
  return (
    <div className='flex flex-col gap-4 h-full content-between justify-between'>
      <div className='flex flex-col gap-5'>
        <h1 className='font-bold text-5xl'>{title}</h1>
        <p className='text-2xl'>{description}</p>
      </div>
      <div className='flex font-bold text-4xl'>
        <button className='bg-active px-10 py-6 mx-10 rounded-md text-xl h-fit hover:bg-active'>КУПИТЬ</button>
        <p className=' border-4 w-fit p-4 border-passive rounded-md h-fit'>{price}</p>
      </div>
    </div>
  )
}
