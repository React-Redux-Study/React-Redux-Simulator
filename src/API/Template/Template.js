import {promise} from "../Common";

export const register = async (data) => {
    /**
    {
        "title": "title",
        "content": "content",
        "path": "//192.168.0.207/aidm/media/fcecd46d-41c5-4313-97d0-5dfde422c49f/image",
        "mirror": 1,
        "mirrorRegex": "V,H",
        "raw": "{'sample':'sample'}"
    }
     */
    const option = {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=UTF-8"
        },
        body: JSON.stringify({
            data
        })
    }

    return await promise("/api/dashboard", option);
}
