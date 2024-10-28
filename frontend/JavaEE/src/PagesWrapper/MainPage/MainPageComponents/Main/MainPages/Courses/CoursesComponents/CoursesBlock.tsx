import Course from "./Course";

export default function CoursesBlock({title}:{title:string}) {
  return (
    <div className="flex flex-col">
        <h1 className="font-bold text-2xl mb-4">{title}</h1>
        <ul className="flex flex-wrap gap-4">
            <Course title="Front-end" organisation="KnewIT" img="https://repository-images.githubusercontent.com/448644498/86dfedcb-0db8-4b96-93ef-3f5e7018ce38" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti tenetur asperiores ex aliquid excepturi, esse officiis enim repudiandae nihil deserunt minima fugit nam reprehenderit odit. Quam enim facilis ut corporis?"/>
            <Course title="Back-end" organisation="KnewIT" img="https://adcumulus.com/app/uploads/2018/03/developer_1000x523.png" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti tenetur asperiores ex aliquid excepturi, esse officiis enim repudiandae nihil deserunt minima fugit nam reprehenderit odit. Quam enim facilis ut corporis?"/>
            <Course title="Computer Science C931" organisation="IITU" img="https://avatars.mds.yandex.net/i?id=b172ba194fea6a17e86e9c9b1f6b3d9a_l-10024862-images-thumbs&n=13" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti tenetur asperiores ex aliquid excepturi, esse officiis enim repudiandae nihil deserunt minima fugit nam reprehenderit odit. Quam enim facilis ut corporis?"/>
            <Course title="UX/UI" organisation="IITU" img="https://wiki.saint-gobain.ru/%D0%BC%D0%BE%D0%B7%D0%B3.png" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti tenetur asperiores ex aliquid excepturi, esse officiis enim repudiandae nihil deserunt minima fugit nam reprehenderit odit. Quam enim facilis ut corporis?"/>
            <Course title="Golang" organisation="KnewIT" img="https://i.pinimg.com/originals/5d/2e/7f/5d2e7f3bab992bde80c9cb9e6f6cc520.jpg" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti tenetur asperiores ex aliquid excepturi, esse officiis enim repudiandae nihil deserunt minima fugit nam reprehenderit odit. Quam enim facilis ut corporis?"/>
        </ul>
    </div>
  )
}
