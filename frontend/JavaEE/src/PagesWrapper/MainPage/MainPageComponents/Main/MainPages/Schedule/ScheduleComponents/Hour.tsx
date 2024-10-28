
export default function Hour({time , discipline}:{time: string , discipline:string}) {
  return (
    <li>
        <div className="flex justify-between w-full">
            <p>{time}</p>
            <p>{discipline}</p>
        </div>
    </li>
  )
}
