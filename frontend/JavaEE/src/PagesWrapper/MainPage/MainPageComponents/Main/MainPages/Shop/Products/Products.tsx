import { useContext, useEffect, useState } from "react"
import Product, { TProduct } from "./Product/Product"
import axios, { isAxiosError } from "axios"
import { EApi } from "../../../../../../../api/EApi"
import Loanding from "../../../../../../../Modal/ModalContents/Registration/Loanding"
import { FilterContext } from "../Shop"
import axiosApi from "../../../../../../../utils/axiosApi"

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

    const filterParams = useContext(FilterContext)

    const [ productsData , setProductsData] = useState(<Loanding/>)

    const fetchProducts =  async () => {
      try{
        const response : ApiProduct[]  =  ((await axiosApi.get(EApi.PRODUCTS , {params : filterParams} )).data["content"])
        console.log()
        if(response.length >0){
          setProductsData(<>{response.map( item => <Product title={item.productName} description={item.productInfo.slice(0,30) + "..."} img="https://avatars.mds.yandex.net/i?id=33b583fddf2d60115cbd8d3d4225e8083370d176-10477521-images-thumbs&n=13" price={item.price}/>)}</>);
        }
        else{
          setProductsData(<p>Нет товаров по вашему запросу :(</p>)
        }
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
        <div className="flex flex-wrap gap-4">
          {productsData}         
        </div>
    </section>
  )
}
