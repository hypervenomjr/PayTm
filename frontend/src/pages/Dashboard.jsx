import { useNavigate } from "react-router-dom"
import { Appbar } from "../Components/Appbar"
import { Balance } from "../Components/Balance"
import { Users } from "../Components/Users"



export const Dashboard = () => {

    const navigate = useNavigate()

    const handleLogout = () => {
  
        localStorage.removeItem("token");
        navigate("/signin");
      };


            return <div>

            <Appbar />
            <div className=" m-8">
                <div className="flex justify-between">
                    <div>
                    <Balance />
                    </div>
                    <div className=" pb-2">
                    <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-4">
                      Logout
                         </button>
                    </div>
                </div>
                
                <Users />        

            </div>


            </div>



}