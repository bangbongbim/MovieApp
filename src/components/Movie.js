import React from 'react'
import styles from './Movie.module.scss'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'


const Movie = ({id, year, title, summary, poster, genres }) => {
    return (
        <Link className={styles['link']} to={{ pathname: `/movie/${id}`, state: { year, title, summary, poster, genres } }}>
            <div className={styles['movie']}>
                <img src={poster} alt={title} title={title} />
                <div className={styles['movie_data']}>
                    <h3 className={styles['movie_title']}>{title}</h3>
                    <h5 className={styles['movie_year']}>{year}</h5>

                    <ul className={styles['movie__genres']}>{genres.map((genre, index) => (<li key={index} className={styles['genres_genre']}>
                        {genre}
                    </li>))}</ul>
                    <p className={styles['movie_summary']}>{summary.slice(0, 150)}...</p>

                </div>

            </div>
        </Link>
    )
}


Movie.prototype = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie