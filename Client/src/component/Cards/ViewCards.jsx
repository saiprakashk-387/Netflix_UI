import { useState, useEffect } from 'react';
import '../Cards/Cards.css';
import Logo from '../../img/logo.png';
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from 'react-router-dom';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import Footer from '../../Footer/Footer';
import { userlogout } from '../../Constants/Index';
import { AnalyticsAction } from '../../Redux/Slice';
import Header from '../../Header/Header'

const ViewCards = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const { click, movie } = location?.state
    const [isLoading, setIsLoading] = useState(true)
    const [count, setCount] = useState()

    useEffect(() => {

        if (movie) {
            let obj = {
                title: movie.original_title,
                count: 1
            }
            console.log('obj',obj);
            dispatch(AnalyticsAction({ ...obj,obj}))
            setCount({ ...count, obj })
        }
        setTimeout(() => {
            setIsLoading(false)
          }, 1500)
    }, [])
  
     return (
        <>
            <div className="row">
                <div className="bgimg loginBg">
                    <div className="cover cover1">
                        <Header/>                       
                    </div>
                </div>
            </div>
            <div className="l-movie">
                {
                    isLoading
                        ?
                        <div className="cards">
                            <SkeletonTheme color="#202020" highlightColor="#444">
                                <Skeleton height={300} duration={2} />
                            </SkeletonTheme>
                        </div>
                        :
                        <div className="cards">
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
            </div>
            <Footer />

        </>
    );
};

export default ViewCards;