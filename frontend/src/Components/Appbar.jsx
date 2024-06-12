
import React from 'react';
import paytmLogo from './paytmlogo.png'; // Ensure you have a PayTm logo image in your project directory
import { FaBell } from 'react-icons/fa'; // Using react-icons for better visual appeal

export const Appbar = () => {
    return (
        <div className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg">
            <img src={paytmLogo} alt="PayTm Logo" className="h-10" />
            <div className="flex items-center">
                <span className="text-white text-lg font-semibold mr-4">Hello</span>
                <FaBell className="text-white text-xl mr-4" /> {/* Notification icon */}
                <div className="w-10 h-10 flex justify-center items-center bg-white text-blue-500 rounded-full font-bold text-xl shadow-md">
                    U
                </div>
            </div>
        </div>
    );
};

