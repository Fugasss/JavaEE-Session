
export enum EApi{
    DEFAULT = "http://localhost:8080/" ,

    REGISTRATION = DEFAULT + "auth/register" ,
    LOGIN = DEFAULT + "auth/login" ,
    VERIFY_TOKEN = DEFAULT + "auth/verify" ,
    RECOVER = DEFAULT + "auth/recover-request",
    RECOVER_CONFIRM = DEFAULT + "auth/recover-confirmation",

    PRODUCTS = DEFAULT + "products" , 

    PROFILE = DEFAULT + "profile" , 
    CHANGE_PASSWORD = PROFILE + "/change-password" ,  
    CHANGE_AVATAR = PROFILE + "/change-icon" ,
    BUCKET = PROFILE + "/bucket" ,  

    ADMIN = DEFAULT + "admin/product"
}