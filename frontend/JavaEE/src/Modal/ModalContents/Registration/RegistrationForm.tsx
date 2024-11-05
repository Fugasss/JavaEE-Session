import React, { useState } from 'react'
import { useModal } from '../../../Hooks/contextHooks';
import EModalContent from '../../EModalContent';
import axios, { Axios, AxiosError } from 'axios';
import { EApi } from '../../../api/EApi';
import Loanding from './Loanding';
import { setCookie } from '../../../utils/cookie';

const registrationRequest = async (email:string , password : string) => {
    try {

        const response = await axios.post(EApi.REGISTRATION , {email , password } );

        const token : {jwt : string} = response.data;
        setCookie("token" , token.jwt) ;

        return response.status;

    } catch (error) {

      if(axios.isAxiosError(error) && error.response){
        
        console.log("Ошибка с сервера - :", error.response.status);
        return error.response.status; 
      }
      else{
        return 500; 
      }
    }
  };

export default function RegistrationForm() {

    const setModal = useModal();

    const [loginData , setLoginData] = useState("");
    const [passwordData , setPasswordData] = useState("");

    const [statusContent , setStatusContent] = useState(<div></div>);
    const [isLoanding , setIsLoanding] = useState(false);

    const sendRegistrationRequest = async (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{

      e.preventDefault();

      setIsLoanding(true);

      const statusCode = await registrationRequest(loginData , passwordData);

      setIsLoanding(false);

      console.log("Ответ сервера - " + statusCode)

      switch (statusCode){
        case 200:{
          setModal(EModalContent.NONE)
          break;
        }
        case 409:{
          setStatusContent(<p>Запись уже существует</p>)
          break;
        }
        case 400:{
          setStatusContent(<p>Что-то пошло не так...</p>)
          break;
        }
        default :{
          setStatusContent(<p>Что-то пошло не так... </p>)
          console.log("Ошибка - неизветный код - " , statusCode)
          setTimeout(()=>{
            setStatusContent(<p>Ты Няшечка(*/ω＼*)</p>)
          } , 5000)
          break;
        }
      }
  }

    return(
        <form action="" className="w-full">
            <div className="flex flex-col gap-4 w-full">
                <h1 className="font-bold text-2xl mb-5 text-center">Регистрация</h1>
                <p>Почта</p>  
                <input type="text" className="w-full border-b-2 p-2" 
                        placeholder="Введите почту..." 
                        value={loginData}
                        onChange={(e)=>{setLoginData(e.target.value)}}/>
    
                <p>Пароль</p>
                <input type="password" className="w-full border-b-2 p-2" 
                        placeholder="Введите пароль..." 
                        value={passwordData}
                        onChange={(e)=>{setPasswordData(e.target.value)}}/>
                        
                <button className="bg-blue-200 py-2 hover:bg-blue-300 mt-4 " disabled={isLoanding} onClick={(e)=>{sendRegistrationRequest(e)}}>
                  {isLoanding ? <Loanding/> : "Зарегистрироваться" }
                </button>

                <div className='text-center'>{statusContent}</div>

                <button className="underline text-gray-500" disabled={isLoanding} onClick={()=>{setModal(EModalContent.REGISTRATION)}}>Вход</button>
            </div>
        </form>
      )
}
