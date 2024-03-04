import "../Style/Footer.scss"
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import anime from "animejs";

const Footer = () => {

    useEffect(() => {
        const interval = setInterval(() => {
            anime({
                targets: '.button_choose',
                direction: 'alternate',
                // translateY: -30,
                translateX:500,
                easing: 'easeInOutSine',
                duration: 1500,
                delay: (el, i) => i * 1500
            });
        }, 5000); // виклик анімації кожні 5 секунд

        // Після виходу з компонента очищаємо інтервал
        return () => clearInterval(interval);
    }, []); // useEffect викликається тільки після монтування компонента
    useEffect(() => {
        const interval = setInterval(() => {
            anime({
                targets: '.button_choose2',
                direction: 'alternate',
                // translateY: -30,
                translateX:-500,
                easing: 'easeInOutSine',
                duration: 1500,
                delay: (el, i) => i * 1500
            });
        }, 5000); // виклик анімації кожні 5 секунд

        // Після виходу з компонента очищаємо інтервал
        return () => clearInterval(interval);
    }, []); // useEffect викликається тільки після монтування компонента

    return (
        <>
        <div className="footer_box">
            <div className="button_box">
                <button className="button_choose ">Test Child</button>
                <Link to="/testLogic"><button className="button_choose2 ">Test Logic</button></Link> 
            </div>
        </div>
            </>
    )

}
export default Footer;