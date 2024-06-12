import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { SubHeading } from "../Components/SubHeading";
import { InputBox } from "../Components/InputBox";
import { BelowWarning } from "../Components/BelowWarning";
import { SigninButton } from "../Components/SigninButton";
import { Heading } from "../Components/heading";

export const Signin = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"Sign In Now"} />
          <SubHeading description={"Enter your credentials to access your account"} />
          <InputBox  onChange={(e) => setUserName(e.target.value)}
            placeholder="chetankesare890@gmail.com"
            label="Email" />
          <InputBox
            onChange={(e) => setPassword(e.target.value)}
            placeholder="123"
            label="Password" />
          <div className="pt-4">
            <SigninButton onClick={async () => {
              const response = await axios.post(`http://localhost:3000/api/v1/user/signin`, {
                username: username,
                password: password
              });
              localStorage.setItem("token", response.data.token);
              navigate("/dashboard");
            }} label="Sign In" />
          </div>
          <BelowWarning label="Don't have an account?" ButtonText="Sign Up" to="/signup" />
        </div>
      </div>
    </div>
  );
};
