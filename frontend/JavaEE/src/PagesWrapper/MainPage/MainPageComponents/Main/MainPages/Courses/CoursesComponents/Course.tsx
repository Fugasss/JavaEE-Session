import { Link } from "react-router-dom";

export default function Course({title , organisation , description , img}:{title:string , organisation:string , description:string , img:string}) {
  return (
    <li className="w-1/6  p-3 bg-blue-100 hover:bg-blue-300">
        <Link to={"/course"}>
        <div className="flex flex-col h-full">
            <div className="w-full h-2/3">
                <img src={img} alt="" className="w-full h-full"/>
            </div>
            <div className="flex flex-col mt-2">
                <div className="mb-2 flex items-center justify-between">
                    <h3 className="text-xl">{title}</h3>
                    <p className="text-gray-500">{organisation}</p>
                </div>
                <div className="text-sm text-gray-500 line-clamp-3">
                    <p>{description}</p>
                </div>
            </div>
        </div>
        </Link>
    </li>
  )
}
