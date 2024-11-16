
export enum EApi{
    DEFAULT = "http://localhost:8080/" ,
    REGISTRATION = DEFAULT + "auth/register" ,
    LOGIN = DEFAULT + "auth/login" ,
    VERIFY_TOKEN = DEFAULT + "auth/verify" ,
    EXAMPLE = DEFAULT + "example" , 
    PRODUCTS = DEFAULT + "products" , 
    PROFILE = DEFAULT + "profile" , 
    CHANGE_PASSWORD = PROFILE + "/change-password" ,  
    CHANGE_AVATAR = PROFILE + "/change-icon" ,
    BUCKET = PROFILE + "/bucket" ,  
}