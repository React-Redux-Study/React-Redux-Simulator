
export const BASE_URL = "http://192.168.0.220:8080"

const request = (url, option) => {
    return fetch(`${BASE_URL}/${url}`, option);
}

const timeout = () => {
    return new Promise((_, reject) => setTimeout(() => reject(new Error("timeout")), TIME_OUT));
}

const promise = async (url, option) => {
    return await Promise.race([
        request(url, option),
        timeout()
    ]);
}