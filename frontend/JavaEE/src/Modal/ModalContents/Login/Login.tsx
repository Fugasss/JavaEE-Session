import { useContext, useState } from "react";
import { ModalContext } from "../../../App";
import EModalContent from "../../EModalContent";
import axios from "axios";
import { EApi } from "../../../api/EApi";

const loginRequest = async () => {
  try {
      const response = await axios.get(EApi.default);
      console.log("Response:", response);
      return response.status; // Возвращаем статус при успешном запросе
  } catch (error) {
      console.log("Error:", error);
      return 500; // Возвращаем статус ошибки или 500, если статус недоступен
  }
};

export default function Login() {

    const [statusContent , setStatus] = useState(<div></div>)

    const [loginData , setLoginData] = useState("");
    const [passwordData , setPasswordData] = useState("");

    const setModal = useContext(ModalContext);

    const sendLoginRequest = async (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
      e.preventDefault();
      setStatus(<p>Загрузка...</p>)
      const statusCode = await loginRequest();
        console.log(statusCode)
        switch (statusCode!){
          case axios.HttpStatusCode.Ok:{
            setStatus(<p>Успешный Вход!</p>)
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
    <form action="" onSubmit={()=>{}} className="w-full">
        <div className="flex flex-col gap-4 w-full">
            <h1 className="font-bold text-2xl mb-5 text-center">Вход</h1>
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

            <button className="bg-blue-200 py-2 hover:bg-blue-300 mt-4" onClick={(e)=>{sendLoginRequest(e)}}>Войти</button>
            {statusContent}
            <button className="underline text-gray-500" onClick={()=>{setModal(EModalContent.REGISTRATION)}}>Регистрация</button>
        </div>
    </form>
  )
}
