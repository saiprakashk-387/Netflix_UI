import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
     const navigate = useNavigate();

    return (
        <>
            <div className="gap"></div>
            <div className="row1">
                <div className="call">
                    <h3>Questions?Call  000-800-040-0100</h3>
                </div>
                <div className="footer">
                    <div>
                    
                        <li>FAQ</li>
                        <li>Help Centre</li>
                        <li>Account</li>
                        <li>Media Centre</li>
                    </div>
                    <div>
                        <li>Investor Relations</li>
                        <li>Jobs</li>
                        <li>Ways to Watch</li>
                        <li>Terms of Use</li></div>
                    <div>
                        <li>Privacy</li>
                        <li>Cookie Preferences</li>
                        <li>Corporate Information</li>
                        <li>Contact Us</li></div>
                    <div>
                        <li>Speed Test</li>
                        <li> Legal Notices</li>
                        <li>Only on Netflix</li><br />
                    </div>
                </div>
                <div className="call1">
                    <div className='call2'>
                    <select className="language">
                        <option value="">&#xF3EE; English</option>
                        <option value="">&#xF3EE; मराठी</option>
                        <option value="">&#xF3EE; हिन्दी</option>
                    </select>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;