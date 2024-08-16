'use client'
import React, { useEffect, useState } from 'react'
import MovieGrid from '../components/MovieGrid';
import Modal from '../components/Modal';

const NowPlaying = () => {
    const [movies,setMovies] = useState([]);
    let [selectedMovie, setSelectedMovie] = useState(null)
    useEffect(()=>{
          fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=88f78d436c25d45a918fcef760f71f28`)
          .then((response)=>response.json())
          .then((data)=> setMovies(data.results))
          .catch((error)=>console.error('Error Fecthing Data',error))
    },[])
    
    const handleModalClose =()=>{
      setSelectedMovie(null)
    }
  const handleClick = (movie) =>{
   setSelectedMovie(movie);
  }
  return (
    <div className='bg-gray-900 text-white min-h-screen'>
      <main className='flex flex-col items-center justify-center gap-5 py-2 min-h-screen'>
        <h1 className='font-bold text-6xl m-4'>Now Playing</h1>
        <MovieGrid movies={movies} handleClick={handleClick}/>
        {
            selectedMovie   && <Modal movies={selectedMovie} onClose={handleModalClose} />
        }
      </main>
    </div>
  )
}

export default NowPlaying
