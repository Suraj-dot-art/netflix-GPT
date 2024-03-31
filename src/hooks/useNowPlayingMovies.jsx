import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addNowPlayMovies } from '../utils/movieSlice';
import { useEffect } from 'react';

const useNowPlayingMovies = () => {
    //fetching data from tmdb api and updating store
    const dispatch = useDispatch();

    const getNowPlayMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',API_OPTIONS);
      const json = await data.json()
      //console.log(json.results);
      dispatch(addNowPlayMovies(json.results)); 
    }
  
   useEffect(()=>{
    getNowPlayMovies();
   } ,[]);
}

export default useNowPlayingMovies;