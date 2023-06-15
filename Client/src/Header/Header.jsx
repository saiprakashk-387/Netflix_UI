import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Logo from '../img/logo.png';
import { userlogout } from '../Constants/Index';
import { GetAnalyticsSelector, profileUpdatetSelector } from '../Redux/Slice';
import { useDispatch, useSelector } from 'react-redux';
import { getAnalyticsAPI } from '../Actions/adminApi';

const Header = (props) => {
    const { val } = props;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [inputValues, setInputValues] = useState();

    const { profileUpdate } = useSelector(profileUpdatetSelector);
    //   const { analyticsData } = useSelector(GetAnalyticsSelector);
    useEffect(() => {
        setInputValues(JSON.parse(sessionStorage.getItem('userInfo')));
    }, [profileUpdate])
     useEffect(() => {
        if (inputValues?.role === 'admin') {
            dispatch(getAnalyticsAPI)
        }
    }, [])

    const route = (inputValues) => {
         if (inputValues.role === 'admin') {
            navigate('/admindashbord')
        } else if (inputValues.role === 'user') {
            navigate('/dashbord')
        } else {
            navigate('/manager')
        }

    }

    return (
        <div className="logo">
            <img src={Logo} alt="" onClick={() => { route(inputValues) }} />
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
                <div className="dropdown" style={{ float: 'right' }}>
                    <button className="dropbtn">{inputValues?.name}</button>
                    <div className="dropdown-content">
                        <li onClick={() => { navigate('/profile') }} >Profile</li>
                        {/* {inputValues?.role === 'admin' && <li onClick={() => { navigate('/analytics2',{ state: { value:val } }) }} >Analytics old</li>} */}
                        {inputValues?.role === 'admin' && <li onClick={() => { navigate('/analytics', { state: { value: val } }) }} >Analytics</li>}
                        <li onClick={() => userlogout(navigate)}>Logout</li>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header