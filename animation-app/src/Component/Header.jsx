import s from '../Style/Header.module.scss'
import { useState, useEffect } from "react";
import { GlobalSvgSelector } from "../Style/GlobalSvgSelector.jsx";
const Header = (props) => {
    const [colorLight,SetcoloLight] =useState('white_logo')

    useEffect(() => {
        if (props.switch) {
            SetcoloLight('yellow_logo');
        } else {
            SetcoloLight('white_logo');
        }
    }, [props.switch]);

    return (
        <>
            <div className={s.container_header}>
            <div className={s.logo_box}>
            <GlobalSvgSelector id={colorLight}/>
            </div>
            <div className={s.group_head}>
            <p>Test</p>
            <p>About us</p>
            </div>
            </div>
        </>
    )

}
export default Header;