
type TTextFieldProps = {
    title? : string ,
    input_type : string , 
    placeholder : string , 
    value : string | number ,
    handler : Function , 
}

export default function TextField({title , input_type , placeholder , value , handler}:TTextFieldProps) {
  return (
    <>
    <p>{title}</p>  
    <input type={input_type} className="w-full border-b-2 p-2" 
            placeholder={placeholder} 
            value={value}
            onChange={ e=> handler(e.target.value)}/>
    </>
  )
}
