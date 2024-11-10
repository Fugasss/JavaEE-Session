import { useEffect } from "react"
import Product, { TProduct } from "./Product/Product"
import axios from "axios"
import { EApi } from "../../../../../../../api/EApi"

export default function Products() {

    const data : [TProduct] = [{
        title: "RTX9090",
        img: "https://avatars.mds.yandex.net/i?id=ea51929c823e3664940d25afce97b1640999ef90-10586727-images-thumbs&n=13" , 
        description:"Видеокарта", 
        price: 1200 , 
    }]

    useEffect(()=>{
      axios.get(EApi.PRODUCTS)
    },[])

  return (
    <section>
        <div className="flex flex-wrap">
            {data.map((item) => <Product title={item.title} img={item.img} price={item.price} description={item.description}/>)}
        </div>
    </section>
  )
}
