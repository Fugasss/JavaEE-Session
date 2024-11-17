import React, { useState } from 'react'
import TextField from '../../../../../../Modal/ModalContents/FormComponents/TextField'
import ChangeProduct from './AdminForms/ChangeProduct'
import CreateProduct from './AdminForms/CreateProduct'
import DeleteProduct from './AdminForms/DeleteProduct'

export default function Admin() {
    

  return (
    <div className='flex gap-6 w-full'>
        <ChangeProduct/>
        <CreateProduct/>
        <DeleteProduct/>
    </div>
  )
}
