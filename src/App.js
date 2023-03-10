import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Profile from "./pages/Profile"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import ForgotPassword from "./pages/ForgotPassword"
import Offers from "./pages/Offers"
import Home from "./pages/Home"
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/profile" element ={<Profile/>}/>
          <Route path="/sign-in" element ={<SignIn/>}/>
          <Route path="/sign-up" element ={<SignUp/>}/>
          <Route path="/forgot-password" element ={<ForgotPassword/>}/>
          <Route path="/offers" element ={<Offers/>}/>
          <Route path="/" element ={<Home/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
