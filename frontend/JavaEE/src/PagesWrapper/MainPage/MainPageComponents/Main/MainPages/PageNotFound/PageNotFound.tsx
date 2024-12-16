import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ERoutes } from '../../../../../../api/ERoutes';

export default function PageNotFound() {
  const navigator = useNavigate();
  return (
    <div className='w-full h-full font-bold justify-center items-center content-center flex flex-col text-center gap-6'>
      <h1 className='text-9xl'>404</h1>
      <p className='text-4xl'>Данная страница не существует</p>
      <button className='bg-passive p-4' onClick={() => navigator(ERoutes.DEFAULT)}> На главную</button>
    </div>
  )
}
