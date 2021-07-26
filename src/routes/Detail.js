import React, { useState, useEffect } from 'react'


const Detail = (props) => {
    const [detail, setDetail] = useState({})

    const setMovieDetail = () => {
        const state = props.location.state
        const history = props.history

        if (state === undefined) {
            history.push('/')
        }
        else {
            setDetail(props.location.state)
        }
    }

    useEffect(() => {
        setMovieDetail()
    }, [])

    return <h1>{detail.year}</h1>
}

export default Detail