import { useEffect, useState } from "react";
import Filter from "./Filter/Filter";
import Products from "./Products/Products";
import Loanding from "../../../../../../Modal/ModalContents/Registration/Loanding";
import Product from "./Products/Product/Product";
import { EApi } from "../../../../../../api/EApi";
import axios, { isAxiosError } from "axios";

export type TFilterParams = {
  max : number , 
  min : number , 
  page : number ,
  size : number ,
  type? : string ,
  tag? : string , 
}

const defaultFilter : TFilterParams = {
  max : 10000000 , 
  min : 0 ,
  page : 0 ,
  size : 4 , 
}

type ApiProduct = {
  productId: string , 
  productName: string , 
  productType: string , 
  productInfo: string , 
  price: number ,
  discount: number ,
  stock: number ,
}

export default function Shop() {

  const [filterParams , setFilterParams ] = useState(defaultFilter)
  const [ maxPages, setMaxPages] = useState(0)

  const [ productsData , setProductsData] = useState(<Loanding/>)

  const fetchProducts =  async () => {
    try{

      const response =  (await axios.get(EApi.PRODUCTS , {params : filterParams} )).data
      const products : ApiProduct[] = response["content"]
      setMaxPages(Number(response["totalPages"]));

      console.log(response)
      if(products.length >0){
        setProductsData(<>{products.map( item => <Product title={item.productName} description={item.productInfo.slice(0,30) + "..."} img="https://avatars.mds.yandex.net/i?id=33b583fddf2d60115cbd8d3d4225e8083370d176-10477521-images-thumbs&n=13" price={item.price}/>)}</>);
      }
      else{
        setProductsData(<p>Нет товаров по вашему запросу :(</p>)
      }
    }
    catch(err){
      if(isAxiosError(err)){
        console.log("PRODUCTS RESP - " + err)
      }
    }
  }

  useEffect(()=>{
    fetchProducts();  
  },[filterParams])

  
  const paramsChanges = filterParams

  return (
    <div className="flex w-full">
        <div className="w-1/6 mr-4">
          <Filter paramsChanges={paramsChanges} setFilterParams={setFilterParams}/>
        </div>
        <div className="flex-1">
          <Products maxPages={maxPages} filterParams={filterParams} setFilterParams={setFilterParams} productsData={productsData}/>
        </div>
    </div>
  )
}
