import { useState } from "react";
import { TFilterParams } from "../../Shop";

export default function FilterSearch({paramsChanges}:{paramsChanges:TFilterParams}) {

  const [tag , setTag] = useState("")

  const tagChangeHandler = (e : React.ChangeEvent<HTMLInputElement>) => {
    paramsChanges.tag = e.target.value ;
    setTag(e.target.value) ;
  }

  return (
    <div className="flex w-full">
        <input type="text" className="p-1 w-full" placeholder="Ключевое слово..." value={tag} onChange={e => tagChangeHandler(e)}/>
    </div>
  )
}
