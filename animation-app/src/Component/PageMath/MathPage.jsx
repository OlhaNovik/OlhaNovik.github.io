import HeaderMath from "./HeaderMath";
import TestMath from "./TestMath"

import s from '../../Style/MathPageStyle/Math.module.scss'
const MathPage = () => {

    return (
        <div className={s.mathpage}>
         <HeaderMath />
         <TestMath />
        </div>
    )

}
export default MathPage;