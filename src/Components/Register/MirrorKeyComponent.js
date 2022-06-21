import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { CgClose } from "react-icons/cg";

import { DELETE_MIRRORKEY } from "../../Store/Register/Register";

const MirrorComponent = ({props}) => {
    const dispatch = useDispatch();

    const onClickRemove = () => {
        dispatch(DELETE_MIRRORKEY(props.value));
    }

    return (
        <div className="w-full px-4 py-1 text-sm rounded-full border border-gray-300 tracert flex justify-between items-center">
            <label>{props.value}</label>
            <div className="cursor-pointer bg-gray-800 text-gray-300 rounded-full p-1">
                <CgClose className="cursor-pointer " onClick={onClickRemove} />
            </div>
        </div>
    )
}

const MirrorKeyComponent = () => {
    /*
    state를 불러올때는 redux에 있는 값을 불러오는 거고 
    redux에 정의된 값을 state를 통해서 불러오고
    선언부는 해당 redux안에 있는 변수값들을 지정을 해야된다
    const initailstate = useSelector( state => state를 정의한 원 redux store name 을 정의)
    */

    const { mirrorKeyRedux } = useSelector(state => state.register);

    return (
        mirrorKeyRedux !== undefined ? (
            <div className="py-2 w-full grid grid-cols-1 md:grid-cols-8 gap-4">
                {
                    mirrorKeyRedux.map((value,key) => (
                        <MirrorComponent key={key} props={ {key,value} } />
                    ))
                }
            </div>
        ) : (
            <div>
                
            </div>
        )
    )
}

export default MirrorKeyComponent;