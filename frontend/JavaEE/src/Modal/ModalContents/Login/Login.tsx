import { useContext, useState } from "react";
import EModalContent from "../../EModalContent";
import Loanding from "../Registration/Loanding";
import { loginRequest } from "../../../utils/verificationRequests";
import TextField from "../FormComponents/TextField";
import { useLoginStatus, useModal } from "../../../Hooks/contextHooks";

export default function Login() {

    const [statusContent , setStatus] = useState(<div></div>)
    const [isLoanding , setIsLoanding] = useState(false);

    const [emailData , setEmailData] = useState("");
    const [passwordData , setPasswordData] = useState("");
    
    const {isLogined , setIsLogined} = useLoginStatus();
    const setModal = useModal()

    const sendLoginRequest = async (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
      e.preventDefault();

      setIsLoanding(true);

      const statusCode = await loginRequest( emailData , passwordData);

      setIsLoanding(false);

      console.log("Ответ сервера - " + statusCode)

      switch (statusCode!){
        case 200:{
          
          setIsLogined(true);
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
            
            <TextField title="Почта" input_type='text' placeholder='Введите почту...' value={emailData} handler={setEmailData}/>
            <TextField title="Пароль" input_type='password' placeholder='Введите пароль...' value={passwordData} handler={setPasswordData}/>

            <button className="bg-passive py-2 hover:bg-blue-300 mt-4" disabled={isLoanding} onClick={(e)=>{sendLoginRequest(e)}}>
              {isLoanding ? <Loanding/> : "Вход" }
            </button>
            {statusContent}
            <button className="underline text-gray-500" disabled={isLoanding} onClick={()=>{setModal(EModalContent.REGISTRATION)}}>Регистрация</button>
        </div>
    </form>
  )
}
