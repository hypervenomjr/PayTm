import { useState } from "react"
import { BelowWarning } from "../Components/BelowWarning"
import { InputBox } from "../Components/InputBox"
import { SigninButton } from "../Components/SigninButton"
import { SubHeading } from "../Components/SubHeading"
import { Heading } from "../Components/heading"
import  axios  from "axios"
import { useNavigate } from "react-router-dom"

    export const Signup = () =>{

        const [firstName , SetfirstName] = useState("");
        const [lastName , SetlastName] = useState("");
        const [Email , SetEmail] = useState("");
        const [password , Setpassword] = useState("");
        const Navigate = useNavigate();

                return <div className=" bg-slate-400 h-screen flex justify-center">
                <div className="flex flex-col justify-center">
                  <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                        <Heading label={"Sign Up"} />
                        <SubHeading label={"Enter your information to create an account"} />
                        <InputBox onChange={e =>{  SetfirstName(e.target.value)}} label={"First Name"} placeHolder="joe" />
                        <InputBox onChange={e =>{  SetlastName(e.target.value)}} label={"Last Name"} placeHolder="Mama" />
                        <InputBox onChange={e =>{  SetEmail(e.target.value)}} label={"Email"} placeHolder="joemama@yomama.com" />
                        <InputBox onChange={e =>{  Setpassword(e.target.value)}} label={"Password"} placeHolder="idkyoutellme" />
                        <SigninButton onClick ={async() =>{
                              const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
                                    username: Email,
                                    password: password,
                                    firstName: firstName,
                                    lastName: lastName
                            })
                                localStorage.setItem("token", response.data.token)
                                Navigate("/dashboard");
                        }}
                         label= "Sign up" />
                        <BelowWarning label="Already have an Account?" ButtonText="Signin" to="/Signin" />

                </div>
            </div>
        </div>
    }