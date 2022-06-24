import {response} from "../Common";

export const getViewer = async (data) => {
    const option = {
        method: "GET",
        headers: {
            "Content-Type": "application/json;charset=UTF-8"
        },
    };

    return await response(`api/dashboard/${data}`, option);
}

export const postViewer = async (id, fileId, data) => {
    const option = {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=UTF-8"
        },
        body: JSON.stringify(data)
    };

    return await response(`api/dashboard/send/${id}/${fileId}`, option);
}

export const deleteViewer = async (id) => {
    const option = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json;charset=UTF-8"
        },
    };

    return await response(`api/dashboard/${id}`, option);
}