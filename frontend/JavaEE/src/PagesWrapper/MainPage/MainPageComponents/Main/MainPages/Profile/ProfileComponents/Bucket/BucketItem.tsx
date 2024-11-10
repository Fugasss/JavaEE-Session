
type TBucketItem = {
  title :string , 
  image : string , 
  desc : string , 
  price : string , 
  status :string 
}

export default function BucketItem({title , image , desc , price , status}:TBucketItem) {

  return (
    <li className='w-full p-4 bg-WHITE'>
      <div className='flex'>
        <div className="flex w-1/6 mr-3">
          <img className="w-full" src={image} alt="" />
        </div>
        <div className="flex flex-col">
          <p className="text-2xl font-bold mb-4">{title}</p>
          <p className="w-3/4">{desc}</p>
        </div>
        <div className="flex flex-col justify-between">
          <div></div>
          <div className="flex flex-col gap-4">
            <div><p className="font-bold text-2xl">{price}тг</p></div>
            <button className="bg-active p-2">Заказать</button>
          </div>
        </div>
      </div>
    </li>
  )
}
