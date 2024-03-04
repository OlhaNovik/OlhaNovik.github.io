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

    const handleSwitch=()=>{
        props.setSwitch(!props.switch)
    }

    return (
        <>
            <div className={s.container_header}>
            <div onClick={handleSwitch} className={s.logo_box}>
            <GlobalSvgSelector id={colorLight}/>
            </div>
            </div>
        </>
    )

}
export default Header;