import axios from "axios";
import { EApi } from "../api/EApi";

export class Verificator{

    registrationRequest = async () => {
        try {
            const response =  axios.get(EApi.default);
            console.log("Response:", response);
            return response.status;
        } catch (error) {
            console.log("Error:", error);
            return 500; 
        }
    };
}