import React from 'react'
import Footer from '../../../Footer/Footer';
import Header from '../../../Header/Header';
import MovieAnalytics from './MovieAnalytics';
import './MovieAnalytics.css'

const DemoBar = () => {
    return (
        <div>
            <div className="row">
                <div className="bgimg loginBg">
                    <div className="cover cover1">
                        <Header />
                    </div>
                </div>
            </div>
            <div style={{ "padding": "14px", "backgroundColor": "black" }}>
                <div style={{ "backgroundColor": "black", "padding": "3rem 0rem", }}>
                    {<MovieAnalytics />}
                </div>
            </div>

            <Footer />

        </div>
    )
}

export default DemoBar
