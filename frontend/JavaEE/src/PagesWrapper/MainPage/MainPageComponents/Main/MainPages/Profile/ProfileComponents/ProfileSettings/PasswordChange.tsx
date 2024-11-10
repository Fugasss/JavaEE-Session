import React, { useState } from 'react'
import Loanding from '../../../../../../../../Modal/ModalContents/Registration/Loanding';
import axios, { isAxiosError } from 'axios';
import { EApi } from '../../../../../../../../api/EApi';

export default function PasswordChange() {

    const [actualPassword , setActualPassword] = useState("");
    const [newPassword , setNewPassword] = useState("");
    const [newPasswordDublicate , setNewPasswordDublicate] = useState("");

    const [isLoanding , setIsLoanding] = useState(false);
    const [responseText , setResponseText] = useState("");

    const handleActualPasswordChange = (e : React.ChangeEvent<HTMLInputElement>) =>{
        e.preventDefault();
        setActualPassword(e.target.value);
    }

    const handlePasswordChange = (e : React.ChangeEvent<HTMLInputElement>) =>{
        e.preventDefault();
        setNewPassword(e.target.value);
    }
    const handlePasswordDublicateChange = (e : React.ChangeEvent<HTMLInputElement>) =>{
        e.preventDefault();
        setNewPasswordDublicate(e.target.value);
    }

    const submitNewPassword = async ( e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        
        if(newPassword.length > 6){
            if(newPassword == newPasswordDublicate){
                setIsLoanding(true)
                try{
                    const result = await axios.put(EApi.CHANGE_PASSWORD , { actualPassword , newPassword })
                    setResponseText("Ваш пароль изменен!")
                }
                catch(err){
                    if(isAxiosError(err)){
                        setResponseText("Ошибка")
                    }
                }
                finally{
                    setIsLoanding(false)
                }
            }
            else{
                setResponseText("Пароли не совпадают")
            }
        }
        else{
            setResponseText("Пароль должен иметь больше 6 символов")
        }
    }

  return (
    <>
    <p>Изменить пароль :</p>
    <input type='password' placeholder='Старый пароль...' className='p-2' value={actualPassword} onChange={handleActualPasswordChange}/>
    <input type='password' placeholder='Новый пароль...' className='p-2' value={newPassword} onChange={handlePasswordChange}/>
    <input type='password' placeholder='Повторите пароль...' className='p-2' value={newPasswordDublicate} onChange={handlePasswordDublicateChange}/>
    <button className='bg-active_light p-1 hover:bg-active' onClick={ submitNewPassword} disabled={isLoanding}>{ isLoanding ? <Loanding/> : <p>Изменить</p>}</button>
    <p className='font-bold'>{responseText}</p>
    </>
  )
}
