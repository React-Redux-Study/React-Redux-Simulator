import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

import { getViewer } from "../../API/Template/Viewer";

import { splitPath } from "../../Util/path";

const Viewer = () =>{ 
    const [viewId, setViewId] = useState(0);

    const {pathname} = useLocation();

    useEffect( () => {
        setViewId(splitPath(pathname,2));
    }, [] );

    return (
        <>
        </>
    )
}

export default Viewer;