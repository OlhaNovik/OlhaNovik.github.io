import s from "../../Style/TestPage/TestPage.module.scss"
import logoMath from '../../img/math_logo.png'
import logoLogic from '../../img/logic_img.png'
import { NavLink } from "react-router-dom";
import React, { useEffect, useRef } from 'react';
import anime from 'animejs';


import Letterize from 'letterizejs';

const TestPage = () => {
    let animation;

    const handleMouseEnter = (target) => {
        const test = new Letterize({
            targets: target,
            leading: true,
        });

        animation = anime.timeline({
            targets: test.listAll,
            delay: anime.stagger(50),
            // fontSize: "96px",
            loop: false
        });

        animation
            .add({
                translateY: -40
            })
            .add({
                translateY: 0
            });

        animation.play();
    };

    const handleMouseLeave = () => {
        if (animation) {
            animation.reverse(); // Зворотнє відтворення анімації
        }
    };
    
    return (

            <div className={s.maintest}>
                <div className={s.math_block}>
                    <div className={s.foto_math}>
                        {/* <img className={s.math_photo} src={logoMath} alt="" /> */}
                    </div>
                    <NavLink
                to="/pageMath"
                id="animateMath"
                onMouseEnter={() => handleMouseEnter("#animateMath")}
                onMouseLeave={handleMouseLeave}
            >
                <p>MATH</p>
            </NavLink>
                </div>
                <div className={s.logic_block}>
                    <div className={s.foto_logic}>
                    <NavLink
                to="/pageLogic"
                id="animateLogic"
                onMouseEnter={() => handleMouseEnter("#animateLogic")}
                onMouseLeave={handleMouseLeave}
            >
                <p className={s.logic_text}>LOGIC</p>
            </NavLink>
                        {/* <img className={s.logic_photo} src={logoLogic} alt="" /> */}
                    </div>
                </div>
            </div>

    );
}

export default TestPage;
