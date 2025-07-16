import { NewsResponse } from "@/types/articleType";
import axios from "axios";

const API_KEY = '536c9c32e4674e98a741fa9d8e214f27';
const BASE_URL = 'https://newsapi.org/v2'

// GET ARTICLE
export const getTopHeadlines = async (country: string = 'us'): Promise<NewsResponse> => {
    const response = await axios.get<NewsResponse>(`${BASE_URL}/top-headlines`, {
        params: {
            country,
            apiKey: API_KEY,
        }
    });
    return response.data;
}
