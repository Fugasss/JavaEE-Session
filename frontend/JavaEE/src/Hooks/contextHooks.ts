import { useContext } from "react";
import { ModalContext } from "../App";

export function useModal() {
    return useContext(ModalContext);
}