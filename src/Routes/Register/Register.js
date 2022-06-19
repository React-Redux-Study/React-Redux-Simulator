import React, {useEffect, useState} from "react";
import { useDispatch } from "react-redux";

import MaxMirrorComponent from "../../Components/Register/MaxMirrorComponent";

import { SET_MIRRORKEY } from "../../Store/Register/Register";

const Register = () => {

    const dispatch = useDispatch();

    // const [ maxMirrorSize, setMaxMirrorSize ] = useState(0);
    const [mirrorKey, setMirrorKey] = useState([]);

    useEffect( () => {

    }, [])

    const onChangeMirrorKey = (e) =>{
        setMirrorKey([...mirrorKey, String(e.target.value)]);
    }

    const onClickMirrorKey = (e) => {
        e.preventDefault();
        dispatch(SET_MIRRORKEY(mirrorKey));
    }

    const onClickMetaData = () => {

    }

    return (
        <div className="w-full px-20 py-32">
            <div className="bg-white p-10 shadow-md flex flex-col space-y-8">
                <div>
                    <label className="w-full py-2 px-1 font-bold ">Title</label>
                    <div className="w-full flex space-x-4 h-10">
                        <input
                            className="w-full p-1 text-md outline-none border-b"
                            type="text"
                        />
                    </div>

                </div>
                <div>
                    <label className="w-full py-2 px-1 font-bold">File Path</label>
                    <div className="w-full flex space-x-4 h-10">
                        <input
                            className="w-full p-1 text-md outline-none border-b"
                            type="text"
                        />
                    </div>

                </div>
                <div>
                    <label className="w-full py-2 px-1 font-bold">Content</label>
                    <div className="w-full flex space-x-4 h-10">
                        <input
                            className="w-full p-1 text-md outline-none border-b"
                            type="text"
                        />
                    </div>
                </div>

                <div>
                    <label className="w-full py-2 px-1 font-bold">Mirror Key</label>
                    <div className="w-full flex space-x-4 h-10">
                        <input
                            className="w-full p-1 text-md outline-none border-b"
                            type="text"
                            onChange={onChangeMirrorKey}
                        />
                        <button className="px-4 py-2 border hover:bg-gray-100" onClick={onClickMirrorKey}>
                            Add
                        </button>
                    </div>
                </div>

                <div>
                    <MaxMirrorComponent />
                </div>

                <div>
                    <label className="w-full py-2 px-1 font-bold">Meta Data</label>
                    <div className="w-full flex space-x-4 h-10">
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
                        
                        <button className="px-4 py-2 border hover:bg-gray-100" onClick={onClickMetaData}>
                            Add
                        </button>
                    </div>
                </div>

                <div>
                    meatdata
                </div>

                <div className="flex justify-end">
                    <button className="w-32 px-4 py-2 border hover:bg-gray-100">register</button>
                </div>
            </div>

        </div>
    )
}

export default Register;