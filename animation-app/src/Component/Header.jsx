import s from '../Style/Header.module.scss'
import logo from '../img/book_logo.png' 

const Header = () => {


    return (
        <>
            <div className={s.container_header}>
            <div className={s.container_logo}>
                <img src={logo} alt="" />
            </div>
            <div className={s.container_menu}>
                <p>Tests</p>
                <p>About Us</p>

            </div>
            </div>
        </>
    )

}
export default Header;