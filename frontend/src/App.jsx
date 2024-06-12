

import { Route, BrowserRouter, Routes } from "react-router-dom"

import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Dashboard } from "./pages/Dashboard";
import { SendMoney } from "./pages/SendMoney";
import {PaymentSuccess} from "./pages/PaymentSuccess";


function App() {

  return (
    <div>
        <BrowserRouter>
        <Routes>

        <Route path="/signup" element ={<Signup/>} />
        <Route path="/Signin" element ={<Signin/>} />
        <Route path="/Dashboard" element ={<Dashboard/>} />
        <Route path="/send" element ={<SendMoney/>} />
        <Route path="/Success" element ={<PaymentSuccess/>} />


        </Routes>
        </BrowserRouter>


    </div>
  )
}

export default App
