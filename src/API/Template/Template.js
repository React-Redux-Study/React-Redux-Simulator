import {response} from "../Common";

export const getDashboard = async (data) => {
    const option = {
        method: "GET",
        headers: {
            "Content-Type": "application/json;charset=UTF-8"
        },
    }

    return await response(`api/dashboard?page=${data.page}&size=${data.size}`, option);
}