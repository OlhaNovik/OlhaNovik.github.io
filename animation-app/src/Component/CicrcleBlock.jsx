import "../Style/CircleBlock.scss"
import anime from 'animejs';
import React, { useEffect } from 'react';

const CircleBlock = (props) => {


    // const handleChange = () => {
    //     console.log('click');
    //     anime.set('.footerCircle .blockcircle', {
    //         rotate: function () { return anime.random(0, 360); },
    //     });
    // }
    useEffect(() => {
        
        const animation = anime({
            targets: ".footerCircle .blockcircle",
            rotate: 360,
            duration: 3000,
            autoplay: true,
            loop: true,
            easing: 'linear',
        });

        return () => {
            animation.pause();
        };
    }, []); 

    return (
        <div className="footerCircle">
            <div style={{ backgroundColor: props.elem.color, left: props.elem.left, top: props.elem.top, transform: `rotate(${props.elem.rotate})` }} className="blockcircle"></div>
        </div>
    )

}
export default CircleBlock;
