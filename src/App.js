import Home from "./components/Home"
import Answer from "./components/Answer"
import { Route,Routes } from "react-router-dom"
import LandingPage from "./components/LandingPage"
import Signup from "./components/Signup"
import Login from "./components/Login" 
import Navbar from "./layouts/Navbar"
import { CheckAccess,CheckLoginAccess } from "./routing/CheckAccess"
import { Box } from "@chakra-ui/react"
import React from "react"
import Ask from "./components/Ask"
import Profile from "./components/Profile"
import SearchResult from "./components/SearchResult"

const App = ()=>{
   return (<Box>
    {/* pending: SearchResult.js,editDescription,following.js,upvotes */}
       <Navbar />
       <Routes>
           <Route path="/" element={<LandingPage/>}></Route>
           <Route path="/ask" element={<CheckAccess component={<Ask/>}/>}></Route>
           <Route path="/Answer" element={<CheckAccess component={<Answer/>}/>}></Route>
           <Route path="/home" element={<CheckAccess component={<Home/>}/>}></Route>
           <Route path="/signup" element={<Signup/>}></Route>
           <Route path="/login" element={<CheckLoginAccess component={<Login/>}/>}></Route>
           <Route path="/profile" element={<CheckAccess component={<Profile/>}/>} ></Route>
           <Route path="/search" element={<CheckAccess component={<SearchResult/>}/>} ></Route>
        </Routes>
       </Box>);
    }

export default App