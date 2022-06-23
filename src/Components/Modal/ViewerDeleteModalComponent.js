import React, { useEffect } from "react";

const ViewerDeleteModalComponent = ({value, setValue}) => {

    useEffect( () => {
        
    }, []);

    const onClickClose = () => {
        setValue(!value);
    }

    return (
        value && (
            <div className="absolute w-full h-full top-0 left-0 z-50 overflow-hidden">
                <div className="w-full h-full bg-gray-900 opacity-80">
                    <div style={{transform: "translate(-50%, -50%)"}} className="rounded-md bg-white p-16 absolute flex justify-center items-center left-1/2 top-1/2">
                        <div className="space-y-8">
                            <div>
                                <label className="w-full py-2 px-1 font-bold">정말 삭제하시겠습니까?</label>
                                
                            </div>
                            
                            <div className="flex justify-end items-center space-x-4">
                                <button className="rounded-md border border-transparent p-1 bg-gray-200 text-base font-medium text-gray-600 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 sm:text-sm" >start</button>
                                <button className="rounded-md border border-transparent p-1 bg-gray-100 text-base font-medium text-gray-600 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 sm:text-sm" onClick={onClickClose}>close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    )
}

export default ViewerDeleteModalComponent;