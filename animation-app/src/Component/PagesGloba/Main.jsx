import s from '../../Style/StyleGobal/Main.module.scss'
import mainImg from "../../img/mainTest.png"

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
            <img className={s.main_img} src={mainImg} alt=""/>
        {/* <div className={s.main_img}>
        </div> */}

        </div>
    )

}
export default Main;