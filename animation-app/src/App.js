import './App.css';
import {Routes, Route, HashRouter} from "react-router-dom";
import MainPage from './Component/MainPage';
import TestLogic from './Component/Pages/TestLogic';


function App() {
  return (
    <div className="App">
        <HashRouter>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/testLogic" element={<TestLogic/>}/>
      </Routes>
    </HashRouter>
    </div>
  );
}

export default App;
