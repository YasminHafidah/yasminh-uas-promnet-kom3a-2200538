import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Antrian3 from "./component/Antrian3";
import Update2 from "./component/Update2"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Add5 from "./component/Add5";
import Details2 from "./component/Details2";
import "../src/App.css";


function App() {  
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/antrian" element={<Antrian3/>}/>
          <Route path="/add" element={<Add5/>}/>
          <Route path="/update/:id" element={<Update2/>}/>
          <Route path="/details/:id" element={<Details2/>}/>
        </Routes>
      </Router>
    </div>
 );
}
  export default App;