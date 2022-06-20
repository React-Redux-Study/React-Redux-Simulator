import React from "react";

const Register = () => {
    return (
        <div className="w-full px-20 py-32">
            <div className="bg-white p-10 shadow-md flex flex-col space-y-8">
                <div>
                    <label className="w-full p-1 font-bold">Title</label>
                    <input
                        className="w-full p-1 text-md outline-none border-b"
                        type="text"
                    />
                </div>
                <div>
                    <label className="w-full p-1 font-bold">File Path</label>
                    <div className="w-full flex space-x-4 h-10">
                        <input
                            className="w-full p-1 text-md outline-none border-b"
                            type="text"
                        />
                    </div>
                    
                </div>
                <div>
                    <label className="w-full p-1 font-bold">Content</label>
                    <div className="w-full flex space-x-4 h-10">
                        <input
                            className="w-full p-1 text-md outline-none border-b"
                            type="text"
                        />
                    </div>
                    
                </div>
                <div>
                    <label className="w-full p-1 font-bold">Max Mirror Size</label>
                    <div className="w-full flex space-x-4 h-10">
                        <input
                            className="w-full p-1 text-md outline-none border-b"
                            type="number"
                        />
                        <button className="px-4 py-2 border hover:bg-gray-100">
                            Add
                        </button>
                    </div>
                </div>

                <div>
                    <label className="w-full p-1 font-bold">Meta Data</label>
                    <div className="w-full flex space-x-4  h-10">
                        <select className="w-32 px-4 py-2 border ">
                            <option>String</option>
                            <option>Integer</option>
                            <option>Float</option>
                        </select>
                        <div className="w-full flex space-x-4">
                        <input
                            className="w-1/2 p-1 text-md outline-none border-b"
                            type="text"
                        />
                        <input
                            className="w-1/2 p-1 text-md outline-none border-b"
                            type="text"
                        />
                        </div>
                        
                        <button className="px-4 py-2 border hover:bg-gray-100">
                            Add
                        </button>
                    </div>
                </div>

                <div className="flex justify-end">
                    <button className="w-32 px-4 py-2 border hover:bg-gray-100">register</button>
                </div>
            </div>

        </div>
    )
}

export default Register;