import { useContext } from "react";
import { ModalContext } from "../../../App";
import EModalContent from "../../EModalContent";

export default function Login() {

    const setModal = useContext(ModalContext);

  return (
    <form action="" onSubmit={()=>{}} className="w-full">
        <div className="flex flex-col gap-4 w-full">
            <h1 className="font-bold text-2xl mb-5 text-center">Вход</h1>
            <p>Почта</p>
            <input type="text" className="w-full border-b-2 p-2" placeholder="Введите почту..."/>
            <p>Пароль</p>
            <input type="password" className="w-full border-b-2 p-2" placeholder="Введите пароль..."/>
            <button className="bg-blue-200 py-2 hover:bg-blue-300 mt-4" onClick={(e)=>{e.preventDefault()}}>Войти</button>
            <button className="underline text-gray-500" onClick={()=>{setModal(EModalContent.REGISTRATION)}}>Регистрация</button>
        </div>
    </form>
  )
}
