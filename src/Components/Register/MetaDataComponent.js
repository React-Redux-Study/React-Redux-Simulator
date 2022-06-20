import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { CgClose } from "react-icons/cg";

import { DELETE_METADATA } from "../../Store/Register/Register";

const MetaComponent = ({props}) => {
    const dispatch = useDispatch();

    const onClickRemove = () => {
        console.log(props.value);
        dispatch(DELETE_METADATA(props.value));
    }

    return (
        <div className="w-full px-4 py-1 text-sm rounded-full border border-gray-300 tracert flex justify-between items-center space-x-2">
            <label className="font-bold turncate overflow-hidden">{props.value.select}</label>
            <div className="h-full border-r border-gray-300"></div>
            <label className="w-1/2 turncate overflow-hidden">{props.value.key}</label>
            <label className="turncate overflow-hidden text-gray-600 font-bold">{props.value.size}</label>
            <div className="cursor-pointer bg-gray-800 text-gray-300 rounded-full p-1">
                <CgClose className="cursor-pointer " onClick={onClickRemove} />
            </div>
        </div>
    )
}


const MetaDataComponent = () => {
    const { metaData } = useSelector(state => state.register);

    return (
        metaData !== undefined ? (
            <div className="py-2 w-full grid grid-cols-1 md:grid-cols-6 gap-4">
                {
                    metaData.map((value,key) => (
                        <MetaComponent key={key} props={ {key,value} } />
                    ))
                }
            </div>
        ) : (
            <div>

            </div>
        )
    )
}

export default MetaDataComponent;