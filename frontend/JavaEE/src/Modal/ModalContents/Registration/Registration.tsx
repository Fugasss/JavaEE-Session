import axios, { Axios, AxiosError } from "axios";
import { useModal } from "../../../Hooks/contextHooks"
import EModalContent from "../../EModalContent";
import { EApi } from "../../../api/EApi";
import { useState } from "react";

const registrationRequest = async () => {
  try {
      const response = await axios.get(EApi.default);
      console.log("Response:", response);
      return response.status;
  } catch (error) {
      console.log("Error:", error);
      return 500; 
  }
};

export default function Registration() {

  const [statusContent , setStatus] = useState(<div></div>)

  const [loginData , setLoginData] = useState("");
  const [passwordData , setPasswordData] = useState("");

  const setModal = useModal();

  const sendRegistrationRequest = async (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
    e.preventDefault();
    setStatus(<p>Загрузка...</p>)
    const statusCode = await registrationRequest();
      console.log(statusCode)
      switch (statusCode!){
        case axios.HttpStatusCode.Ok:{
          setStatus(<p>Запись создана!</p>)
          break;
        }
        case axios.HttpStatusCode.Conflict:{
          setStatus(<p>Запись уже существует</p>)
          break;
        }
        case axios.HttpStatusCode.BadRequest:{
          setStatus(<p>Что-то пошло не так...</p>)
          break;
        }
        default :{
          setStatus(<p>Что-то пошло не так...2 </p>)
          console.log(statusCode)
          break;
        }
      }
    

  }

  return (
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
            <button className="bg-blue-200 py-2 hover:bg-blue-300 mt-4" onClick={(e)=>{sendRegistrationRequest(e)}}>Зарегистрироватся</button>
              {statusContent}
            <button className="underline text-gray-500" onClick={()=>{setModal(EModalContent.REGISTRATION)}}>Вход</button>
        </div>
    </form>
  )
}
