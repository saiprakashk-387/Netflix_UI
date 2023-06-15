import { useState, useEffect } from 'react';
import '../AdmidDashboard/Admindashboard.css';
import Logo from '../../../img/logo.png';
import Logo1 from '../../../img/inter.png';
import { useNavigate } from 'react-router-dom';
 import Footer from '../../Footer';
 import Cards from '../../Cards/Cards';
import { userlogout } from '../../../Constants/Index';

const MovieGener = () => {
    const navigate = useNavigate();
    const [moviedata, setMovieData] = useState([]);
    const [movieType, setMovieType] = useState()

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movieType ? movieType : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
            .then(res => res.json())
            .then(data => setMovieData(data.results))

    }, [movieType]);
    const handleChange = (value) => {
        searchingData(value);

    }
    const searchingData = (value) => {
        const lowercaseval = value.toLowerCase().trim();

        if (!lowercaseval) {
            setMovieData(moviedata);
            window.location.reload();
        }
        else {
            const filMovie = moviedata.filter((movie) => {
                return (
                    Object.keys(movie).some((key) => {
                        return (
                            movie[key].toString().toLowerCase().includes(lowercaseval)
                        )

                    })
                )
            })
            setMovieData(filMovie);

        }
    }
    const route=()=>{
        navigate('/')
    }
    const moviesCategories = [
        {
            name: "Popular",
            value: "popular"
        }, {
            name: "Top Rated",
            value: "top_rated"
        }, {
            name: "Up Coming",
            value: "upcoming"
        }
    ]
    return (
        <>
            <div className="row">
                <div className="bgimg loginBg">
                    <div className="cover cover1">
                        <div className="logo">
                            <img src={Logo} alt="" onClick={route}/>
                            <div className="navBar nav-Dis">
                                <select className="language lang">
                                    <option value="">&#xF3EE;
                                        English</option>
                                    <option value="">&#xF3EE;
                                        मराठी
                                    </option>
                                    <option value="">&#xF3EE;
                                        हिन्दी
                                    </option>
                                </select>
                                <div>
                                    <button className="btn" onClick={() => userlogout(navigate)}>Log Out</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='serchSec'>
                    <div className='navBar' style={{ paddingBottom: "1rem" }}>
                            {moviesCategories.map((val, i) => {
                                return (

                                    <a href='#'><span className='mov-ctg ' onClick={() => { setMovieType(val?.value) }} style={{ paddingRight: "20px", fontSize: "2rem" }}>{val?.name}</span></a>
                                )
                            })}
                        </div>
                        <div>
                            <input type="text" placeholder='Search Movie Name' className='serchBarr' onChange={e => handleChange(e.target.value)} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="l-movie">
                {
                    moviesCategories.map(movie => (
                        <div className="" onClick={() => { setMovieType(movie?.value) }}>
                        <img className="cards__img" src={Logo1} />
                        <div className="cards__overlay">
                            <div className="card__title">{movie ? movie.name : ""}</div>
                            <div className="card__runtime">
                                {movie ? movie.release_date : ""}
                                <span className="card__rating">{movie ? movie.vote_average : ""}<i className="fas fa-star" /></span>
                            </div>
                            <div className="card__description">{movie ? movie.overview: ""}</div>
                        </div>
                    </div>
                    ))
                }
            </div>
            <Footer />

        </>
    );
};

export default MovieGener;