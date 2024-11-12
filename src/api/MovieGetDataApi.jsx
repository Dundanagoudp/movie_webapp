import axios from "axios";

const api = axios.create({
  baseURL: "https://www.omdbapi.com/",
});

export const getMovieDetails = async(movieID)=>{
      try {
            const res= await api.get(`/?i=${movieID}&apikey=e00c85c8`);
            console.log(res.data);
            return res.data;
            } catch (error) {
            console.log(error);
            
      }
}

