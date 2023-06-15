import React from 'react';
import '../Login/Login.css';
import Logo from '../../../img/logo.png';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useState } from 'react';
import { loginApi } from '../../../Actions/auth';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [inputValues, setInputValues] = useState({
        username: '', password: ''
    });
    const handleInput = event => {
        const { name, value } = event.target;
        setInputValues({ ...inputValues, [name]: value });
    };

    const getNavigate = async () => {
        let values;
        if (inputValues?.username.includes("@")) {
            values = { email: inputValues?.username, password: inputValues?.password }
        } else {
            values = { number: inputValues?.username, password: inputValues?.password }
        }
         await dispatch(loginApi(values, navigate))
    }
    const getSignin = () => {
        navigate('/signin')
    }
    const loginHandler = (e) => {
        e.preventDefault()
    }
    return (
        <>
            <header className="showcase">
                <div className="logo-1">
                    <img className="logoImg" src={Logo} alt="" onClick={() => navigate("/")} />
                </div>
                <div className="showcase-content">
                    <div className="formm">
                        <form onSubmit={loginHandler}>
                            <h2 className="signHeading">Welcome back</h2>
                            <div className="info">
                                <input className="email" type="text" name="username" value={inputValues.username} placeholder="Email or phone number" onChange={(e) => handleInput(e)} required /> <br />
                            </div>
                            <div className="info">
                                <input className="email" autoComplete='off' type="password" name="password" value={inputValues.password} placeholder="Password" onChange={(e) => handleInput(e)} required />
                            </div>
                            <div className="signbtn">
                                {
                                    inputValues?.username && inputValues?.password ? <button className="btn btnSign" type="submit" onClick={getNavigate}>Login</button> : <button className="btn btnSign" type="submit" >Login</button>
                                }

                            </div>
                            <div className="help">
                                <div>
                                    <input value="true" type="checkbox" style={{ height: "18px", width: "18px" }} />
                                </div>
                                <label className='signColr'>Remember me</label>
                                <p className='signColr need'>Need Help ?</p>
                                {/* <a href="#" ></a> */}
                            </div>
                        </form>
                    </div>
                    <div className="signup">
                        <p className='signColr'>New to Netflix ?</p>
                        <p className='sing-in' onClick={getSignin}>Sign up now</p>
                    </div>
                </div>

            </header>

        </>
    );
};

export default Login;