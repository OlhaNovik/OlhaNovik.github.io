import HeaderLogic from "./Header_logic";
import TestLogic from "./TestLogic"

import s from '../../Style/LogicPageStyle/Logic.module.scss'

const LogicPage = () => {

    return (
        <div className={s.logicpage}>
        <HeaderLogic />
        <TestLogic />
       </div>
    )

}
export default LogicPage;