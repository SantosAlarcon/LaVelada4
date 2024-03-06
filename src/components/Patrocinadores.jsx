import Alsa from "./Patrocinadores/Alsa"

const Patrocinadores = () => {
    return (
        <section className="p-4 flex gap-5 items-center justify-center">
            <Alsa className="h-[36px]" />
            <img id="patrocinadores" className="h-[36px] text-white" src="/patrocinadores/revolut.svg" alt="Revolut" />
            <img id="patrocinadores" className="h-[36px] text-white" src="/patrocinadores/vicio.svg" alt="Vicio" />
            <img id="patrocinadores" className="h-[36px] text-white" src="/patrocinadores/prime.svg" alt="Prime" />
            <img id="patrocinadores" className="h-[36px] text-white" src="/patrocinadores/grefusa.svg" alt="Grefusa" />
            <img id="patrocinadores" className="h-[36px] text-white" src="/patrocinadores/cerave.svg" alt="CeraVe" />
            <img id="patrocinadores" className="h-[36px] text-white" src="/patrocinadores/spotify.svg" alt="Spotify" />
        </section>
    )
}

export default Patrocinadores
