import { useContext, useState } from "react";
import { ModalContext } from "../../../App";
import EModalContent from "../../EModalContent";
import Loanding from "../Registration/Loanding";
import { loginRequest } from "../../../utils/verificationRequests";

export default function Login() {

    const [statusContent , setStatus] = useState(<div></div>)
    const [isLoanding , setIsLoanding] = useState(false);

    const [loginData , setLoginData] = useState("");
    const [passwordData , setPasswordData] = useState("");

    const setModal = useContext(ModalContext);

    const sendLoginRequest = async (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
      e.preventDefault();

      setIsLoanding(true);

      const statusCode = await loginRequest( loginData , passwordData);

      setIsLoanding(false);

      console.log("Ответ сервера - " + statusCode)

      switch (statusCode!){
        case 200:{
          setModal(EModalContent.LOGIN_SUCCESS)
          break;
        }
        case 400 :
        case 404 :{
          setStatus(<p>Указанный адрес не существует</p>)
          break;
        }
        case 409:{
          setStatus(<p>Неверные данные для входа</p>)
          break;
        }
        default :{
          setStatus(<p>Что-то пошло не так... </p>)

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

            <button className="bg-passive py-2 hover:bg-blue-300 mt-4" disabled={isLoanding} onClick={(e)=>{sendLoginRequest(e)}}>
              {isLoanding ? <Loanding/> : "Вход" }
            </button>
            {statusContent}
            <button className="underline text-gray-500" disabled={isLoanding} onClick={()=>{setModal(EModalContent.REGISTRATION)}}>Регистрация</button>
        </div>
    </form>
  )
}
