import s from "../Style/Main.module.scss"
import { useEffect } from 'react';
import anime from 'animejs';
import { GlobalSvgSelector } from "../Style/GlobalSvgSelector";

const Main = () => {

    useEffect(() => {
         anime({
            targets: '.path',
            direction: 'normal',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutSine',
            duration: 700,
            delay: (el, i) => { return i * 500 }
        });
    }, []);


    return (
        <div className={s.main_container}>
            <div className={s.group_text}>
                <GlobalSvgSelector id='Text2'/>
            </div>
            <p className={s.addition_text}>Different tests for different tastes</p>

        </div>
    )

}
export default Main;