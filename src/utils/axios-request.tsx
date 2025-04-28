/**
 * Axios Requests
 */
// /**
//  * Common function for axios requests
//  * @param url string
//  * @param method string
//  * @param data any
//  * @param headers any
//  * @param config any
//  * @param callback ()=>{}
//  * @param errorCallback ()=>{}
//  */
// function axiosRequest(
//   url: string,
//   method: string,
//   data: any,
//   headers: any,
//   config: any,
//   callback: any,
//   errorCallback: any
// ) {
//   axios({
//     url: url,
//     method: method,
//     data: data,
//     headers: headers,
//     ...config,
//   })
//     .then((response) => {
//       callback(response);
//     })
//     .catch((error) => {
//       console.log(error);
//       errorCallback(error);
//     });
// }
