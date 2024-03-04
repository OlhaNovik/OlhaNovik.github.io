import "../Style/TriangleBlock.scss"
import anime from 'animejs';
import React, { useEffect } from 'react';

const TriangleBlock = (props) => {

    // const handleChange = () => {
    //     console.log('click');
    //     anime.set('.footerTr svg', {
    //         rotate: function () { return anime.random(0, 360); },
    //     });
    // }
    useEffect(() => {
        
        const animation = anime({
            targets: ".footerTr svg",
            rotate: -360,
            duration:4000,
            autoplay: true,
            loop: true,
            easing: 'linear',
        });

        return () => {
            animation.pause();
        };
    }, []); 

    return (
        <div className="footerTr">
            <div style={{ left: props.elem.left, top: props.elem.top }} className="blockTriangle">
                <svg style={{ transform: `rotate(${props.elem.rotate})` }} width="79" height="86" viewBox="0 0 79 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_109_25)">
                        <path d="M10.4437 0.0082646L74.5361 44.3609L4.07936 77.6903L10.4437 0.0082646Z" fill={props.elem.color} />
                    </g>
                    <defs>
                        <filter id="filter0_d_109_25" x="0.0793457" y="0.00830078" width="78.4568" height="85.6819" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_109_25" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_109_25" result="shape" />
                        </filter>
                    </defs>
                </svg>
            </div>

        </div>
    )

}
export default TriangleBlock;
