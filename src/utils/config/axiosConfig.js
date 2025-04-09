import axios from "axios"
export let config = {
    withCredentials: true,
    credentials: 'include',
    // headers: {
    //     // headers: {
    //     //     // "Authorization": "Bearer 8|4OgvvDUQEnJN6k5y7ROUIr7WK2q3WzInKGFVhIASe1ad07e8",
    //         // "Authorization": "Bearer 3|dbHTdZth8DFjYkQ2BP13lDeg3jizASyORGQ51D9w77ab2e7f", //DCISO
    //     // "Authorization": "Bearer 2|JCWbvXtpiypCjD91eCwKRLQUji1BgieuYdjA6QUj55be69c5", //CISO
    //     //     // "Authorization": "Bearer 15|OtFQHdaEJ8Bd7OvsKTqCWxbxiMjFFyn5akBpSrEk7e8df6e5", //Engineer
    //     //     // "Authorization": "Bearer 8|4OgvvDUQEnJN6k5y7ROUIr7WK2q3WzInKGFVhIASe1ad07e8",

    //     //     "Content-Type": 'application/json',
    //     // }
    //     "Content-Type": 'application/json',
    // }
}
export let megatron = axios.create(config)
// megatron.defaults.timeout = 5000