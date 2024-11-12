import axios from "axios";

const api = axios.create({
    baseURL: "https://www.omdbapi.com/", 
});

// Get data from api
export const MovieCards = () => {
    return api.get(`/?i=tt3896198&apikey=e00c85c8&s=marvels&page=1`);
};

export const MovieKannada = () => {
    return api.get(`/?i=tt3896198&apikey=e00c85c8&s=kannada&page=1`);
};


export const MovieHindi = () => {
    return api.get(`/?i=tt3896198&apikey=e00c85c8&s=hindi&page=1`);
};

export const SportsIpl = () => {
    return api.get(`/?i=tt3896198&apikey=e00c85c8&s=cricket&page=1`);
};