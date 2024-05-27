import s from '../../Style/StyleGobal/Main.module.scss'
import mainImg from "../../img/mainTest.png"
import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

const Main = () => {
    const textRef = useRef(null);

    useEffect(() => {
        const textAnimation = () => {
            return new Promise((resolve) => {
                const text = textRef.current;
                if (text) {
                    text.innerHTML = text.textContent.replace(/\S/g, "<span class='animated'>$&</span>");

                    anime.timeline({ loop: false })
                        .add({
                            targets: '.animated',
                            translateY: [-600, 0],
                            scale: [10, 1],
                            opacity: [0, 1],
                            easing: 'easeOutExpo',
                            duration: 1500,
                            delay: anime.stagger(100),
                            complete: resolve,
                        });
                } else {
                    resolve();
                }
            });
        };

        const svgAnimation = () => {
            return new Promise((resolve) => {
                anime({
                    targets: '.path',
                    opacity: 1,
                    strokeDashoffset: [anime.setDashoffset, 0],
                    easing: 'easeInOutSine',
                    duration: 700,
                    delay: (el, i) => i * 500,
                    complete: (anim) => {
                        document.querySelectorAll('.path').forEach((path) => {
                            path.setAttribute('fill', 'black');
                            path.setAttribute('stroke', 'none');
                        });
                        resolve();
                    },
                });
            });
        };

        const imgAnimation = () => {
            return new Promise((resolve) => {
                anime({
                    targets: '#main_img',
                    opacity: 1,
                    scale: [0, 1],
                    duration: 500,
                    easing: 'easeInOutQuad',
                    delay: 400,
                    rotate: "-20deg",
                    complete: resolve,
                });
            });
        };

        const runAnimations = async () => {
            await textAnimation();
            await svgAnimation();
            await imgAnimation();
        };

        runAnimations();

        return () => {
            anime.remove('.animated');
            anime.remove('.path');
            anime.remove('#main_img');
        };
    }, []);



    return (
        <div className={s.main_container}>
            <div className={s.text}>
                <div className={s.main_txt} ref={textRef}>
                    <p>Different tests for different tastes</p>
                </div>
                <div>
                    <p className={s.additional_text}  >

                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                            width="326.000000pt" height="54.000000pt" viewBox="0 0 326.000000 54.000000"
                            preserveAspectRatio="xMidYMid meet">

                            <g transform="translate(0.000000,54.000000) scale(0.100000,-0.100000)"
                                fill="#000000" stroke="none">
                                <path className="path" d="M162 511 c-35 -36 -114 -173 -136 -232 -10 -25 -16 -63 -14 -85 3
-35 6 -39 32 -42 16 -2 34 2 40 9 8 9 5 10 -15 5 -85 -20 -47 122 75 284 53
69 64 90 50 90 -3 0 -18 -13 -32 -29z"  stroke="black" strokeWidth="7" fill='none' opacity='0' />
                                <path className="path" d="M170 301 c-38 -40 -58 -95 -47 -126 11 -28 55 -29 107 -3 45 22 50
23 50 8 0 -27 24 -31 64 -11 28 15 36 16 40 5 7 -19 51 -17 83 3 25 17 25 17
19 -5 -10 -31 6 -27 27 6 38 62 130 144 152 136 15 -6 21 7 9 19 -9 8 -54 -16
-95 -50 -18 -15 -30 -21 -27 -13 3 8 9 23 13 33 15 36 -11 14 -30 -26 -20 -42
-94 -107 -121 -107 -18 0 -18 30 1 54 31 41 13 37 -35 -8 -48 -45 -73 -56 -85
-36 -9 14 23 69 58 102 36 32 73 37 80 11 4 -13 5 -12 6 5 0 12 -5 25 -13 28
-23 9 -83 -25 -112 -63 -40 -52 -101 -93 -141 -93 -33 0 -34 1 -31 37 3 32 6
37 33 40 42 5 80 35 80 64 0 42 -40 37 -85 -10z m70 0 c-9 -19 -67 -48 -76
-39 -2 3 11 20 31 37 38 33 63 34 45 2z"  stroke="black" strokeWidth="7" fill='none' opacity='0' />
                                <path className="path" d="M794 328 c-10 -6 -37 -27 -58 -47 -27 -25 -37 -30 -31 -16 32 86 14
68 -35 -34 -38 -78 -41 -109 -5 -54 30 44 97 114 127 129 15 8 28 13 28 11 0
-3 -11 -30 -26 -62 -14 -32 -23 -64 -20 -71 6 -16 36 -19 36 -3 0 5 -4 7 -10
4 -16 -10 -12 23 9 63 29 57 33 79 18 85 -7 3 -22 0 -33 -5z"  stroke="black" strokeWidth="7" fill='none' opacity='0' />
                                <path className="path" d="M1105 328 c-11 -6 -37 -27 -57 -46 -39 -37 -47 -37 -27 -1 6 11 8 25
6 32 -2 7 -12 -4 -22 -23 -22 -44 -62 -88 -97 -106 -59 -31 -63 -9 -13 65 34
49 43 71 28 71 -11 0 -49 -58 -68 -103 -28 -67 9 -83 79 -34 l28 20 -12 -22
c-17 -32 -1 -41 18 -11 26 41 141 152 151 145 6 -3 -1 -28 -14 -58 -30 -64
-32 -87 -5 -87 17 0 18 3 9 18 -8 13 -6 28 10 65 31 72 26 96 -14 75z"  stroke="black" strokeWidth="7" fill='none' opacity='0' />
                                <path className="path" d="M956 378 c-9 -12 -13 -24 -11 -27 6 -5 45 29 45 41 0 15 -19 8 -34
-14z"  stroke="black" strokeWidth="7" fill='none' opacity='0' />
                                <path className="path" d="M1321 333 c-8 -15 -12 -16 -22 -5 -7 6 -21 12 -31 12 -27 0 -84 -56
-102 -100 -29 -73 13 -116 72 -74 28 19 28 16 -6 -59 -32 -69 -54 -92 -78 -83
-12 5 -15 16 -12 46 4 47 -7 54 -17 10 -5 -21 -2 -39 9 -55 35 -53 77 -18 126
105 18 47 46 111 62 142 15 32 28 62 28 68 0 16 -18 12 -29 -7z m-32 -35 c11
-30 -7 -66 -54 -107 -29 -25 -40 -30 -51 -20 -18 15 -18 33 2 72 23 45 54 77
76 77 10 0 22 -10 27 -22z"  stroke="black" strokeWidth="7" fill='none' opacity='0' />
                                <path className="path" d="M1575 341 c-83 -51 -119 -162 -59 -185 24 -9 75 2 104 24 24 18 24
18 35 -3 12 -25 44 -25 82 0 21 14 23 14 23 -1 0 -23 51 -21 84 5 28 22 32 19
16 -12 -16 -29 5 -23 25 8 30 44 97 114 127 129 15 8 28 13 28 11 0 -3 -11
-30 -26 -62 -27 -61 -26 -85 3 -84 11 0 13 3 6 6 -19 7 -16 24 12 84 17 39 21
57 14 66 -14 16 -40 3 -93 -46 -27 -25 -37 -30 -31 -16 16 44 18 58 7 51 -7
-4 -12 -14 -12 -22 0 -20 -67 -92 -103 -110 -40 -21 -51 -6 -27 39 22 41 10
51 -16 12 -17 -26 -73 -65 -93 -65 -27 0 -9 52 32 95 43 45 87 60 87 30 0 -8
5 -15 10 -15 15 0 12 26 -5 40 -22 18 -54 3 -120 -60 -79 -75 -103 -90 -142
-90 -27 0 -34 5 -39 25 -9 35 12 79 53 116 39 34 68 35 67 1 -1 -24 11 -30 19
-8 6 14 -18 56 -31 56 -4 0 -20 -8 -37 -19z"  stroke="black" strokeWidth="7" fill='none' opacity='0' />




                                <path className="path" d="M2320 453 c-26 -33 -90 -166 -116 -240 -18 -52 -18 -53 1 -67 28 -21
36 -20 86 14 49 32 92 98 87 133 -5 37 -58 35 -102 -4 l-36 -31 21 48 c29 69
79 154 90 154 5 0 9 5 9 10 0 18 -18 10 -40 -17z m38 -176 c2 -20 -8 -38 -46
-76 -51 -53 -86 -65 -95 -32 -6 23 58 110 93 128 33 17 44 12 48 -20z"  stroke="black" strokeWidth="7" fill='none' opacity='0' />

                                <path className="path" d="M2461 314 c-39 -32 -61 -73 -61 -112 0 -64 65 -67 145 -6 62 48 51
55 -15 10 -76 -52 -130 -48 -116 9 5 18 15 26 41 31 36 6 89 57 82 78 -7 21
-45 17 -76 -10z m59 2 c0 -17 -46 -56 -66 -56 -22 0 -16 16 17 44 34 29 49 33
49 12z"  stroke="black" strokeWidth="7" fill='none' opacity='0' />
                                <path className="path" d="M2843 428 c-123 -130 -244 -403 -188 -424 41 -16 92 63 83 127 -4 27
0 32 36 51 46 23 76 47 76 60 0 5 -15 -2 -33 -16 -40 -31 -104 -59 -110 -48
-9 14 75 148 127 202 72 76 82 90 64 90 -7 0 -32 -19 -55 -42z m-115 -300 c2
-10 -6 -38 -17 -63 -15 -33 -25 -45 -42 -45 -19 0 -21 4 -16 29 12 59 36 103
54 99 10 -2 19 -11 21 -20z"  stroke="black" strokeWidth="7" fill='none' opacity='0' />

                                <path className="path" d="M3230 332 c-8 -2 -35 -21 -59 -41 -28 -22 -42 -29 -38 -18 4 9 10 24
13 32 3 8 2 15 -4 15 -6 0 -16 -16 -22 -35 -12 -36 -102 -125 -126 -125 -20 0
-17 23 12 96 14 36 24 68 21 70 -2 3 -18 -20 -35 -50 -30 -52 -86 -106 -110
-106 -18 0 -14 36 9 91 27 63 19 75 -10 14 -23 -50 -28 -111 -8 -118 15 -5 45
9 75 36 l22 20 0 -31 c0 -44 15 -48 61 -17 38 25 40 25 34 6 -10 -34 2 -25 46
34 43 57 121 123 127 106 2 -5 -6 -28 -17 -50 -25 -48 -28 -91 -6 -91 17 0 20
17 4 22 -6 2 0 25 15 58 34 73 33 95 -4 82z"  stroke="black" strokeWidth="7" fill='none' opacity='0' />
                            </g>
                        </svg>
                    </p>
                </div>
            </div>
            <img id="main_img" className={s.main_img} src={mainImg} alt="" style={{ opacity: 0 }} />

        </div>
    )

}
export default Main;