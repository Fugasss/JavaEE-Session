
import { useLocation } from 'react-router-dom'
import { TProduct } from '../Shop/Products/Product/Product';
import ImageSelection from './ProductCardComponents/ImageSelection';
import CardInformation from './ProductCardComponents/CardInformation';


// const productCardRequest = async (id : string) => {
//   try{
//     const response = await axios.get(EApi.PRODUCT + "/" + id)
//   }
//   catch(err){
//     console.log(err)
//   }
// }

export default function ProductCard() {

  const params =  new URLSearchParams( useLocation().search );

  // useEffect(()=>{
  //   const res = productCardRequest("111");
  // },[])

  const { description , img ,price ,title} : TProduct = {
    id : params.get("id")! , 
    description : params.get("description")! , 
    img : params.get("img")!,
    price : params.get("price")! , 
    title : params.get("title")! 
  }

  return (
    <div className=' w-full flex flex-col'>
      <div className='flex'>
        <div className='w-full p-3 flex gap-5 justify-center'>
          <div className='w-fit'>
            <ImageSelection img={img}/>
          </div>
          <div className='w-1/2 my-8'>
            <CardInformation description={description} price={price} title={title} />
          </div>
        </div>
      </div>
    </div>
  )
}
