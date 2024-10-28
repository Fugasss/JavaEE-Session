import PlanElement from "./CourseComponents/PlanElement";

export default function Course() {
  return (
    <div className="flex justify-center">
      <div className="w-3/6 pr-16">
        <h1 className="text-2xl font-bold">Основы HTML</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quisquam maxime vitae perspiciatis enim culpa, consequuntur, reprehenderit repudiandae ea porro excepturi quam. Ut reiciendis provident quidem aut vitae? Soluta excepturi similique esse laborum magnam. Placeat fuga tempore non dolorum, magni at eum est dolor ullam quaerat repellendus quisquam fugit minus ipsum sit deleniti eligendi dolore? Officiis soluta earum, quos alias eos hic aut at aliquid velit iusto quibusdam ex ipsam blanditiis, sequi nemo amet voluptatem neque corrupti consequatur voluptate eligendi ad! Sequi amet eligendi doloribus porro saepe commodi perferendis minima nihil eveniet sunt! Vel nam ipsam cupiditate id temporibus eveniet.</p>
      </div>    
      <div className="bg-blue-100 p-10">
        <ul className="flex flex-col gap-2">
          <PlanElement text="1. Основы HTML"/>
          <div className="pl-4">
            <PlanElement text="1.1 HTML-теги"/>
            <PlanElement text="1.2 Семантика"/>
            <PlanElement text="1.3 Виртуальные деревья"/>
            <PlanElement text="1.4 Специальные теги"/>
          </div>
          <PlanElement text="2. Видео"/>
          <PlanElement text="3. Тест"/>
        </ul>
      </div>
    </div>
  )
}
