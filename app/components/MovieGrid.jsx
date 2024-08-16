import MovieCard from "./MovieCard";


const MovieGrid = ({movies,handleClick}) => {
    if(!movies.length) return null;
  return (
    <div className='mt-6 grid grid-cols-1 md:grid-cols-3 gap-5'>
          {
            movies.map((movie) =>(
                <MovieCard key={movie.id} onClick={handleClick} movie={movie}/>
            ))
          }
    </div>
  )
}

export default MovieGrid
