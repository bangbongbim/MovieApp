import React, { useState, useEffect } from 'react'
import styles from './Home.module.scss'
import axios from 'axios'

import Movie from '../components/Movie'


const Home = () => {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getMoviesApi = async () => {
    try {
      const { data: { data: { movies } } } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating")
      setMovies(movies)
      console.log(movies)
      setIsLoading(false)
    }
    catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    getMoviesApi()
  }, [])
  return (
    <section className={styles['container']}>
      {isLoading ? (<div className={styles['loader']}>
        <span className={styles['loader_text']}>Loading...</span>
      </div>) : <div className={styles['movies']}>
        {movies.map((movie) => <Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} genres={movie.genres} />)}
      </div>}


    </section>
  );
}

export default Home;
