import {response} from "../Common";

export const getViewer =async (data) => {
    const option = {
        method: "GET",
        headers: {
            "Content-Type": "application/json;charset=UTF-8"
        },
    }

    return await response(`api/dashboard/${data}`, option);
}