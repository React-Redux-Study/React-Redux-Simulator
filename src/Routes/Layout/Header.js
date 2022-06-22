import React from "react";
import { useNavigate } from "react-router";

const Header = () => {
    const navigate = useNavigate();

    const onClickRegister = () => {
        return navigate("/register");
    }

    const onClickSimulator = () => {
        return navigate("/");
    }

    return (
        <div className="z-50 fixed inset-x-0 top-0">
            <div className="bg-white flex items-center justify-start w-full p-2 shadow">
                <div className="p-2 text-2xl font-bold">
                    <button onClick={onClickSimulator}>Simulator</button>
                </div>
                <div className="px-10">
                    <button className="hover:border-gray-400 hover:border-b-2 hover:pt-1" onClick={onClickSimulator}>Template</button>
                </div>
                <div className="px-10">
                    <button className="hover:border-gray-400 hover:border-b-2 hover:pt-1" onClick={onClickRegister}>Register</button>
                </div>
            </div>
        </div>
    )
}

export default Header;