import { Container } from "postcss";
import Menu from "./components/menus/menu_inicio/Menu";
import Perfil from "./components/perfil/perfil"
import Contacto from "./components/contacto/Contacto";

export default function Home() {
  return (
    <main>
      <Menu/>
      <h1>Desarrollador de software especializado en IA y Software Embebido</h1>
      <div className="Perfil_titulo">
        <Perfil/>
      </div>
      <footer>
        <Contacto/>
      </footer>

    </main>
  );
}
