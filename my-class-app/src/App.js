import React,{ useState, useEffect,useCallback }  from 'react';
import './App.css';
import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie';

function App() {
 const[movies,setMovies] = useState([]); 
 const [isLoading, setIsLoading] = useState(false);
 const [error, setError] = useState(null);

// useEffect(()=>
// {
//   fetchMoviesHandler();
// },[fetchMoviesHandler]);
  // function fetchMoviesHandler(){
  //   fetch('https://swapi.dev/api/films/').then((response)=>
  //   {
  //     return response.json();
  //   }).then((data)=>  
  //   {

  // async function fetchMoviesHandler(){
  const fetchMoviesHandler = useCallback(async()=>{
    setIsLoading(true);
    setError(null);
    try{
      const response = await fetch('https://react-http-14c45-default-rtdb.firebaseio.com/movies.json');
      if(!response.ok){
        throw new Error('something went wrong!');
        }
      const data =  await response.json();
      // data.results;
      const loadedMovies = [];

      for(const key in data)
      {
        loadedMovies.push({
          id:key,
          title:data[key].title,
          openingText:data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }
    

      
        // const transfromedMovies = data.map(movieData => {
        //   return{
        //     id: movieData.episode_id,
        //     title: movieData.title,
        //     openingText: movieData.opening_crawl,
        //     releaseDate: movieData.release_date,
        //   };
        // });
        setMovies(loadedMovies);
      }
      catch(error){
        setError(error.message);
      }
      setIsLoading(false);
    },[]);
  
    useEffect(()=>
    {
      fetchMoviesHandler();
    },[fetchMoviesHandler]);

    async function addMovieHandler(movie){
      // console.log(movie);
      const response = await fetch('https://react-http-14c45-default-rtdb.firebaseio.com/movies.json',{
        method:'POST',
        body: JSON.stringify(movie),
        headers:{
          'content-Type' : 'application/json'
        }
      });
      const data =  await response.json();
      console.log(data);

    //   const loadedMovies = [];

    //   for(const key in data)
    //   {
    //     loadedMovies.push({
    //       id:key,
    //       title:data[key].title,
    //       openingText:data[key].openingText,
    //       releaseDate: data[key].releaseDate,
    //     });
    //   }
    // }
    }
    let content = <p>found no movies.</p>;

    if(movies.length > 0){
      content = <MoviesList movies={movies} />;
    }
    if(error){
      content = <p>{error}</p>;
    }
    if(isLoading){
      content= <p>Loading...</p>;
    }
    
  

    return(
      <React.Fragment>
        <section>
          <AddMovie onAddMovie={addMovieHandler} />
        </section>
        <section>
          <button onClick={fetchMoviesHandler}>Fetch Movies</button>
        </section>
        <section>{content}</section>
      </React.Fragment>
    );
  }

export default App;
