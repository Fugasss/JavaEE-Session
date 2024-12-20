import React from 'react'

export default function ImageSelection({img} : {img : string}) {
  return (
    <div className='w-full flex'>
      <div className='w-full flex flex-col p-3'>

        <div className='w-full h-full flex justify-center'>
          <img className='w-8/12 h-full' src={img} alt="" />
        </div>

        <div className='w-full flex h-1/2'>
          <div className=' w-full flex p-1 mt-2 gap-1'>
            <img className='w-full border-2 hover:border-2 hover:border-active' src={img} alt="" />
            <img className='w-full border-2 hover:border-2 hover:border-active' src={img} alt="" />
            <img className='w-full border-2 hover:border-2 hover:border-active' src={img} alt="" />
            <img className='w-full border-2 hover:border-2 hover:border-active' src={img} alt="" />
          </div>      
        </div>

     </div>
    </div>
  )
}
