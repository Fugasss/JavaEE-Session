import { useEffect, useState } from "react"
import Product, { TProduct } from "./Product/Product"
import axios, { isAxiosError } from "axios"
import { EApi } from "../../../../../../../api/EApi"
import Loanding from "../../../../../../../Modal/ModalContents/Registration/Loanding"

type ApiProduct = {
  productId: string , 
  productName: string , 
  productType: string , 
  productInfo: string , 
  price: number ,
  discount: number ,
  stock: number ,
}

export default function Products() {

    const [ productsData , setProductsData] = useState(<Loanding/>)

    const data : [TProduct] = [{
        title: "RTX9090",
        img: "https://avatars.mds.yandex.net/i?id=ea51929c823e3664940d25afce97b1640999ef90-10586727-images-thumbs&n=13" , 
        description:"Видеокарта", 
        price: 1200 , 
    }]

    const fetchProducts =  async () => {
      try{
        const response : ApiProduct[]  =  (await axios.get(EApi.PRODUCTS)).data
        console.log(response)
        setProductsData(<>{response.map( item => { <Product title={item.productName} description={item.productInfo} img="" price={item.price}/>} )}</>)
      }
      catch(err){
        if(isAxiosError(err)){
          console.log(err.code)
        }
      }
    }

    useEffect(()=>{
      fetchProducts();  
    },[])

  return (
    <section>
        <div className="flex flex-wrap">
            {productsData}
        </div>
    </section>
  )
}
