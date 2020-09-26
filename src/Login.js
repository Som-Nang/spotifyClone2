import React from 'react'
import './Login.css';
import { loginUrl } from './spotify';

function Login() {
    return (
        <div className="login">

            {/*Spotify Logo */}
            <img src="https://yungcitizen.com/wp-content/uploads/2018/09/spotify-logo-horizontal-white.png" alt="" />

            {/* Spotify Logo*/}
            <div className="bottom">
                <div className="option">
                    <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
                </div>
                <p >&copy;DIN SOMNANG 2020</p>
            </div>

        </div >
    )
}

export default Login;
