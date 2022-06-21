
export const BASE_URL = "http://127.0.0.1:8080"

const TIME_OUT = 60*1000;

const error = {
    status: false,
    json: {
        error: ["연결이 원활하지 않습니다."]
    }
}

const request = (url, option) => {
    return fetch(`${BASE_URL}/${url}`, option);
}

const timeout = () => {
    return new Promise((_, reject) => setTimeout(() => reject(new Error("timeout")), TIME_OUT));
}

export const promise = async (url, option) => {
    return await Promise.race([
        request(url, option),
        timeout()
    ]);
}

export const status = async(url, option)=>{
    const data = await promise(url,option).catch(
        () => {
            return error;
        }
    );
    return data;
}

export const response = async(url, option) => {
    const data = await status(url, option);
    
    const state = data.ok;
    const code = data.status;
    const text = await data.text();
    const json = text.length? JSON.parse(text) : "";

    return{
        state,
        code,
        json
    };
};