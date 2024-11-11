import { useContext } from "react";
import { LoginStatusContext, ModalContext } from "../App";

export function useModal() {
    return useContext(ModalContext);
}

export function useLoginStatus(){
    return useContext(LoginStatusContext);
}