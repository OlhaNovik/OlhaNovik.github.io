import s from "../Style/Footer.module.scss"
import img from "../img/Monster.png"
const Footer = (props) => {

    const handleSwitch=()=>{
        props.setSwitch(!props.switch)
    }

    return (
        <div className={s.footer_box}>
            <div className={s.button_box}>
                <button onClick={handleSwitch} className={s.button_choose}>Choose test</button>
            </div>
            <div className={s.image_box}>
                <img className={s.img} src={img} alt="#" />
            </div>
        </div>
    )

}
export default Footer;