import React from 'react';
import '../App.css'
import { Routes, Route } from 'react-router-dom';
import App from '../App';
import Services from '../Services/Services';
import Questions from '../Questions/Questions';
import Footer from '../Footer/Footer';
import Login from '../component/Pages/Login/Login';
import Admindashboard from '../component/Pages/AdmidDashboard/Admindashboard';
import Signin from '../component/Pages/Signin/Signin';
import Managerdashboard from '../component/Pages/ManagerDashboard/Managerdashboard';
import Customerdashboard from '../component/Pages/CustomerDashboard/Customerdashboard';
import ViewCards from '../component/Cards/ViewCards';
import Profile from '../component/Pages/Profile';
import MovieAnalytics from '../component/Pages/Analytics/MovieAnalytics';
import DemoBar from '../component/Pages/Analytics/Movie1Analytics';
import NewAnalytics from '../component/Pages/Analytics/NewAnalytics';

const Routing = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<App />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/signin" element={<Signin />} />
                <Route exact path="/admindashbord" element={<Admindashboard />} />
                <Route exact path="/dashbord" element={<Customerdashboard />} />
                <Route exact path="/manager" element={<Managerdashboard />} />
                <Route exact path="/viewmovie" element={<ViewCards />} />
                <Route exact path="/footer" element={<Footer />} />
                <Route exact path="/questions" element={<Questions />} />
                <Route exact path="/services" element={<Services />} />
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/analytics2' element={<MovieAnalytics/>}/>
                <Route path='/analytics' element={<DemoBar/>}/>
                <Route path='/newanalytics' element={<NewAnalytics/>}/>
            </Routes>
        </>
    );
};

export default Routing;