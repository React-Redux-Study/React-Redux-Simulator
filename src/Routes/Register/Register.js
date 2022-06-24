import React, {useEffect, useRef, useState} from "react";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

import MetaDataComponent from "../../Components/Register/MetaDataComponent";
import MaxMirrorComponent from "../../Components/Register/MirrorKeyComponent";

import { SET_ERROR_MODAL_MESSAGE } from "../../Store/Modal/ErrorModal";
import { SET_METADATA, SET_MIRRORKEY } from "../../Store/Register/Register";

import { register } from "../../API/Register/Register";
import ErrorComponent from "../../Components/Register/ErrorComponent";

const Register = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    //
    const [errors, setErrors] = useState({});
    //
    const selectMetaList = useRef(["String", "Integer", "Float"]);
    const [selectMeta, setSelectMeta] = useState("");
    const [metaKey, setMetaKey] = useState("");
    const [metaSize, setMetaSize] = useState(1);
    //
    const [mirrorKey, setMirrorKey] = useState("");
    //
    const [title , setTitle] = useState("");
    const [filePath, setFilePath] = useState("");
    const [content, setContent] = useState("");
    //
    const { metaDataRedux, mirrorKeyRedux } = useSelector(state => state.register);

    //
    useEffect( () => {

    }, []);
    //
    useEffect( () => {
        setSelectMeta(selectMetaList.current[0]);
    },[selectMetaList]);
    //
    const addMirrorKey = () => {
        if(mirrorKey.length > 0){
            dispatch(SET_MIRRORKEY(String(mirrorKey)));
            setMirrorKey("");
            errors.mirrorKeyRedux = null;
        }
    }

    const addMetaData = () => {
        if( metaKey.length > 0 && 0 < Number(metaSize) && Number(metaSize) < 10){
            dispatch(SET_METADATA({
                type:selectMeta, 
                key:metaKey, 
                size:metaSize})
            );
            setMetaKey("");
            setMetaSize(1);
            errors.metaDataRedux = null;
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

    const onKeyPressMetaData = (e) => {
        if(e.key === "Enter"){
            addMetaData();
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

    const onClickExit = () => {
        navigate("/");
    }
    
    //
    const onValid = () => {
        const error = {}

        if(!title){
            error.title = "제목을 입력하세요.";
        }

        if(!content){
            error.content = "내용을 입력하세요.";
        }

        if(!filePath){
            error.path = "파일경로를 입력하세요.";
        }
        if(!mirrorKeyRedux.length){
            error.mirrorKeyRedux = "미러키값을 입력하세요.";
        }

        if(!metaDataRedux.length){
            error.metaDataRedux = "메타데이터값을 입력하세요.";
        }

        setErrors(error);

        let check = true;
        if(Object.keys(error).length){
           check = false; 
        }

        return check;
    }
    //
    const onClickRegister = async () => {
        
        if(onValid()){
            const data = {
                title:title,
                content:content,
                path:filePath.replaceAll("\\","/"),
                mirror:mirrorKeyRedux.length,
                mirrorRegex: mirrorKeyRedux.toString(),
                raw:JSON.stringify(metaDataRedux)
            };
            
            const response = await register(data);
            
            if(response.state){
                navigate("/");
            }else{
                dispatch(SET_ERROR_MODAL_MESSAGE("입력 데이터가 올바르지 않습니다."));  
            }
        }
    }

    //
    return (
        <div className="w-full px-44 py-32">
            <div className="bg-white p-10 shadow-md flex flex-col space-y-8">
                <div>
                    <label className="w-full py-2 px-1 font-bold ">Title</label>
                    <div className="w-full flex space-x-4 h-10">
                        <input
                            className="w-full p-1 text-md outline-none border-b"
                            type="text"
                            value={title}
                            onChange={onChangeTitle}
                            required={true}
                        />
                    </div>
                    <ErrorComponent message={errors?.title}/>

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
                    <ErrorComponent message={errors?.path}/>
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
                    <ErrorComponent message={errors?.content}/>

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
                    <ErrorComponent message={errors?.mirrorKeyRedux}/>
                    <MaxMirrorComponent />

                </div>

                <div>
                    <label className="w-full py-2 px-1 font-bold">Meta Data</label>
                    <div className="w-full flex space-x-4 h-10">
                        <select className="w-32 px-4 py-2 border" onChange={onChangeSelectMeta} value={selectMeta}>
                            {
                                selectMetaList.current.map( (item)=> (
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
                            onKeyPress={onKeyPressMetaData}
                        />
                        </div>
                        
                        <button className="px-4 py-2 border hover:bg-gray-100" onClick={onClickMetaData}>
                            Add
                        </button>
                    </div>
                    <ErrorComponent message={errors?.metaDataRedux}/>
                    <MetaDataComponent  />

                </div>

                <div className="flex justify-between">
                    <button className="w-32 px-4 py-2 border bg-gray-50 hover:bg-gray-100" onClick={onClickExit}>exit</button>
                    <button className="w-32 px-4 py-2 border hover:bg-gray-100" onClick={onClickRegister} >register</button>
                </div>
            </div>

        </div>
    )
}

export default Register;