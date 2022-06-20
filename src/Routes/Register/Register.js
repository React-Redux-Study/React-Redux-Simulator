import React, {useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import MetaDataComponent from "../../Components/Register/MetaDataComponent";

import MaxMirrorComponent from "../../Components/Register/MirrorKeyComponent";

import { SET_METADATA, SET_MIRRORKEY } from "../../Store/Register/Register";

const Register = () => {

    const dispatch = useDispatch();
    //
    const selectMetaList = ["String", "Integer", "Float"];
    const [selectMeta, setSelectMeta] = useState("");
    const [metaKey, setMetaKey] = useState("");
    const [metaSize, setMetaSize] = useState(0);
    //
    const [mirrorKey, setMirrorKey] = useState("");
    //
    const [title , setTitle] = useState("");
    const [filePath, setFilePath] = useState("");
    const [content, setContent] = useState("");
    //
    useEffect( () => {
        setSelectMeta(selectMetaList[0]);
    }, [] )
    //
    const addMirrorKey = () => {
        if(mirrorKey.length > 0){
            dispatch(SET_MIRRORKEY(String(mirrorKey)));
            setMirrorKey("");
        }
    }

    const addMetaData = () => {
        if( metaKey.length > 0 && 0 < Number(metaSize) && Number(metaSize) < 10){
            dispatch(SET_METADATA({
                select:selectMeta, 
                key:metaKey, 
                size:metaSize})
            );
            setMetaKey("");
            setMetaSize(0);
        }

    }
    //
    const onChangeTitle = (e) => {
        setTitle(e.target.value);
    }

    const onChangeFilePath = (e) => {
        setFilePath(e.target.value);
    }

    const onChangeContent = (e) => {
        setContent(e.target.value);
    }

    const onChangeMirrorKey = (e) =>{
        setMirrorKey(String(e.target.value));
    }

    const onChangeSelectMeta = (e) => {
        setSelectMeta(e.target.value);
    }

    const onChangeMetaKey = (e) => {
        setMetaKey(e.target.value);
    }

    const onChangeMetaSize = (e) => {
        setMetaSize(Number(e.target.value));
    }
    //
    const onKeyPressMirrorKey = (e) => {
        if(e.key === "Enter"){
            addMirrorKey();
        }
    }
    //
    const onClickMirrorKey = (e) => {
        e.preventDefault();
        addMirrorKey();
    }

    const onClickMetaData = (e) => {
        e.preventDefault();
        addMetaData();
    }

    const onClickRegister = async () => {

    }

    //
    return (
        <div className="w-full px-20 py-32">
            <div className="bg-white p-10 shadow-md flex flex-col space-y-8">
                <div>
                    <label className="w-full py-2 px-1 font-bold ">Title</label>
                    <div className="w-full flex space-x-4 h-10">
                        <input
                            className="w-full p-1 text-md outline-none border-b"
                            type="text"
                            value={title}
                            onChange={onChangeTitle}
                        />
                    </div>

                </div>
                <div>
                    <label className="w-full py-2 px-1 font-bold">File Path</label>
                    <div className="w-full flex space-x-4 h-10">
                        <input
                            className="w-full p-1 text-md outline-none border-b"
                            type="text"
                            value={filePath}
                            onChange={onChangeFilePath}
                        />
                    </div>

                </div>
                <div>
                    <label className="w-full py-2 px-1 font-bold">Content</label>
                    <div className="w-full flex space-x-4 h-10">
                        <input
                            className="w-full p-1 text-md outline-none border-b"
                            type="text"
                            value={content}
                            onChange={onChangeContent}
                        />
                    </div>
                </div>

                <div>
                    <label className="w-full py-2 px-1 font-bold">Mirror Key</label>
                    <div className="w-full flex space-x-4 h-10">
                        <input
                            id="mirrorkey"
                            className="w-full p-1 text-md outline-none border-b"
                            type="text"
                            onChange={onChangeMirrorKey}
                            onKeyPress={onKeyPressMirrorKey}
                            value={mirrorKey}
                        />
                        <button className="px-4 py-2 border hover:bg-gray-100" onClick={onClickMirrorKey}>
                            Add
                        </button>
                    </div>
                    <MaxMirrorComponent />

                </div>

                <div>
                    <label className="w-full py-2 px-1 font-bold">Meta Data</label>
                    <div className="w-full flex space-x-4 h-10">
                        <select className="w-32 px-4 py-2 border" onChange={onChangeSelectMeta} value={selectMeta}>
                            {
                                selectMetaList.map( (item)=> (
                                    <option key={item} value={item}>{item}</option>
                                ))
                            }
                        </select>
                        <div className="w-full flex space-x-4">
                        <input
                            className="w-1/2 p-1 text-md outline-none border-b"
                            type="text"
                            value={metaKey}
                            onChange={onChangeMetaKey}
                        />
                        <input
                            className="w-1/2 p-1 text-md outline-none border-b"
                            type="number"
                            value={metaSize}
                            onChange={onChangeMetaSize}
                        />
                        </div>
                        
                        <button className="px-4 py-2 border hover:bg-gray-100" onClick={onClickMetaData}>
                            Add
                        </button>
                    </div>
                    <MetaDataComponent  />

                </div>

                <div className="flex justify-end">
                    <button className="w-32 px-4 py-2 border hover:bg-gray-100" onClick={onClickRegister} >register</button>
                </div>
            </div>

        </div>
    )
}

export default Register;