import "./contacto.css";
import Image from "next/image";

export default function Contacto() {
    return(
        <div className="Contacto_page">
            <h1>Redes Sociales: </h1>
            <section className="Contacto">
                <a href="mailto:SergioDiazDev@gmail.com" target="mailto:SergioDiazDev@gmail.com">
                    <img width="48" height="48" src="https://img.icons8.com/color/48/gmail-new.png" alt="gmail-new"/>
                </a>
                <a href="https://www.linkedin.com/in/sergiodiazdev/" target="_blank">
                    <img width="48" height="48" src="https://img.icons8.com/fluency/48/linkedin.png" alt="linkedin"/>
                </a>
            </section>
            <h1>Entornos Colaborativos: </h1>
            <section className="Contacto">
                <a href="https://www.github.com/sergiodiazdev/" target="_blank">
                    <img width="48" height="48" src="https://img.icons8.com/sf-regular/48/github.png" alt="github"/>
                </a>
                <a href="https://stackoverflow.com/users/20049375/sergio-diaz-dev" target="_blank">
                    <img width="48" height="48" src="https://img.icons8.com/color/48/stackoverflow.png" alt="stackoverflow"/>
                </a>
                <a href="https://www.kaggle.com/sdiazdev" target="_blank">
                    <img width="48" height="48" src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/external-kaggle-an-online-community-of-data-scientists-and-machine-learners-owned-by-google-logo-shadow-tal-revivo.png" alt="external-kaggle-an-online-community-of-data-scientists-and-machine-learners-owned-by-google-logo-shadow-tal-revivo"/>
                </a>
            </section>
        </div>
    )
}
