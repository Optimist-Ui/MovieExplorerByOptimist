'use client'
import Image from 'next/image';
import React from 'react'

const MovieCard = ({movie, onClick}) => {
    const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const truncatedTilte = movie.title.length > 25 ? movie.title.substring(0,25) + "..." : movie.title;
  return (
    <div onClick={()=>onClick(movie)} className='cursor-pointer'>
      <div className='relative w-64 h-96'>
        <Image 
        src={imageUrl}
        alt='truncatedTitle'
        layout='responsive'
        width={128}
        height={192}
        objectFit='cover'
        className='rounded-md'
        />
      </div>
      <h3>{truncatedTilte}</h3>
    </div>
  )
}

export default MovieCard
