import React, { useState } from 'react'
import { useLoginStatus, useModal } from '../../../Hooks/contextHooks';
import EModalContent from '../../EModalContent';
import Loanding from './Loanding';
import { registrationRequest } from '../../../utils/verificationRequests';
import TextField from '../FormComponents/TextField';

export default function Registration() {

    const setModal = useModal();
    const {isLogined , setIsLogined} = useLoginStatus();

    const [emailData , setEmailData] = useState("");
    const [passwordData , setPasswordData] = useState("");

    const [statusContent , setStatusContent] = useState(<div></div>);
    const [isLoanding , setIsLoanding] = useState(false);

    const sendRegistrationRequest = async (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{

      e.preventDefault();

      if(emailData.length < 9){
        setStatusContent(<p>Почта не действительна</p>)
        return
      }
      if(passwordData.length < 10){
        setStatusContent(<p>Пароль слишком короткий</p>)
        return
      }

      setIsLoanding(true);

      const statusCode = await registrationRequest(emailData , passwordData);

      setIsLoanding(false);

      console.log("Ответ сервера - " + statusCode)

      switch (statusCode){
        case 201:{
          setIsLogined(true);
          setModal(EModalContent.REGISTRATION_SUCCESS)

          break;
        }
        case 409:{
          setStatusContent(<p>Запись уже существует</p>)
          break;
        }
        case 400:{
          setStatusContent(<p>Данные не действительны</p>)
          break;
        }
        default :{
          setStatusContent(<p>Что-то пошло не так... </p>)
          console.log("Ошибка - неизветный код - " , statusCode)
          break;
        }
      }
  }

    return(
        <form action="" className="w-full">
            <div className="flex flex-col gap-4 w-full">
                <h1 className="font-bold text-2xl mb-5 text-center">Регистрация</h1>

                <TextField title="Почта" input_type='text' placeholder='Введите почту...' value={emailData} handler={setEmailData}/>
                <TextField title="Пароль" input_type='password' placeholder='Введите пароль...' value={passwordData} handler={setPasswordData}/>
                        
                <button className="bg-passive py-2 hover:bg-blue-300 mt-4 " disabled={isLoanding} onClick={(e)=>{sendRegistrationRequest(e)}}>
                  {isLoanding ? <Loanding/> : "Зарегистрироваться" }
                </button>

                <div className='text-center'>{statusContent}</div>

                <button className="underline text-gray-500" disabled={isLoanding} onClick={()=>{setModal(EModalContent.REGISTRATION)}}>Вход</button>
            </div>
        </form>
      )
}
