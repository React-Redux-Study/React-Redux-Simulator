import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { SET_ERROR_MODAL_MESSAGE } from "../../Store/Modal/ErrorModal"

const ErrorModalComponent = () => {

    const dispatch = useDispatch();
    const { modalMessageRedux } = useSelector(state=>state.errorModal);

    useEffect( () => {
        if(modalMessageRedux){
            setTimeout(
                ()=>{
                    dispatch(SET_ERROR_MODAL_MESSAGE(""));
                },
                10*1000
            );
        }
       
    }, [modalMessageRedux]);

    return (
        modalMessageRedux && (
            <div className="absolute w-screen h-screen top-0 left-0 z-100 overflow-hidden">
                <div className="w-full h-full bg-gray-900 opacity-80">
                    <div style={{transform: "translate(-50%, -50%)"}} className="w-1/4 h-32 absolute flex justify-center items-center left-1/2 top-1/2">
                        <div className="text-gray-100 font-bold">
                            {modalMessageRedux}
                        </div>
                    </div>
                </div>
            </div>
        )
    )
}

export default ErrorModalComponent;