import Home from "./components/Home"
import Answer from "./components/Answer"
import FollowingPage from "./components/FollowingPage"
import QA from "./components/QA"
import { Route,Routes } from "react-router-dom"
import LandingPage from "./components/LandingPage"
import Signup from "./components/Signup"
import Login from "./components/Login"
import UserProfile from "./components/UserProfile"
import Navbar from "./layouts/Navbar"
import { CheckAccess,CheckLoginAccess } from "./routing/CheckAccess"


const App = ()=>{
   return (<>
       <Navbar />
       <Routes>
           <Route path="/" element={<LandingPage/>}></Route>
           <Route path="/Profile" element={<CheckAccess component={<UserProfile/>}/>}></Route>
           <Route path="/home" element={<CheckAccess component={<Home/>}/>}></Route>
           <Route path="/Answer" element={<CheckAccess component={<Answer/>}/>}></Route>
           <Route path="/QuestionAns" element={<CheckAccess component={<QA/>}/>}></Route>
           <Route path="/signup" element={<Signup/>}></Route>
           <Route path="/login" element={<CheckLoginAccess component={<Login/>}/>}></Route>
       </Routes>
    </>)
}
export default App