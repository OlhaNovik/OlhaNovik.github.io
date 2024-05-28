import './App.css';
import {Routes, Route, HashRouter} from "react-router-dom";
import MainPage from './Component/PagesGloba/MainPage';
import TestPage from './Component/AdditionalPage/TestPage';
import MathPage from './Component/PageMath/MathPage';
import LogicPage from './Component/Pagelogic/LogicPage';
import AboutPage from './Component/AdditionalPage/AboutPage';
import MenuPage from './Component/AdditionalPage/MenuPage';

function App() {
  return (
    <div className="App">
        <HashRouter>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        {/* <Route path="/testpage" element={<TestPage />}/> */}
        <Route path="/testpage" element={<MenuPage />}/>
        <Route path="/pageMath" element={<MathPage/>}/>
        <Route path="/pageLogic" element={<LogicPage/>}/>
        <Route path="/pageAbout" element={<AboutPage/>}/>
      </Routes>
    </HashRouter>
    </div>
  );
}

export default App;
