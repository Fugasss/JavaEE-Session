
export type TProduct ={
    title : string ,
    img : string , 
    price : number , 
    description : string 
}

export default function Product({title , img , price , description}:TProduct) {
  return (
    <div className="bg-passive w-2/12 p-4 flex-col">
        <div className="w-full">
            <img src={img} alt="" className="w-full h-full"/>
        </div>
        <div className="flex flex-col justify-between content-between flex-1">
          <h1 className="font-bold text-2xl">{title}</h1>
          <p>{description}</p>
          <p className="text-4xl">{price}</p>
        </div>
    </div>
  )
}
