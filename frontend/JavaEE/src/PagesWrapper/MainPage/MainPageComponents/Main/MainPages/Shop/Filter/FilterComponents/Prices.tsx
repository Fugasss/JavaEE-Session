import React from 'react'

export default function Prices() {
  return (
    <div className='flex flex-col gap-3'>
        <p>Цена</p>
        <div className='flex'>
            <div className='flex gap-2'>
                <p>От:</p>
                <input type="number"  />
            </div>
            <div className='flex'>
                <p>До:</p>
                <input type="number" />
            </div>
        </div>
        <div className='flex relative'>
            <input type="range" min={1000} max={320000} className='price_range'/>
            <input type="range" min={1000} max={320000} className='price_range absolute'/>
        </div>
    </div>
  )
}
