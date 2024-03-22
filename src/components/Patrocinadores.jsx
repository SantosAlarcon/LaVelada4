import Alsa from "./Patrocinadores/Alsa"
import "../styles/Patrocinadores.css"
import Revolut from "./Patrocinadores/Revolut"
import Vicio from "./Patrocinadores/Vicio"
import Prime from "./Patrocinadores/Prime"
import Spotify from "./Patrocinadores/Spotify"
import CeraVe from "./Patrocinadores/CeraVe"
import Grefusa from "./Patrocinadores/Grefusa"
import Maxibon from "./Patrocinadores/Maxibon"
import ElPozo from "./Patrocinadores/ElPozo"

const Patrocinadores = () => {
    return (
        <section className="patrocinadores__container">
            <Alsa className="patrocinadores__logo" alt="Alsa" />
            <Revolut className="patrocinadores__logo" alt="Revolut" />
            <Vicio className="patrocinadores__logo" alt="Vicio" />
            <Prime className="patrocinadores__logo" alt="Prime" />
            <Grefusa className="patrocinadores__logo" alt="Grefusa" />
            <CeraVe className="patrocinadores__logo" alt="CeraVe" />
            <Spotify className="patrocinadores__logo" alt="Spotify" />
            <Maxibon className="patrocinadores__logo" alt="Maxibon" />
            <ElPozo className="patrocinadores__logo" alt="ElPozoKingUpp" />
        </section>
    )
}

export default Patrocinadores
