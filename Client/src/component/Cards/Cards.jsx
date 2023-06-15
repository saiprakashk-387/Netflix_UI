import React, { useEffect, useState } from "react"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import './Cards.css';
import { useNavigate } from 'react-router-dom';
import { addAnalyticsAPI } from "../../Actions/adminApi";
import { useDispatch } from "react-redux";

const Cards = ({ movie }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, [])
    const viewMovie = (movie) => {
        let data={name:movie?.title}
        // console.log('title',data);
        dispatch(addAnalyticsAPI(data))
        navigate('/viewmovie', { state: { movie: movie, click: true } });
    }
    return <>
        {
            isLoading
                ?
                <div className="cards">
                    <SkeletonTheme color="#202020" highlightColor="#444">
                        <Skeleton height={300} duration={2} />
                    </SkeletonTheme>
                </div>
                :
                <div className="cards" onClick={() => { viewMovie(movie) }}>
                    <img className="cards__img" src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ""}`} />
                    <div className="cards__overlay">
                        <div className="card__title">{movie ? movie.original_title : ""}</div>
                        <div className="card__runtime">
                            {movie ? movie.release_date : ""}
                            <span className="card__rating">{movie ? movie.vote_average : ""}<i className="fas fa-star" />*</span>
                        </div>
                        <div className="card__description">{movie ? movie.overview.slice(0, 118) + "..." : ""}</div>
                    </div>
                </div>
        }
    </>
}

export default Cards