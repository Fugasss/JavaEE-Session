import React, { useState } from 'react'
import TextField from '../../../../../../../Modal/ModalContents/FormComponents/TextField'
import axiosApi from '../../../../../../../utils/axiosApi'
import { EApi } from '../../../../../../../api/EApi'

export default function CreateProduct() {

    const [ name, setName ] = useState("")
    const [ desc, setDesc ] = useState("")
    const [ productType, setType ] = useState("")
    const [ price, setPrice ] = useState("")
    const [ quantity, setQuantity ] = useState("")

    const createProductRequest = async ( e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();
      try{
          const resp = await axiosApi.post(EApi.ADMIN , {
              "productName": name,
              "productDescription": desc,
              "productType": productType,
              "productPrice": price,
              "productQuantity": quantity, })
          console.log("CREATED")
          
      }
      catch(err){
          console.log("ERROR-CREATE")
      }
  }

  return (
    <form className='bg-passive flex flex-col w-1/3 p-4'>
            <TextField title='Create product :' placeholder='name...' input_type='text' value={name} handler={setName}/>
            <TextField placeholder='desc...' input_type='text' value={desc} handler={setDesc}/>
            <TextField placeholder='type...' input_type='text' value={productType} handler={setType}/>
            <TextField placeholder='price...' input_type='text' value={price} handler={setPrice}/>
            <TextField placeholder='quantity...' input_type='text' value={quantity} handler={setQuantity}/>
            <button className='bg-active p-3' onClick={ (e) => createProductRequest(e)}>Create</button>
    </form>
  )
}
