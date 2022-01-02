import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import HeaderComponent from "./components/HeaderComponent";
import FoterComponent from "./components/FoterComponent";

function App() {
  return (
      <Router>
                <div>
                            <div className="container">
                                <HeaderComponent />
                                    <div className="container">
                                        <Routes>
                                            <Route path="/" element={<ListEmployeeComponent/>}></Route>
                                            <Route path="/employees" element={<ListEmployeeComponent/>}></Route>
                                        </Routes>
                                    </div>
                                <FoterComponent />
                            </div>
                </div>
      </Router>

  );
}

export default App;
