'use client'

import { useState } from "react"
import MovieGrid from "./components/MovieGrid";
import Modal from "./components/Modal";


let searchMovies = async(query)=>{
  try{
    const   response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=88f78d436c25d45a918fcef760f71f28&query=${query}`);
    return await response.json()
  }
  catch(error){
      console.error("error fetching the Data");
      return([])
  }
}

export default function Home() {
  let [query,setQuery] = useState('')
  let [movies,setMovies] = useState([])
  let [selectedMovie, setSelectedMovie] = useState(null)
 
  const handleClick = (movie) =>{
   setSelectedMovie(movie);
  }
  const handleModalClose =()=>{
    setSelectedMovie(null)
  }
 
  let submitHandler =async (e) =>{
    e.preventDefault();
    if(!query)return;
    const result = await searchMovies(query)
    setMovies(result.results);
    
   
  }
  
  return (
   <div className="bg-gray-900 text-white min-h-screen">
        <main className="flex flex-col items-center justify-center min-h-screen py-2">
          <h1 className="font-bold text-7xl m-4">Movie Explorer</h1>
          <form onSubmit={submitHandler} className="m-8">
            <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for movies..."
            className="text-gray-900 w-80 px-4 py-2 text-2xl rounded"
            />
            <button type="submit" className="rounded bg-blue-500 px-4 py-2 ml-2 text-white text-2xl">Search</button>
          </form>
          <MovieGrid movies={movies} handleClick={handleClick}/>
        </main>
        <Modal movies={selectedMovie} onClose={handleModalClose}/>
   </div> 
  )
}
