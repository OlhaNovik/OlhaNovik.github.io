import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { useState } from "react";
import s from "../Style/MainPage.module.scss"

const MainPage = () => {
    const [light,SetLight]= useState(false);
    console.log(light);

    return (
        <div className={s.main}>
        <Header switch={light} setSwitch={SetLight}/>
        <Main/>
        <Footer switch={light} setSwitch={SetLight}/>
        </div>
    )

}
export default MainPage;