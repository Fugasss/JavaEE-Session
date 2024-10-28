import CoursesBlock from "./CoursesComponents/CoursesBlock";

export default function Courses() {
  return (
    <div className="flex flex-col gap-4">
        <CoursesBlock title="Рекомендуемые курсы"></CoursesBlock>
        <CoursesBlock title="Популярные курсы"></CoursesBlock>
    </div>
  )
}
