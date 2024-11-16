import { useEffect, useState } from 'react'
import BucketItem, { TBucketItem } from './BucketItem'
import Loanding from '../../../../../../../../Modal/ModalContents/Registration/Loanding'
import axios, { isAxiosError } from 'axios'
import { EApi } from '../../../../../../../../api/EApi'
import axiosApi from '../../../../../../../../utils/axiosApi'

export default function Bucket() {

  const [bucketContent , setBucketContent] = useState(<p className='text-center p-10'>Ваша корзина пуста...</p>)

  useEffect(()=>{

    const fetchBucket =  async () => {
      setBucketContent(<Loanding/>)
      try{
        const result: TBucketItem[] = (await axiosApi.get(EApi.BUCKET)).data;
        if (result){
          setBucketContent(<>{result.map( item => <BucketItem title={item.title} image={item.image} desc={item.desc} price={item.price} status={item.status}/>)}</>)
        }
        else {
          setBucketContent(<p className='text-center p-10'>Ваша корзина пуста...</p>)
        }
      }
      catch(err){
        if (isAxiosError(err)){
          console.log(err.code)
          setBucketContent(<p className='text-center p-10'>Ошибка...</p>)
        }
      }
    }

    fetchBucket();
  } , [])

  return (
    <div className='flex flex-col bg-passive p-4 w-full'>
        <div className='flex w-full justify-between  mb-2'>
          <p className='font-bold text-2xl'>Корзина</p>
          <button className='bg-active p-2 px-4'>Заказать все</button>
        </div>
        <ul className='flex flex-col gap-4 overflow-y-scroll'>
          {bucketContent}
        </ul>
    </div>
  )
}
