import s from "../Style/Main.module.scss"
import { useSpring, animated } from '@react-spring/web'
import { useState, useEffect } from 'react';

const Main = () => {

    const [clicked, setClicked] = useState(false);
    const [rotation, setRotation] = useState(0);
    const [props, api] = useSpring(() => ({
        transform: `translateY(0rem) translateX(0rem) rotate(${rotation}turn)`,
    }));

    const handleClick = () => {
        setClicked(!clicked);
        const targetRotation = clicked ? 0 : 0.25;
        api.start({
            transform: `translateY(${clicked ? '0rem' : '9rem'}) translateX(${clicked ? '0rem' : '-8rem'}) rotate(${targetRotation}turn)`,
            onRest: () => {
                if (!clicked) {
                    setRotation(targetRotation);
                }
            },
        });
    };


    return (
        <div className={s.main_container}>
            <div className={s.group_text}>
                <p className={s.main_text} onClick={handleClick}>QUESTION</p>
                <animated.p className={s.main_text2} style={props}>NAIRE</animated.p>
            </div>

            <p className={s.addition_text}>Different tests for different tastes</p>

        </div>
    )

}
export default Main;