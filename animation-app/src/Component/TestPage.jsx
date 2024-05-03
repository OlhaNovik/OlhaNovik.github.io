import s from "../Style/TestPage/TestPage.module.scss"
import logoMath from '../img/math_logo.png'
import logoLogic from '../img/logic_img.png' 
import { NavLink } from "react-router-dom";

const TestPage = () => {

    return (
        <div className={s.testmenu}>
            <div className={s.header_test}>
                <p>Tests</p>
            </div>
            <div className={s.maintest}>
                <div className={s.math_block}>
                    <div className={s.foto_math}>
                        <img className={s.math_photo} src={logoMath} alt="" />
                    </div>
                    <NavLink to="/pageMath"><p>MATH</p></NavLink>
                </div>
                <div className={s.logic_block}>
                <div className={s.foto_logic}>
                <NavLink to="/pageLogic"><p>LOGIC</p></NavLink>
                        <img className={s.logic_photo} src={logoLogic} alt="" />
                    </div>
                    
                </div>
            </div>

        </div>
    )

}
export default TestPage;
