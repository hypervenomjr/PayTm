import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

 export const PaymentSuccess = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
  
        localStorage.removeItem("token");
        navigate("/signin");
      };


    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full text-center">
                <FaCheckCircle className="text-green-500 text-6xl mb-4" />
                <h1 className="text-2xl font-bold mb-2">Payment Successful</h1>
                <p className="text-gray-700 mb-4">Thank you! Your payment has been processed successfully.</p>
                <div className="my-6">
                    <button
                        className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
                        onClick={() => window.location.href = '/dashboard'}
                    >
                        Go to Home
                    </button>
                </div>
                <div className="my-6">
                <button onClick={handleLogout} className="bg-green-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-600 transition duration-300">
                      Logout
                         </button>
                </div>
            </div>
        </div>
    );
};

