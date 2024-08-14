import './menu.css'

import Link from 'next/link';


export default function Menu() {
 return(
    <nav>
        <ul className="menu">
            <Link href="/">
                <li>Inicio</li>
            </Link>
            <li>
                <Link href="#">Proyectos</Link>
                <ul className="submenu">
                    <Link href="/">
                        <li>Proyecto 1</li>
                    </Link>
                    <Link href="/">
                        <li>Proyecto 2</li>
                    </Link>
                    <Link href="/">
                        <li>Proyecto 3</li>
                    </Link>
                </ul>
            </li>
            <Link href="/Contactos">
                <li>Contacto</li>
            </Link>
        </ul>
    </nav>
    )
}