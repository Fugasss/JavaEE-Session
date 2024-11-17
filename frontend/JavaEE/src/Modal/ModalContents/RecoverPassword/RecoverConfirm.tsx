import { useState } from "react";
import TextField from "../FormComponents/TextField";
import axios, { isAxiosError } from "axios";
import Loanding from "../Registration/Loanding";
import { EApi } from "../../../api/EApi";
import { parsePath, useNavigate, useSearchParams } from "react-router-dom";
import { ERoutes } from "../../../api/ERoutes";
import { useModal } from "../../../Hooks/contextHooks";
import EModalContent from "../../EModalContent";

export default function RecoverConfirm() {
    const navigator = useNavigate()

    const [newPassword , setNewPassword] = useState("")
    const [newPasswordCheck , setNewPasswordCheck] = useState("")

    const [requestStatus , setRequestStatus] = useState("")
    const [isLoanding , setIsLoanding] = useState(false)

    const [searchParams , setParams] = useSearchParams()
    const setModal = useModal()

    const sendRecoverRequest = async (e :React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setIsLoanding(true);
        try{
            if(newPassword === newPasswordCheck){
                const token = searchParams.get("token")
                const response = await axios.post(EApi.RECOVER_CONFIRM , {token , password : newPassword})
                setRequestStatus("Запись восстановлена !")
                navigator(ERoutes.PROFILE)
                setModal(EModalContent.NONE)
            }
            else{
                setRequestStatus("Пароли не совпадают")
            }
        }
        catch(err){
            if(isAxiosError(err)){
                console.log(err)
                setRequestStatus("Ошибка");
            }
        }
        finally{
            setIsLoanding(false)
        }
    }

  return (
    <form action="" className="flex flex-col gap-2">
        <TextField title="Новый пароль" input_type="password" placeholder="Новый пароль" value={newPassword} handler={setNewPassword}/>
        <TextField title="Повторите пароль" input_type="password" placeholder="Повторите пароль" value={newPasswordCheck} handler={setNewPasswordCheck}/>
        <button className="bg-passive p-3" onClick={(e)=>{sendRecoverRequest(e)}}>{isLoanding ? <Loanding/> : <p>Восстановить</p>}</button>
        <p>{requestStatus}</p>
    </form>
  )
}
