import React, { useEffect } from 'react';
import anime from 'animejs';
import s from '../../Style/TestPage/MenuPage.module.scss'
import TestPage from './TestPage';


const MenuPage = () => {


    useEffect(() => {
        const generate = () => {
            anime({
                targets: '#block',
                translateX: () => anime.random(-700, 700),
                translateY: () => anime.random(-700, 700),
                scale: () => anime.random(1, 5)
            });
        };

        generate();
    }, []);

    const handleClick = () => {
        anime({
            targets: '#block',
            translateX: () => anime.random(-700, 700),
            translateY: () => anime.random(-700, 700),
            scale: () => anime.random(1, 5)
        });
    }

    return (
        <div className={s.global}>
            <div id="container" className={s.container_back} onClick={handleClick}>
                {[...Array(100)].map((_, index) => (
                    <div key={index} className={s.block} id="block" />
                ))}
            </div>

            <TestPage />
        </div>)
}

export default MenuPage;