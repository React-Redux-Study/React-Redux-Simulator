import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import CardsComponent from "../../Components/Template/CardsComponent";

import {
    AiOutlineDoubleLeft,
    AiOutlineDoubleRight
} from "react-icons/ai";

const Template = () => {

    const [pagination, setPagination] = useState({page:0,size:10});
    const navigate = useNavigate();

    useEffect( () => {
        navigate(`/${pagination.page}`);
    }, [pagination]);

    const onClickLeft= () => {
        setPagination({
            page:pagination.page < 1 ? 0 : pagination.page - 1  ,
            size:pagination.size
        });
    }

    const onClickRight = () => {
        setPagination({
            page:pagination.page + 1,
            size:pagination.size
        });
    }

    return (
        <>
            <div className="z-0 w-32 absolute inset-y-0 left-0 flex justify-center items-center">
                <AiOutlineDoubleLeft onClick={onClickLeft} className="p-4 w-16 h-16 bg-white rounded-full text-gray-400 cursor-pointer shadow hover:ring hover:ring-gray-300"/>
            </div>
            <div className="w-full px-44 py-32 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-16">
                <CardsComponent props={pagination}/>
            </div>
            <div className="z-0 w-32 absolute inset-y-0 right-0 flex justify-center items-center">
                <AiOutlineDoubleRight onClick={onClickRight} className="p-4 w-16 h-16 bg-white rounded-full text-gray-400 cursor-pointer shadow hover:ring hover:ring-gray-300"/>
            </div>
        </>
            
    )
}

export default Template;

