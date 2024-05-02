import s from '../../Style/LogicPageStyle/Logic.module.scss'

const TestLogic = () => {

    const test = {
        one: "1.Виберіть номер місця, на якому стоїть автомобіль:",
        two: "2.У ряд лежать 8 олівців різного кольору.  Синій - третій зліва. Жовтий - четвертий справа.:",
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
export default TestLogic;