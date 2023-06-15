import React from 'react';
 import './Services.css';
import Tv from '../img/tv.png'
import Mobile from '../img/mobile.png'
import Card from './Card';

const Services = () => {
    return (
        <>
            <div className="gap"></div>
            <div className="services">
                <div className="gap"></div>
                <Card
                    heading={"Enjoy on your TV."}
                    detail={"Watch on smart TVs PlayStation Xbox Chromecast Apple TV Blu-ray players and more."}
                    image={Tv}
                />
                <div className="gap"></div>
                <div style={{flexDirection:"row-reverse",direction:"rtl"}}>
                <Card 
                    heading={"Download your shows to watch offline."}
                    detail={"Save your favourites easily and always have something to watch."}
                    image={Mobile}
                />
                </div>
                <div className="gap"></div>
                
            </div>
        </>
    );
};

export default Services;