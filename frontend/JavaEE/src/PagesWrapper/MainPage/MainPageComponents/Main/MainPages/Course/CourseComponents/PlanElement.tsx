import React from 'react'

export default function PlanElement({text}: {text:string}) {
  return (
    <li className='hover:bg-blue-300'>{text}</li>
  )
}
