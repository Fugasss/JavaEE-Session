import React, { useState } from 'react'
import TextField from '../../../../../../../Modal/ModalContents/FormComponents/TextField'
import axios from 'axios'
import axiosApi from '../../../../../../../utils/axiosApi'
import { EApi } from '../../../../../../../api/EApi'

export default function ChangeProduct() {

    const [ id, setId ] = useState("")
    const [ name, setName ] = useState("")
    const [ desc, setDesc ] = useState("")
    const [ productType, setType ] = useState("")
    const [ price, setPrice ] = useState("")
    const [ quantity, setQuantity ] = useState("")
    const [ discount, setDiscount ] = useState("")

    const changeProductRequest = async ( e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        try{
            const resp = await axiosApi.put(EApi.ADMIN , {
                "productId": id,
                "productName": name,
                "productDescription": desc,
                "productType": productType,
                "productPrice": price,
                "productQuantity": quantity,
                "productDiscount": discount })
            console.log("CREATED")
            
        }
        catch(err){
            console.log("ERROR-CREATE")
        }
    }

    return (
    <form className='bg-passive flex flex-col w-1/3 p-4'>
        <TextField title='Create product :' placeholder='id...' input_type='text' value={id} handler={setId}/>
        <TextField placeholder='name...' input_type='text' value={name} handler={setName}/>
        <TextField placeholder='desc...' input_type='text' value={desc} handler={setDesc}/>
        <TextField placeholder='type...' input_type='text' value={productType} handler={setType}/>
        <TextField placeholder='price...' input_type='text' value={price} handler={setPrice}/>
        <TextField placeholder='quantity...' input_type='text' value={quantity} handler={setQuantity}/>
        <TextField placeholder='discount...' input_type='text' value={discount} handler={setDiscount}/>
        <button className='bg-active p-3' onClick={(e) => {changeProductRequest(e)}}>Change</button>
    </form>
    )
}
