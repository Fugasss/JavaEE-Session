import { Link } from "react-router-dom";

export default function NavElement({title , link}:{title : string , link:string}) {
  return ( 
    <li className="hover:bg-blue-300 w-full">
        <Link to={link}>
            <div className="flex justify-center items-center">
               <p>{title}</p> 
            </div>
        </Link>
    </li>
  )
}
