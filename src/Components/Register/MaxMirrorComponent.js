import React, {useEffect, useId} from "react";
import { useSelector } from "react-redux";

const MirrorKeysComponent = (props) => {
    const uuid = useId();

    return (
        <div key={uuid} className="flex h-10 justify-center items-center">
            <label className="py-2 px-1 font-bold ">Mirror Key {props.idx}</label>
            <input 
                className="p-1 text-md outline-none border-b"
                type="text"
            />
        </div>
    )
}

const MaxMirrorComponent = () => {
    /*
    state를 불러올때는 redux에 있는 값을 불러오는 거고 
    redux에 정의된 값을 state를 통해서 불러오고
    선언부는 해당 redux안에 있는 변수값들을 지정을 해야된다
    const initailstate = useSelector( state => state를 정의한 원 redux store name 을 정의)
    */
    const { mirrorKey } = useSelector(state => state.register);

    const render = () => {
        console.log("-------------------");
        mirrorKey.map(
            (key,value) => {
                console.log(key, value);
            }
        )
    }

    return (
        <>
        {
            mirrorKey !== undefined && (
                <div>
                    {render()}
                </div>
            )
        }
        </>
    )
}

export default MaxMirrorComponent;