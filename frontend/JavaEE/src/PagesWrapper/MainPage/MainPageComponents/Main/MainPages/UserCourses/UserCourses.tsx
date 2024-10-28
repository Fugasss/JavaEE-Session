import CoursesBlock from "../Courses/CoursesComponents/CoursesBlock";

export default function UserCourses() {
  return (
    <div className="flex flex-col gap-4">
        <CoursesBlock title="Идут сейчас"/>
        <CoursesBlock title="Пройдены"/>
    </div>
  )
}
