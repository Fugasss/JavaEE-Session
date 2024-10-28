import Hour from "./Hour"

export default function Day( {title} : {title:string}) {
  return (
    <div className="flex flex-col w-2/12">
        <h2 className="font-bold text-lg bg-blue-300 w-full">{title}</h2>
        <ul className="flex flex-col gap-1 px-2 border-
        2">
            <Hour time="8:00" discipline="DASDA"/>
            <Hour time="9:00" discipline=""/>
            <Hour time="10:00" discipline=""/>
            <Hour time="11:00" discipline=""/>
            <Hour time="12:00" discipline=""/>
            <Hour time="13:00" discipline=""/>
            <Hour time="14:00" discipline=""/>
            <Hour time="15:00" discipline=""/>
            <Hour time="16:00" discipline=""/>
            <Hour time="17:00" discipline=""/>
            <Hour time="18:00" discipline=""/>
            <Hour time="19:00" discipline=""/>
            <Hour time="20:00" discipline=""/>
            <Hour time="21:00" discipline=""/>
        </ul>
    </div>
  )
}
