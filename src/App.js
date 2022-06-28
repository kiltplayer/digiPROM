import './App.css';
import Sidebar from "./Components/Sidebar/Sidebar"
import Topbar from "./Components/Topbar/Topbar"
import Registration from './Components/Pages/Registration'
import "./App.css"
import ResetPassword from './Components/Pages/ResetPassword';
import Signin from './Components/Pages/Signin';
import Signup from './Components/Pages/Signup';
// import Proms from "./Components/Pages/Proms";
// import PatientFeedback from './Components/Pages/PatientFeedback';
import PatientsData from './Components/Pages/PatientsData';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Signin" element={<Signin />}/>
        <Route path="/Signup" element={<Signup />}/>
        <Route path="/ResetPassword" element={<ResetPassword />}/>
          {/* <div>
            
            <div className="container">
              <Sidebar/>
              <div className="maincontent">
                  <Topbar/>
                  <PatientsData />
              </div>
              </div>
          </div>
         */}
      </Routes>
    </Router>
  );
}

export default App;
