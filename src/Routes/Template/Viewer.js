import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

import ViewerListComponent from "../../Components/Template/ViewerFileListComponent";
import ViewerStartModalComponent from "../../Components/Modal/ViewerStartModalComponent";

import { getViewer } from "../../API/Template/Viewer";

import { splitPath, classNames } from "../../Util/path";
import { convertTime } from "../../Util/time";
import styled from "styled-components";
import ViewerDeleteModalComponent from "../../Components/Modal/ViewerDeleteModalComponent";

const Viewer = () => {

    const [viewerId, setViewerId] = useState(-1);
    const [dashboard, setDashboard] = useState({});

    const [files, setFiles] = useState([]);
    const [urlPath, setUrlPath] = useState("");

    const [clickStart, setClickStart] = useState(false);
    const [clickDelete, setClickDelete] = useState(false);

    const { pathname } = useLocation();

    useEffect(() => {
        setViewerId(splitPath(pathname, 2))
    }, [])

    useEffect(() => {

        const action = async () => {
            if (viewerId >= 0) {
                const response = await getViewer(viewerId);
                if (response.state) {
                    setDashboard(response.json.information.dashboard);
                    setFiles(response.json.information.files);
                    setUrlPath(response.json.information.urlPath);
                }
            }
        }

        action();
    }, [viewerId]);

    const onClickStart = () => {
        setClickStart(!clickStart);
    }

    const onClickDelete = () => {
        setClickDelete(!clickDelete);
    }

    return (
        <>
            <div className={classNames("w-full py-32 lg:px-44 md:px-44 px-12",
                clickStart && ("blur-sm"), clickDelete && ("blur-sm") 
            )}>
                <div className="w-full shadow-md">
                    <div key="view" className="bg-white rounded p-10">
                        <div className="py-2 flex justify-between items-center">
                        
                            <label key="createdDate" className="text-gray-400">{convertTime(dashboard.createdDate)}</label>
                            <div>
                                <button onClick={onClickStart} key="start" type="button" className="m-2 rounded-md border border-transparent px-4 py-2 bg-gray-200 text-base font-medium text-gray-600 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 sm:text-sm">시작</button>
                                <button onClick={onClickDelete} key="delete" type="button" className="m-2 rounded-md border border-transparent px-4 py-2 bg-gray-200 text-base font-medium text-gray-600 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 sm:text-sm">삭제</button>
                            
                            </div>
                        </div>

                        <div className="py-2">
                            <label key="title" className="text-4xl font-bold">{dashboard.title}</label>
                        </div>
                        
                        <div>
                            Contents
                        </div>
                        <div className="py-4 mb-4 bg-gray-100 rounded">
                            <label key="content" className="p-2">{dashboard.content}</label>
                        </div>
                        <div className="flex w-full space-x-4">
                            <div className="w-full">
                                <div>
                                    Meta Data
                                </div>
                                <div className="py-4 mb-4 bg-gray-50 rounded">
                                    <label key="raw" className="p-2 text-sm">{dashboard.raw}</label>
                                </div>
                            </div>
                            <div className="w-full">

                                <div>
                                    Max Mirror Size
                                </div>
                                <div className="py-4 mb-4 bg-gray-50 rounded">
                                    <label key="raw" className="p-2 text-sm">{dashboard.mirror}</label>
                                </div>
                            </div>
                        </div>

                        <ViewerListComponent props={files} urlPath={urlPath} />
                    </div>
                </div>
            </div>
            {
                <ViewerStartModalComponent
                    value={clickStart}
                    setValue={setClickStart}
                />
            }
            {
                <ViewerDeleteModalComponent 
                    value={clickDelete}
                    setValue={setClickDelete}
                />
            }
        </>
    )
}

export default Viewer;