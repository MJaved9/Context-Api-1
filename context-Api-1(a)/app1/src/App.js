// import logo from './logo.svg';
import './App.css';
import Multipleinputs from './Components/forms/MultipleInputs';
// import AllRoutes from "./Components/pages/AllRoutes"
import {Routes,Route} from 'react-router-dom'
import Login from './Components/forms/Login';

function App() {
  return (
    <div className="App">
    <Routes>
    <Route exact path="/" element={<>Home</>}></Route>
    <Route exact path="/signin" element={<><Multipleinputs/></>}></Route>
    <Route exact path="/login" element={<><Login /></>}></Route>
    </Routes>

    </div>
  );
}

export default App;
