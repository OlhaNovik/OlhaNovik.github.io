import s from '../../Style/MathPageStyle/Math.module.scss'

const TestMath = () => {

    const test = {
        one: "1.Вкажіть парну функцію:",
        two: "2.Вкажіть функцію з рисунку:",
        three: "Яка з наведених графіків є Y=",

    }

    return (
        <div className={s.test_box}>
          <div className={s.first_test}> </div>  
          <div className={s.two_test}> </div>  
          <div className={s.three_test}> </div>  
          <div className={s.four_test}> </div>  
        </div>
    )

}
export default TestMath;