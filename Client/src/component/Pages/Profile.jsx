import React, { useEffect } from 'react';
import '../Pages/Login/Login.css';
import Logo from '../../img/logo.png';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';
import { profileUpdate } from '../../Actions/adminApi';
 
const Profile = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [inputValues, setInputValues] = useState({
        name: '', number: '', email: '', role: '', _id: ''
    });
     useEffect(() => {
        setInputValues(JSON.parse(sessionStorage.getItem('userInfo')));
    }, [])

    const handleInput = event => {
        const { name, value } = event.target;
        setInputValues({ ...inputValues, [name]: value });
    };

    const updateProfile = async () => {
   
        let value= {
            name :inputValues?.name,
            email :inputValues?.email,
            number :inputValues?.number
        }
        let id=inputValues._id
         await dispatch(profileUpdate(value,id))
    }

    const loginHandler = (e) => {
        e.preventDefault()
    }
    const navigaToDashboard = (val) => {
        if (val === 'admin') {
            navigate(`/admindashbord`)
        } else if (val === 'manager') {
            navigate('/manager')
        } else {
            navigate('/dashbord')
        }

    }
    return (
        <>
            <header className="showcase">
                <div className="logo-1">
                    <img className="logoImg" src={Logo} alt="" onClick={() => navigaToDashboard(inputValues?.role)} />
                </div>
                <div className="showcase-content">
                    <div className="formm">
                        <form onSubmit={loginHandler}>
                            <h2 className="signHeading">My Profile</h2>
                            <div className="info">
                                <input className="email" type="email" name="email" value={inputValues.email} placeholder="Email" onChange={(e) => handleInput(e)} required /> <br />
                            </div>
                            <div className="info">
                                <input className="email" type="text" name="name" value={inputValues.name} placeholder="Name" onChange={(e) => handleInput(e)} required /> <br />
                            </div>
                            <div className="info">
                                <input className="email" type="number" name="number" value={inputValues.number} placeholder="Phone number" onChange={(e) => handleInput(e)} required /> <br />
                            </div>


                            <div className="signbtn">
                                <button className="btn btnSign" type="submit" onClick={updateProfile} >Update Profile</button>                               

                            </div>

                        </form>
                    </div>
                    <div className="signup">
                        <p className='sing-in' onClick={() => { navigaToDashboard(inputValues?.role) }}>Back to Dashboard</p>
                    </div>
                </div>

            </header>

        </>
    );
};

export default Profile;