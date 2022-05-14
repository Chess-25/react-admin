const devBaseURL = "http://localhost:3001";
const proBaseURL = "http://localhost:3001";
export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL: proBaseURL;

export const TIME_OUT = 10000;


// let BASE_URL = ""
// const TIME_OUT = 10000

// if (process.env.NODE_ENV === "development") {
//   BASE_URL = "/api"
// } else if (process.env.NODE_ENV === "production") {
//   BASE_URL = "https://cmsapi.chenhaohui.cn"
// }

// export { BASE_URL, TIME_OUT }
