import { Trio } from 'ldrs/react';
import 'ldrs/react/Trio.css';
import './style.css';
import logoImg from '../../img/logo.png';
import homeTitle from '../../img/home-title.png';


export default function TrioLoader({
    size = 50,
    label = "Loading...",
    fullScreen = false,
    hidden = false,
    background = homeTitle,
    logo = logoImg,
}) {
    const bg = fullScreen ? background : null;
    const showLogo = fullScreen ? logo : null;
    const base = fullScreen ? 'loader-overlay' : 'loader-inline';

    return (
        <div
            className={`${base}${hidden ? ' is-hidden' : ''}`}
            style={bg ? { backgroundImage: `url(${bg})` } : undefined}
            role="status"
            aria-live="polite"
        >
            {showLogo && <img className="loader-logo" src={showLogo} alt="HerAI" />}
            <Trio size={size} speed={1.3} color="black" />
            <span className="sr-only">{label}</span>
        </div>
    );
}
