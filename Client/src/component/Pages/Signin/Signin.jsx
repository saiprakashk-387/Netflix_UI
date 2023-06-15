import React from 'react';
import '../Signin/Signin.css';
import Logo from '../../../img/logo.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { RegisterApi } from '../../../Actions/auth';


const Signin = () => {
    const navigate = useNavigate();

    const [inputValues, setInputValues] = useState({
        name: '', password: '', email: '', number: '', role: ""
    });
    const handleInput = event => {
        const { name, value } = event.target;
        setInputValues({ ...inputValues, [name]: value });
    };

    const getRegister = async () => {
        console.log('hiii');
        await RegisterApi(inputValues, navigate)
    }
     const getLogin = () => {
        navigate('/login')
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
                            <h2 className="signHeading">Create Account</h2>
                            <div className="info">
                                <input className="email" type="text" name="name" value={inputValues.name} placeholder="Enter Name" onChange={(e) => handleInput(e)} required />
                                <input className="email" type="email" name="email" value={inputValues.email} placeholder="Enter Valid Email" onChange={(e) => handleInput(e)} required /> <br />
                                <input className="email" type="number" name="number" value={inputValues.number} placeholder="Enter 10 Digits mobile Number" onChange={(e) => handleInput(e)} required />
                                <input className="email" type="password" autoComplete='off' name="password" value={inputValues.password} placeholder="Enter Password min 6 digits" onChange={(e) => handleInput(e)} required />
                            </div>
                            <div className="signbtn">
                                {
                                    inputValues?.name.length > 1 && inputValues?.password.length >= 6 && inputValues.number.length == 10 && inputValues?.email.includes('@') ?
                                        <button className="btn btnSign" type="submit" onClick={getRegister}>Sign Up</button>
                                        : <button className="btn btnSign" type="submit" style={{ color: "black" }}>Sign Up</button>
                                }
                            </div>
                            <div className="help">
                                <div>
                                    <input value="true" type="checkbox" style={{ height: "18px", width: "18px" }} />
                                </div>
                                <label className='signColr'>Remember me</label>
                                <p className='signColr '>Need Help ?</p>
                            </div>
                        </form>
                    </div>

                    <div className="signup">
                        <p className='signColr'>Already a member?</p>
                        <p className='sing-in' onClick={getLogin}>Login</p>
                    </div>
                </div>
            </header>

        </>
    );
};

export default Signin;