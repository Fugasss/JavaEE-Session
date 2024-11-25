import { useState } from "react";
import TextField from "../FormComponents/TextField";
import Loanding from "../Registration/Loanding";
import axios, { isAxiosError } from "axios";
import axiosApi from "../../../utils/axiosApi";
import { EApi } from "../../../api/EApi";

export default function RecoverPassword() {

  const [emailForRecover , setEmailForRecover] = useState("");
  const [requestStatus , setRequestStatus] = useState("");
  const [isLoanding , setIsLoanding] = useState(false);


  const sendRecoverRequest = async (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setIsLoanding(true)
    try{
      const result = await axios.post(EApi.RECOVER,{ email : emailForRecover})
      console.log("Recover sended !!!")
      setRequestStatus("Запрос отправлен на почту")
    }
    catch(err){
      if(isAxiosError(err)){
        console.log("Error with RECOVER :::" + err.code)
        setRequestStatus("Ошибка :" + err.code)
      }
    }
    finally{
      setIsLoanding(false)
    }
  }


  return (
    <form className="flex flex-col gap-4 w-full">
        <h1 className="font-bold text-2xl mb-5 text-center">Восстановление записи</h1>
        <TextField input_type="text" placeholder="Ваша почта..." title="Введите почту" value={emailForRecover} handler={setEmailForRecover}/>
        <button className="bg-passive p-2" onClick={(e) => {sendRecoverRequest(e)}}>{isLoanding ? <Loanding/> : <>Отправить запрос</>}</button>
        <p className="bg-warn">{requestStatus}</p>
    </form>
  )
}
