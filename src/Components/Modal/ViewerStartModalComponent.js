import React, { useEffect, useRef, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { ADD_COUNT, INITIAL_COUNT } from "../../Store/Modal/ViewerStartModal";

import { postViewer } from "../../API/Template/Viewer";

const ViewerStartModalComponent = ({ value, setValue, viewerId, files }) => {

    const dispatch = useDispatch();
    const { countRedux } = useSelector(state=>state.viewerStartModal);

    const [intevalId , setIntervalId] = useState(null);

    const [delay, setDelay] = useState(100);
    const [url, setURL] = useState("");
    const [progress, setProgress] = useState("0");
    const [button, setButton] = useState("Start");

    useEffect(() => {
        dispatch(INITIAL_COUNT());
    }, []);

    useEffect( () => {
        if(countRedux){
            const percent = String(parseInt(countRedux/files.length*100));
            if(countRedux >= files.length){
                stopInterval();
            }else{
                send();
            }
            setProgress(percent);
        }

    }, [countRedux])

    const send = async() => {
        const response = await postViewer(
            viewerId,
            files[countRedux].id,
            {
                url:url,
                method:"POST",
                delay:delay
            }
        );
        console.log(response.state);
    }

    const reduxCallback = () => {
        if(countRedux >= files.length ){
            dispatch(INITIAL_COUNT());
        }else{
            dispatch(ADD_COUNT());
        }
    }
    
    const startInterval = () => {
        setButton("Stop");
        setIntervalId(setInterval(reduxCallback, delay));
    }

    const stopInterval = () => {
        dispatch(INITIAL_COUNT());
        setButton("Start");
        clearInterval(intevalId);
    }

    const onClickStart = () => {
        if(button === "Start"){
            startInterval();
        }else{
            stopInterval();
        }
    };

    const onClickClose = () => {
        dispatch(INITIAL_COUNT());
        setProgress("0");
        clearInterval(intevalId);
        
        setButton("Start");
        setValue(!value);
    };

    const onChageDelay = (e) => {
        setDelay(e.target.value);
    };

    const onChangeURL = (e) => {
        setURL(e.target.value);
    };


    return (
        value && (
            <>
                <div className="absolute w-full h-full top-0 bg-gray-900 left-0 z-40 overflow-hidden opacity-80">

                </div>
                
                <div className="absolute w-full h-full top-0 left-0 z-50 overflow-hidden">
                    <div className="w-full h-full">
                        <div style={{ transform: "translate(-50%, -50%)" }} className="rounded-md bg-white p-16 absolute flex justify-center items-center left-1/2 top-1/2">
                            <div className="space-y-8">
                                <div>
                                    <label className="w-full py-2 px-1 font-bold">URL</label>
                                    <div>
                                        <input value={url} type="text" onChange={onChangeURL} className="w-full p-1 text-md outline-none border-b" />
                                    </div>
                                </div>

                                <div>
                                    <label className="w-full py-2 px-1 font-bold">Delay(ms)</label>
                                    <div>
                                        <input value={delay} type="number" onChange={onChageDelay} className="w-full p-1 text-md outline-none border-b" />
                                    </div>
                                </div>

                                <div className="border border-gray-200 rounded w-full bg-grey-light h-5 text-center bg-gray-50">
                                    <div key="progress" className="bg-gray-600 h-5 rounded text-white" style={{ width: progress+"%" }}>{progress}%</div>
                                </div>

                                <div className="flex justify-end items-center space-x-4">
                                    <button className="rounded border border-transparent px-2 py-1 bg-gray-200 text-base font-medium text-gray-600 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 sm:text-sm w-full" onClick={onClickStart}>{button}</button>
                                    <button className="rounded border border-transparent px-2 py-1 bg-gray-100 text-base font-medium text-gray-600 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 sm:text-sm w-full" onClick={onClickClose}>Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    )
};

export default ViewerStartModalComponent;