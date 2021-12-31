import logo from './logo.svg';
import './App.css';
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import HeaderComponent from "./components/HeaderComponent";
import FoterComponent from "./components/FoterComponent";

function App() {
  return (

    <div>
        <HeaderComponent />
            <div className="container">
                <ListEmployeeComponent />
            </div>
        <FoterComponent />
    </div>


  );
}

export default App;
