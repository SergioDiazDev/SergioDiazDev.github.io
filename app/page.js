import { Container } from "postcss";
import Menu from "./components/menus/menu_inicio/menu";
import Perfil from "./components/perfil/perfil"

export default function Home() {
  return (
    <main>
      <Menu/>
      <h1>Desarrollador de software especializado en IA y Software Embebido</h1>
      <div className="Perfil_titulo">
        <Perfil/>
      </div>

    </main>
  );
}
