import nlwUniteIcon from '../assets/nlw-unite-icon.svg'

export const Header = () => {
    return (
        <div className="flex items-center gap-5 py-2">
            <img src={nlwUniteIcon} />
            <nav className="flex items-center gap-5">
                <a className="font-medium text-sm text-zinc-300" href="">
                    Eventos
                </a>
                <a className="font-medium text-sm" href="">
                    Participantes
                </a>
            </nav>
        </div>
    )
}
