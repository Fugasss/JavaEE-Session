import { useModal } from "../../../../../../../../Hooks/contextHooks"
import EModalContent from "../../../../../../../../Modal/EModalContent"

export type TProduct ={
    title : string ,
    img : string , 
    price : number , 
    description : string 
}



export default function Product({title , img , price , description}:TProduct) {

  const setModal = useModal()

  const openImageModalScreen = (e:React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    e.preventDefault()
  
    setModal({type:EModalContent.OPEN_IMAGE , data: img})
  }

  return (
    <div className="bg-passive w-2/12 p-4 flex-col hover:bg-passive_dark">
        <div className="w-full">
            <img src={img} alt="" className="w-full h-full hover:p-2" onClick={(e)=>{openImageModalScreen(e)}}/>
        </div>
        <div className="flex flex-col justify-between content-between flex-1">
          <h1 className="font-bold text-2xl">{title}</h1>
          <p>{description}</p>
          <div className="flex w-full justify-between">
            <p className="text-4xl">{price}</p>
            <button className="bg-active p-2 hover:bg-active_dark">⭐</button>
          </div>
        </div>
    </div>
  )
}
