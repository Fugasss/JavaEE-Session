import { useContext, useState } from "react";
import { ModalContext } from "../../../App";
import EModalContent from "../../EModalContent";
import axios from "axios";
import { EApi } from "../../../api/EApi";
import Loanding from "../Registration/Loanding";

const loginRequest = async () => {
  try {
      const response = await axios.get(EApi.default);
      console.log("Response:", response);
      return response.status;
  } catch (error) {
      console.log("Error:", error);
      return 500; 
  }
};

export default function Login() {

    const [statusContent , setStatus] = useState(<div></div>)
    const [isLoanding , setIsLoanding] = useState(false);

    const [loginData , setLoginData] = useState("");
    const [passwordData , setPasswordData] = useState("");

    const setModal = useContext(ModalContext);

    const sendLoginRequest = async (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
      e.preventDefault();

      setIsLoanding(true);

      const statusCode = await loginRequest();

      setIsLoanding(false);

      console.log("Ответ сервера - " + statusCode)

      switch (statusCode!){
        case 200:{
          setStatus(<p>Успешный Вход!</p>)
          break;
        }
        case 400:{
          setStatus(<p>Что-то пошло не так...</p>)
          break;
        }
        default :{
          setStatus(<p>Что-то пошло не так...2 </p>)

          console.log("Ошибка - неизветный код - " , statusCode)
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

            <button className="bg-blue-200 py-2 hover:bg-blue-300 mt-4" disabled={isLoanding} onClick={(e)=>{sendLoginRequest(e)}}>
              {isLoanding ? <Loanding/> : "Вход" }
            </button>
            {statusContent}
            <button className="underline text-gray-500" disabled={isLoanding} onClick={()=>{setModal(EModalContent.REGISTRATION)}}>Регистрация</button>
        </div>
    </form>
  )
}
