import { useEffect, useState } from 'react'

export default function Loanding() {
    const [loandingDotsCount , setDotsCount] = useState(0);
    useEffect(()=>{

      let localCount = loandingDotsCount; 

      const interval = setInterval(()=>{
        localCount > 2 ? setDotsCount(0) :setDotsCount(++localCount)
      }, 500)

      return () => {
        clearInterval(interval);
      }

    } , [])
  return (
    <div>Загрузка{".".repeat(loandingDotsCount)}</div>
  )
}
