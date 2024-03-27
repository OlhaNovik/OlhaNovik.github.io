import s from "../Style/Main.module.scss"
import mainImg from "../img/mainTest.png"

const Main = () => {


    return (
        <div className={s.main_container}>
            <div className={s.text}>
                <div className={s.main_text}>
                    <p>Different tests for different tastes</p>
                </div>
                <div>
                    <p className={s.additional_text}>learning can be fun</p>
                </div>
            </div>
        <div className={s.main_img}>
            <img src={mainImg} alt=""/>
        </div>

        </div>
    )

}
export default Main;