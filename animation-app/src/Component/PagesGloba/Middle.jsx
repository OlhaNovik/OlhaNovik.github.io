import s from '../../Style/StyleGobal/Middle.module.scss'
import { NavLink } from "react-router-dom";
import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

import Letterize from 'letterizejs';

const Middle = () => {
    const buttonRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const textAnimation = () => {
            const text = textRef.current;
            if (text) {
                text.innerHTML = text.textContent.replace(/\S/g, "<span class='animatedText'>$&</span>");
    
                const animation = anime.timeline({
                    targets: '.animatedText',
                    easing: 'easeOutExpo',
                    loop: false
                });
    
                animation
                    .add({
                        rotate: function() {
                            return anime.random(-360,360)
                        },
                        translateX: function() {
                            return anime.random(-500,500)
                        },
                        translateY: function() {
                            return anime.random(-500,500)
                        },
                        duration: 5000,
                        delay: anime.stagger(20),
                    })
                    .add({
                        rotate:0,
                        translateX: 0,
                        translateY: 0,
                        duration:5000,
                        delay: anime.stagger(20)
                    });
            }
        };
    
        textAnimation();
    }, []);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    anime({
                        targets: buttonRef.current,
                        translateY: [
                            { value: -60, duration: 0 },
                            { value: 0, duration: 2000 }
                        ],
                        opacity: [
                            { value: 0, duration: 0 },
                            { value: 1, duration: 2000 }
                        ],
                        easing: 'easeInOutQuad'
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        observer.observe(buttonRef.current);

        return () => {
            observer.disconnect();
        };
    }, []);


    return (
        <>
            <div className={s.middle_container}>
                <div className={s.text_about} >
                    <div className={s.container_span} ref={textRef}>
                    <p>Standard tests do not help to learn the material? Students cannot
                        successfully pass exams? Is it difficult to get children to pass
                        the knowledge test?</p>  
                        </div>
                </div>
                <div className={s.line}></div>
                <div className={s.text_test}  >
                    <span>&nbsp; TRY THE ANIMATED TESTS
                        WHICH WILL ATTRACT ATTENTION, AND THE PASSING WILL BE
                        MORE INTERESTING AND MORE EFFICIENT&nbsp;</span>

                </div>
                <div className={s.line}></div>
                <div className={s.btn_test}>
                    <NavLink to="/testpage"><button className={s.test} ref={buttonRef} >Test now</button></NavLink>
                </div>
            </div>
        </>
    )

}
export default Middle;