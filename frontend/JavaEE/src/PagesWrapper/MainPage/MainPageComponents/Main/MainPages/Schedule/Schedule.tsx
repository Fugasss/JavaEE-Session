import Day from "./ScheduleComponents/Day";

export default function Schedule() {
  return (
    <div className="flex flex-wrap gap-6">
      <Day title="Понедельник"/>
      <Day title="Вторник"/>
      <Day title="Среда"/>
      <Day title="Чертверг"/>
      <Day title="Пятница"/>
      <Day title="Субота"/>
      <Day title="Воскресенье"/>
    </div>
  )
}
