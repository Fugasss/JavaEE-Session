import { Route, Routes } from "react-router-dom";
import Courses from "./MainPages/Courses/Courses";
import Schedule from "./MainPages/Schedule/Schedule";
import UserCourses from "./MainPages/UserCourses/UserCourses";
import Course from "./MainPages/Course/Course";

export default function Main() {
  return (
    <main className="flex-1">
      <div>
        <Routes>
          <Route path="/" element={<Courses/>}/>
          <Route path="/user_courses" element={<UserCourses/>}/>
          <Route path="/courses" element={<Courses/>}/>
          <Route path="/schedule" element={<Schedule/>}/>
          <Route path="/course" element={<Course/>}/>
        </Routes>
      </div>
    </main>
  )
}
