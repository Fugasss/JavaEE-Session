import React, { useState } from 'react'
import TextField from '../../../../../../../Modal/ModalContents/FormComponents/TextField'
import axiosApi from '../../../../../../../utils/axiosApi';
import { EApi } from '../../../../../../../api/EApi';

export default function DeleteProduct() {

    const [ id, setId ] = useState("")

    const deleteProductRequest = async ( e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        try{
            const resp = await axiosApi.delete(EApi.ADMIN , {data : {"productId" : id}})
            console.log("CREATED")
            
        }
        catch(err){
            console.log("ERROR-CREATE")
        }
    }

    return (
    <form className='bg-passive flex flex-col w-1/3 p-4'>
        <TextField title='Create product :' placeholder='id...' input_type='text' value={id} handler={setId}/>
        <button className='bg-active p-3' onClick={ e=> deleteProductRequest(e)}>Delete</button>
    </form>
    )
}
