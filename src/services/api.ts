import axios, { AxiosInstance } from 'axios';
import { RamalType } from '../types/ramal';


export class RamalApi {

    ramalApi: AxiosInstance;

    constructor() {
        let host = process.env.API_URL || "http://localhost:3006";

        this.ramalApi = axios.create(
            {
                baseURL: host,
                withCredentials: false,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                }
            });
    }

    async getAllRamais() {
        let result = await this.ramalApi.get<RamalType[]>('/ramais');
        return result.data;
    }

    async getRamaisFilter(value: string) {
        let result = await this.ramalApi.get<RamalType[]>(`/ramais/filter/${value}`);
        return result.data;
    }


}