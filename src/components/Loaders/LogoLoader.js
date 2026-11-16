import { useId } from 'react';
import '../../components/Loaders/logoloader.css';

/*
 *   pt 1: the left-side bands fill upward
 *   pt 2: the right-side bands fill downward
 *   pt 3: the horizontal bars fill right to left
 */
const A_PIECES = [
    {
        // outer left leg + inner right arm
        points: "177,61 0,367 54,367 179,150 239,251 292,251",
        flows: [
            { d: "M20 380 L192 68", phase: 1 },
            { d: "M170 80 L274 266", phase: 2 },
        ],
    },
    {
        // outer right leg + inner bar
        points: "211,0 186,46 310,261 192,262 167,309 391,309",
        flows: [
            { d: "M185 -20 L352 288", phase: 2 },
            { d: "M400 285 L155 285", phase: 3 },
        ],
    },
    {
        // bottom bar + inner left leg
        points: "66,367 425,367 398,319 149,319 205,219 180,171",
        flows: [
            { d: "M85 370 L205 175", phase: 1 },
            { d: "M445 343 L95 343", phase: 3 },
        ],
    },
];

export default function LogoLoader({
    speed = 1,                // seconds for one full cycle
    label = "Loading...",
    fullScreen = false,
    hidden = false,
}) {
    const uid = useId().replace(/[^a-zA-Z0-9_-]/g, '');
    const base = fullScreen ? 'loader-overlay' : 'loader-inline';

    return (
        <div
            className={`${base}${hidden ? ' is-hidden' : ''}`}
            role="status"
            aria-live="polite"
        >
            <div
                className="logo-loader"
                style={{ '--speed': `${speed}s` }}
                aria-hidden="true"
            >
                <span>HER</span>

                <svg className="logo-loader__a" viewBox="0 0 425 367">
                    <defs>
                        {A_PIECES.map((piece, i) => (
                            <mask
                                key={i}
                                id={`${uid}-a${i}`}
                                maskUnits="userSpaceOnUse"
                                x="-50" y="-50" width="525" height="467"
                            >
                                {piece.flows.map((flow, j) => (
                                    <path
                                        key={j}
                                        className={`a-flow a-flow--${flow.phase}`}
                                        d={flow.d}
                                        pathLength="100"
                                    />
                                ))}
                            </mask>
                        ))}
                    </defs>

                    {/* faded "empty" A */}
                    <g className="a-base">
                        {A_PIECES.map((piece, i) => (
                            <polygon key={i} points={piece.points} />
                        ))}
                    </g>

                    {/* full-colour A, revealed band by band */}
                    <g className="a-fill">
                        {A_PIECES.map((piece, i) => (
                            <polygon
                                key={i}
                                points={piece.points}
                                mask={`url(#${uid}-a${i})`}
                            />
                        ))}
                    </g>
                </svg>

                <span style={{fontWeight: '1000'}}>I</span>
            </div>

            <span className="sr-only">{label}</span>
        </div>
    );
}