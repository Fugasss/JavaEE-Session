
export type TProduct ={
    title : string ,
    img : string , 
    price : number , 
    description : string 
}

export default function Product({title , img , price , description}:TProduct) {
  return (
    <div className="bg-blue-200 w-1/3 p-2 flex-col">
        <div className="w-full h-1/2">
            <img src={img} alt="" className="w-full h-full"/>
        </div>
        <h1 className="font-bold text-2xl">{title}</h1>
        <p>{description}</p>
        <div className="float-right text-4xl">{price}</div>
    </div>
  )
}
