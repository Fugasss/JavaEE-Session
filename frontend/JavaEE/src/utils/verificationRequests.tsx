import axios from "axios";
import { setCookie } from "./cookie";
import { EApi } from "../api/EApi";

const verificationRequest = async (email:string , password : string , url : string) => {
    try {

        const response = await axios.post(url , {email , password } );

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

export const registrationRequest = async (email:string , password : string) => {
    return verificationRequest(email , password , EApi.REGISTRATION);
}

export const loginRequest = async (email:string , password : string) => {
    return verificationRequest(email , password , EApi.LOGIN);
}