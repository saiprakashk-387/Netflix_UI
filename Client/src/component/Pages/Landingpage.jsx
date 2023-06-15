import React from 'react';
import '../Pages/Landingpage.css';
import Logoo from '../../img/logo.png';
import { useNavigate } from 'react-router-dom';
import Services from '../../Services/Services';
import Questions from '../../Questions/Questions';
import Footer from '../../Footer/Footer';

const Landingpage = () => {
    const navigate = useNavigate();
    const route = () => {
        navigate('/')
    }
    return (
        <>
            <div className="row">
                <div className="bgimg">
                    <div className="cover">
                        <div className="logo">
                            <img src={Logoo} alt="" onClick={route} />
                            <div className="navBar nav-Dis">
                                <select className="language">
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
                                    <button className="btn" onClick={() => navigate("/login")}>Sign In</button>
                                </div>
                            </div>
                        </div>
                        <div className="list">
                            <h1>Unlimited movies, TV <br />shows and more.</h1>
                            <h2>Watch anywhere. Cancel anytime.</h2>
                            <h3 style={{ margin: "0px 10px 0px 10px" }}>Ready to watch? <span className='sing-in' onClick={() => navigate("/login")}>Sign In</span>.</h3>
                        </div>
                    </div>
                </div>
            </div>
            <Services />
            <Questions />
            <Footer />

        </>
    );
};

export default Landingpage;