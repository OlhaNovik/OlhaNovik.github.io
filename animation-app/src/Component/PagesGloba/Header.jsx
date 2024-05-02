import s from '../../Style/StyleGobal/Header.module.scss'
import logo from "../../img/book_logo.png"
import { NavLink } from "react-router-dom";

const Header = () => {


    return (
        <>
            <div className={s.container_header}>
            <div className={s.container_logo}>
                <img className={s.logo_img} src={logo} alt="" />
            </div>
            <div className={s.container_menu}>
            <NavLink to="/testpage"><p className={s.testpage}>Tests</p></NavLink>
            <NavLink to="/pageAbout"><p>About Us</p></NavLink>
            </div>
            </div>
        </>
    )

}
export default Header;