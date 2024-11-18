import NavElement from "./NavElement";
import Title from "./Title";

export default function Navigation() {
  return (
    <nav className="w-full flex items-center gap-3">
      <Title/>
      <ul className="flex gap-2 w-full">
        <NavElement title="Комплетующие" link="/"/>
        <NavElement title="Периферия" link="/"/>
        <NavElement title="Сборка" link="/building"/>
      </ul>
    </nav>
  )
}
