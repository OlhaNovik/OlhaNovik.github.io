import React, { useState, useRef } from 'react';
import anime from 'animejs';
import '../../Style/LogicPageStyle/ButtonAnimation.scss'
const SubmitButton = () => {

    const buttonRef = useRef(null);
    const progressBarRef = useRef(null);
    const pathRef = useRef(null);

    function handleClick() {
        const basicTimeline = anime.timeline({
            autoplay: false
        });

        const pathEl = pathRef.current;
        const offset = anime.setDashoffset(pathEl);
        pathEl.setAttribute("stroke-dashoffset", offset);

        basicTimeline
            .add({
                targets: ".text",
                duration: 1,
                opacity: "0"
            })
            .add({
                targets: buttonRef.current,
                duration: 1300,
                height: 10,
                width: 300,
                backgroundColor: "#2B2D2F",
                border: "0",
                borderRadius: 100
            })
            .add({
                targets: progressBarRef.current,
                duration: 2000,
                width: 300,
                backgroundColor: '#3E4044',
                easing: "linear"
            })
            .add({
                targets: buttonRef.current,
                width: 0,
                duration: 1
            })
            .add({
                targets: progressBarRef.current,
                width: 80,
                height: 80,
                position: 'absolute',
                top: '100px', // Додано top
                delay: 500,
                duration: 750,
                borderRadius: 80,
                backgroundColor: "#71DFBE"
            })
            .add({
                targets: pathEl,
                strokeDashoffset: [offset, 0],
                duration: 200,
                easing: "easeInOutSine"
            });

        basicTimeline.play();
    }

    return (
        <main>
            <div className="button" ref={buttonRef} onClick={handleClick}>
                <div className="text">Submit</div>
            </div>
            <div className="progress-bar" ref={progressBarRef}></div>
            <svg className='svg_btn' x="0px" y="0px" viewBox="0 0 25 30" style={{ enableBackground: "new 0 0 25 30" }}>
                <path className="check" ref={pathRef} d="M2,19.2C5.9,23.6,9.4,28,9.4,28L23,2" />
            </svg>
        </main>
    );
}

export default SubmitButton;