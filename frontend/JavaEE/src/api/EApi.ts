
export enum EApi{
    DEFAULT = "http://localhost:8080/" ,
    REGISTRATION = DEFAULT + "auth/register" ,
    LOGIN = DEFAULT + "auth/login" ,
    EXAMPLE = DEFAULT + "example" , 
    PRODUCTS = DEFAULT + "products" , 
    PROFILE = DEFAULT + "profile" , 
    CHANGE_PASSWORD = PROFILE + "/change_password" ,  
    BUCKET = PROFILE + "/bucket" ,  
}