import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { deleteViewer } from "../../API/Template/Viewer";

const ViewerDeleteModalComponent = ({ value, setValue, viewerId }) => {

    const navigate = useNavigate();

    useEffect(() => {

    }, []);

    const onClickClose = () => {
        setValue(!value);
    };

    const onClickDelete = () => {
        deleteViewer(viewerId);
        navigate("/");
    }

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
                                    <label className="w-full py-2 px-1 font-bold">정말 삭제하시겠습니까?</label>

                                </div>

                                <div className="flex justify-end items-center space-x-4">
                                    <button className="rounded border border-transparent px-2 py-1 bg-rose-200 text-base font-medium text-gray-600 hover:bg-rose-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-400 sm:text-sm w-full" onClick={onClickDelete}>Delete</button>
                                    <button className="rounded border border-transparent px-2 py-1 bg-gray-100 text-base font-medium text-gray-600 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 sm:text-sm w-full" onClick={onClickClose}>Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    );
};
export default ViewerDeleteModalComponent;