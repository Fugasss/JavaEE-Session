import { useContext } from "react";
import { ModalContext } from "../PagesWrapper/PagesWrapper";
import { LoginStatusContext } from "../App";

export function useModal() {
    return useContext(ModalContext);
}
export function useLoginStatus(){
    return useContext(LoginStatusContext);
}