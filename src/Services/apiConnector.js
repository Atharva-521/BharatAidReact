import axios from "axios"

const axiosInstance = axios.create({});

export const apiConnector = async (method, url, body, params, headers) => {
    try {
        const response = await axiosInstance({
            method: method,
            url: url,
            data: body ? body : null,
            params: params ? params : null,
            headers: headers ? headers : null
        });
        console.log("response:", response.data);
        return response.data;
    } catch (error) {
        if (error.response) {
            console.error("Error response:", error.response.data);
            return error.response.data;
        } else {
            console.error("Error:", error.message);
            return { error: error.message };
        }
    }
};
