import axios, { isAxiosError } from 'axios';
import React, { useState } from 'react'
import { EApi } from '../../../../../../../../api/EApi';
import { Link } from 'react-router-dom';
import Loanding from '../../../../../../../../Modal/ModalContents/Registration/Loanding';

export default function AvatarChange() {

    const [imageLink , setImageLink] = useState("");

    const [isLoanding , setIsLoanding] = useState(false);
    const [responseText , setResponseText] = useState("");

    const submitNewAvatar = async (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        if(imageLink.length > 6){
          setIsLoanding(true)
          try{
            const result = await axios.put( EApi.PROFILE , { link : imageLink} )
            setResponseText("Успех!")
          }
          catch(err){
            if (isAxiosError(err)){
                setResponseText("Ошибка")
            }
          }
        }
        else{
          setResponseText("Неверная ссылка")
        }
    }

    const handleLinkChange = ( e : React.ChangeEvent<HTMLInputElement> ) => {
        e.preventDefault()
        setImageLink(e.target.value)
    }

  return (
    <>
        <p>Изменить аватар :</p>
        <div className='flex'>
            <input type='text' placeholder='Ссылка...' className='px-2 w-full' value={imageLink} onChange={handleLinkChange}/>
            <button className='bg-active_light p-1 px-4 hover:bg-active' onClick={submitNewAvatar} disabled={isLoanding}>{isLoanding ? <Loanding/>: <p>Изменить</p>}</button>
        </div>
        <p className='font-bold'>{responseText}</p>
    </>
  )
}
