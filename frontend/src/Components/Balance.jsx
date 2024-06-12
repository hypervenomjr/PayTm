
import axios from "axios";
import { useEffect, useState } from "react";

export const Balance = () => {
    const [Response, setResponse] = useState(0);  
    const [loading, setLoading] = useState(true);   
    const [error, setError] = useState(null);        

    useEffect(() => {
        async function check() {
            try {
                const res = await axios.get("http://localhost:3000/api/v1/account/balance", {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("token")
                    }
                });
                setResponse(res.data.balance);
            } catch (err) {
                console.error("Error fetching balance:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        check();
    }, []);

    if (loading) {
        return <div>Loading...</div>;  
    }

    if (error) {
        return <div>Error: {error}</div>;  
    }

    return (
        <div className="flex">
            <div className="font-bold text-lg">
                Your balance
            </div>
            <div className=" px-3  underline  font-medium text-lg">
                {Response}
                </div>
        </div>
    );
};