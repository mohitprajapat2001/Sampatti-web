/**
 * Axios Requests
 */
import axios from 'axios';

/**
 * Common function for get requests
 * @param url string
 * @param headers any
 * @param config any
 * @param callback ()=>{}
 * @param errorCallback ()=>{}
 */
export function getRequest(url: string, headers: any, config: any, callback: any, errorCallback: any) {
    axiosRequest(url, 'GET', null, headers, config, callback, errorCallback);
}

/**
 * Common function for post requests
 * @param url string
 * @param data any
 * @param headers any
 * @param config any
 * @param callback ()=>{}
 * @param errorCallback ()=>{}
 */
export function postRequest(url: string, data: any, headers: any, config: any, callback: any, errorCallback: any) {
    axiosRequest(url, 'POST', data, headers, config, callback, errorCallback);
}

/**
 * Common function for patch requests
 * @param url string
 * @param data any
 * @param headers any
 * @param config any
 * @param callback ()=>{}
 * @param errorCallback ()=>{}
 */
export function patchRequest(url: string, data: any, headers: any, config: any, callback: any, errorCallback: any) {
    axiosRequest(url, 'PATCH', data, headers, config, callback, errorCallback);
}

/**
 * Common function for put requests
 * @param url string
 * @param data any
 * @param headers any
 * @param config any
 * @param callback ()=>{}
 * @param errorCallback ()=>{}
 */
export function putRequest(url: string, data: any, headers: any, config: any, callback: any, errorCallback: any) {
    axiosRequest(url, 'PUT', data, headers, config, callback, errorCallback);
}
/**
 * Common function for delete requests
 * @param url string
 * @param headers any
 * @param config any
 * @param callback ()=>{}
 * @param errorCallback ()=>{}
 */
export function deleteRequest(url: string, headers: any, config: any, callback: any, errorCallback: any) {
    axiosRequest(url, 'DELETE', null, headers, config, callback, errorCallback);
}

/**
 * Common function for axios requests
 * @param url string
 * @param method string
 * @param data any
 * @param headers any
 * @param config any
 * @param callback ()=>{}
 * @param errorCallback ()=>{}
 */
function axiosRequest(
    url: string,
    method: string,
    data: any,
    headers: any,
    config: any,
    callback: any,
    errorCallback: any
) {
    axios({
        url: url,
        method: method,
        data: data,
        headers: headers,
        ...config,
    })
        .then((response) => {
            callback(response);
        })
        .catch((error) => {
            console.log(error);
            errorCallback(error);
        });
}
