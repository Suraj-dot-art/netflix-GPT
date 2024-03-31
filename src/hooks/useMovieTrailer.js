import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";


const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch;

    const getMeTrailer = async() =>{
      
      const data = await fetch('https://api.themoviedb.org/3/movie/'+ movieId +'/videos?language=en-US', API_OPTIONS) //1011985
      const json =  await data.json();
      // console.log(json);
  
      const filterData = json.results.filter((video)=> video.type == "Trailer");
      const trailer = filterData.length ? filterData[0]: json.results[0];
      //console.log(trailer);
      dispatch(addTrailerVideo(trailer));
  
    }
  
    useEffect(()=> {
      getMeTrailer();
    },[]);
}

export default useMovieTrailer;