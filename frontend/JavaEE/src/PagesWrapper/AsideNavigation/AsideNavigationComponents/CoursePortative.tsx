
export default function CoursePortative({title , img}:{title:string , img:string}) {
  return (
    <li className="hover:bg-blue-300">
        <div className="flex gap-1 p-2 w-full">
            <div className="rounded-md w-10">
                <img src={img} className="rounded-md" alt="" />
            </div>
            <div className="flex flex-col ml-2">
                <p>{title}</p>
                <div className="py-2">
                    <div className="bg-WHITE rounded-full w-full h-1"></div>
                </div>
            </div>
        </div>
    </li>
  )
}
