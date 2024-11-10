import { useState } from "react";
import DoubleRange from "./DoubleRange";

export default function Prices() {

    const rangeMin = 1000;
    const rangeStep = 1000;
    const rangeMax = 320000;

    const [minValue, setMinValue] = useState(rangeMin);
    const [maxValue, setMaxValue] = useState(rangeMax);

    
    
  return (
    <div className='flex flex-col gap-3'>
        <p>Цена</p>
        <div className='flex gap-2'>
            <div className='flex gap-2 w-full'>
                <p>От:</p>
                <input type="number" value={minValue} className="px-2 w-full" onChange={(e) => {
                  e.preventDefault();
                  const value = Number(e.target.value);
                }}/>
            </div>
            <div className='flex gap-2 w-full'>
                <p>До:</p>
                <input type="number" value={maxValue} className="px-2 w-full" onChange={(e) => {
                  e.preventDefault();
                  const value = Number(e.target.value);
                }}/>
            </div>
        </div>
        <DoubleRange maxValue={maxValue} 
                     minValue={minValue} 
                     rangeMin={rangeMin} 
                     rangeMax={rangeMax} 
                     rangeStep={rangeStep} 
                     setMin={setMinValue} 
                     setMax={setMaxValue}/>
        
    </div>
  )
}
