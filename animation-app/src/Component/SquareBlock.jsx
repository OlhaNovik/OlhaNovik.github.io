import React, { useEffect } from 'react';
import anime from 'animejs';

import "../Style/SquareBlock.scss";

const SquareBlock = (props) => {

    useEffect(() => {
        
        const animation = anime({
            targets: ".footerSq .blockSq",
            rotate: 360,
            duration: 4000,
            autoplay: true,
            loop: true,
            easing: 'linear',
        });

        return () => {
            animation.pause();
        };
    }, []); 

    return (
        <div className='footerSq'>
            <div style={{ backgroundColor: props.elem.color, left: props.elem.left, top: props.elem.top, transform: `rotate(${props.elem.rotate})` }} className='blockSq'></div>
        </div>
    );
}

export default SquareBlock;

