import axios from "axios"

const axiosInstance = axios.create({});

export const apiConnector = async (method, url, body, params, headers) => {
    return axiosInstance({
        method: method,
        url: url,
        data: body ? body : null,
        params: params ? `${params}` : null,
        headers: headers ? `${headers}` : null
    });
};
