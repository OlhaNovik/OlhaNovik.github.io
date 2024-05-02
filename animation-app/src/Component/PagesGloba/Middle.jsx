import s from '../../Style/StyleGobal/Middle.module.scss'
import { NavLink } from "react-router-dom";

const Middle = () => {


    return (
        <>
            <div className={s.middle_container}>
                <div className={s.text_about}>
                    <p>Standard tests do not help to learn the material? Students cannot
                        successfully pass exams? Is it difficult to get children to pass
                        the knowledge test?</p>
                </div>
                <div className={s.line}></div>
                <div className={s.text_test}>
                    <p>TRY THE ANIMATED TESTS
                        WHICH WILL ATTRACT ATTENTION, AND THE PASSING WILL BE
                        MORE INTERESTING AND MORE EFFICIENT
                    </p>
                </div>
                <div className={s.line}></div>
                <div className={s.btn_test}>
                <NavLink to="/testpage"><button className={s.test}>Test now</button></NavLink>
                </div>
            </div>
        </>
    )

}
export default Middle;