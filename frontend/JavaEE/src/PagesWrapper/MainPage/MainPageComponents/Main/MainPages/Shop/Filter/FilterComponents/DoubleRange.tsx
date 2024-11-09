import React from 'react'

type DoupleRangeProps ={
    rangeMin : number ,
    rangeMax : number ,
    rangeStep : number ,
    minValue : number , 
    maxValue : number ,
    setMin : Function , 
    setMax : Function , 
}

export default function DoubleRange({rangeMin ,rangeMax ,rangeStep , maxValue ,minValue ,setMax ,setMin}:DoupleRangeProps) {

    const minPercent = ((minValue - rangeMin) / (rangeMax - rangeMin)) * 100;
    const maxPercent = ((maxValue - rangeMin) / (rangeMax - rangeMin)) * 100;

    const handleMinChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        if(value < maxValue - rangeStep){
            setMin(value);
        }
    }

    const handleMaxChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        if(value > minValue + rangeStep){
            setMax(value);
        }
    }

  return (
    <div className='flex relative'>
        <div className="absolute bg-WHITE w-full h-1 rounded-full"></div>
        <div className="absolute bg-active h-1 rounded-full" style={{left:`${minPercent}%`, right:`${100-maxPercent}%`}}></div>
        <input type="range" min={rangeMin} step={rangeStep} max={rangeMax} value={minValue} onChange={(e) => handleMinChange(e)} className='price_range absolute pointer-events-auto appearance-none w-full h-1'/>
        <input type="range" min={rangeMin} step={rangeStep} max={rangeMax} value={maxValue} onChange={(e) => handleMaxChange(e)} className='absolute pointer-events-auto appearance-none w-full h-1'/>
    </div>
  )
}
