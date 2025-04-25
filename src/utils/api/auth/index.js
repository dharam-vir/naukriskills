import { apiURL } from './apiURL';
// import megatron from 'megatron';
import { megatron } from '../../config/axiosConfig';

export async function fetchLogin(payload) {
    try {
        const data = await megatron.post(`${apiURL["fetchLogin"]}`, payload);
        console.log(data)
        return data.data
    } catch (error) {
        console.log(error)
        return
    }
}