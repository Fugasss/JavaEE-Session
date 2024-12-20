import axios from "axios";
import { EApi } from "../api/EApi";
import axiosApi from "./axiosApi";

const verificationRequest = async (email:string , password : string , url : string) => {
    try {

        const response = await axios.post(url , {email , password } );

        const token : {jwt : string} = response.data;
        localStorage.setItem("token" , token.jwt);

      console.log(response.data)

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

export const verifyToken = async () => {
  try {
    const response = await axiosApi.get(EApi.VERIFY_TOKEN);
    console.log(response)
    return true;

  } catch (error) {

    if(axios.isAxiosError(error) && error.response){
      
      console.log("Ошибка с сервера - :", error.response);
      return false; 
    }
    else{
      return false; 
    }
  }
}

export const registrationRequest = async (email:string , password : string) => {
    return verificationRequest(email , password , EApi.REGISTRATION);
}

export const loginRequest = async (email:string , password : string) => {
    return verificationRequest(email , password , EApi.LOGIN);
}