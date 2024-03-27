import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import s from "../Style/MainPage.module.scss"
import Middle from "./Middle";

const MainPage = () => {

    return (
        <div className={s.main}>
            <Header />
            <Main />
            <Middle/>
            <Footer />
        </div>
    )

}
export default MainPage;