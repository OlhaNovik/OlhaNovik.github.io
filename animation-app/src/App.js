import './App.css';
import {Routes, Route, HashRouter} from "react-router-dom";
import MainPage from './Component/MainPage';

function App() {
  return (
    <div className="App">
        <HashRouter>
      <Routes>
        <Route path="/" element={<MainPage/>}>
        </Route>
      </Routes>
    </HashRouter>
    </div>
  );
}

export default App;
