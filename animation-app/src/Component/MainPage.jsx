import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { useState } from "react";
import SquareBlock from "./SquareBlock"
import TriangleBlock from "./TriangleBlock";
import CircleBlock from "./CicrcleBlock";
import s from "../Style/MainPage.module.scss"

const MainPage = () => {
    const [light, SetLight] = useState(false);
    console.log(light);
    const figure = {
        circle: [
            { color: "#EFA6D4", left: 500, top: 110 },
            { color: "#E5E864", left: 840, top: 40 },
            { color: "#5F6DE5", left: 1200, top: 155},
            { color: "#CA75DF", left: 1200, top: 400},
            { color: "#E5E864", left: 1150, top: 600 }
        ],
        square: [
            { color: "#5F6DE5", left: 350, top: 50, rotate: '65deg' },
            { color: "#84BE70", left: 970, top: 90, rotate: '45deg' },
            { color: "#E48C70", left: 1350, top: 45, rotate: '75deg' },
            { color: "#EFA6D4", left: 1300, top: 270, rotate: '40deg' },
            { color: "#8CCEDD", left: 1300, top: 640, rotate: '140deg' }],
        triangle: [
            { color: "#E48C70", left: 220, top: 80, rotate: '0deg' },
            { color: "#A17373", left: 680, top: 90, rotate: '55deg' },
            { color: "#F2AF70", left: 1100, top: 45, rotate: '150deg' },
            { color: "#A66D92", left: 1330, top: 480, rotate: '40deg' },
            { color: "#5F6DE5", left: 980, top: 600, rotate: '140deg' }
        ]
    }
    return (
        <div className={s.main}>
            {figure.square.map((el, index) => {
                return <SquareBlock elem={el} key={index} />;
            })}
            {figure.circle.map((el, index) => {
                return <CircleBlock elem={el} key={index} />;
            })}
            {figure.triangle.map((el, index) => {
                return <TriangleBlock elem={el} key={index} />;
            })}
            <Header switch={light} setSwitch={SetLight} />
            <Main />
            <Footer switch={light} setSwitch={SetLight} />
        </div>
    )

}
export default MainPage;