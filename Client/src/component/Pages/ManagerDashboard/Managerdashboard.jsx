import { useState, useEffect } from 'react';
import '../ManagerDashboard/Managerdashboard.css';
import Logo from '../../../img/logo.png';
import { useNavigate } from 'react-router-dom';
import Footer from '../../../Footer/Footer';
import Cards from '../../Cards/Cards';
import { moviesGeners, userlogout } from '../../../Constants/Index';
import Header from '../../../Header/Header';

const Managerdashboard = () => {
    const navigate = useNavigate();
    const [moviedata, setMovieData] = useState([]);
    const [movieType, setMovieType] = useState()
    const [active, setActive] = useState(0);
    const handleClick = (val, i) => {
        setMovieType(val?.value)
        setActive(i);
    };
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movieType ? movieType : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
            .then(res => res.json())
            .then(data => setMovieData(data.results))

    }, [movieType]);
    const handleChange = (value) => {
        searchingData(value);

    }

    const searchingData = (value) => {
        const lowercaseval = value?.toLowerCase().trim();

        if (!lowercaseval) {
            setMovieData(moviedata);
            window.location.reload();
        }
        else {
            const filMovie = moviedata?.filter((movie) => {
                return (
                    Object.keys(movie).some((key) => {
                        return (
                            movie[key]?.toString().toLowerCase().includes(lowercaseval)
                        )

                    })
                )
            })
            setMovieData(filMovie);

        }
    }


    return (
        <>
            <div className="row">
                <div className="bgimg loginBg">
                    <div className="cover cover1">
                        <Header />
                    </div>
                    <div className='serchSec'>
                        <div className='navBar' style={{ paddingBottom: "1rem" }}>
                            {moviesGeners.map((val, i) => {
                                return (

                                    <a href='#' style={{ color: i == active ? "red" : "White" }} key={i}><span className='mov-ctg' onClick={() => { handleClick(val, i) }}
                                        style={{ paddingRight: "20px", fontSize: "2rem" }}>{val?.name}</span></a>
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
                    moviedata.map((movie, i) => (
                        <Cards movie={movie} key={i} />
                    ))
                }
            </div>
            <Footer />

        </>
    );
};

export default Managerdashboard;