import { ChangeEvent, FormEvent } from 'react';

import { useEffect, useState } from 'react';

import background from '../assets/images/login.svg';

import '../assets/styles/login.min.css';

const Login = () => {
    const [authData, setAuthData] = useState({ username: "", password: "" });

    const changeAuthData = (e: ChangeEvent<HTMLInputElement>) => setAuthData({ ...authData, [e.target.name]: e.target.value });

    useEffect(() => document.body.classList.add('login'));

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log(authData);
    };

    return (
        <main>
            <div className="form">
                <div className="top">
                    <span></span> Welcome
                </div>

                <div className="container">
                    <div className="title">
                        <h1>NTBD 2.0.1</h1>
                        <span className="sub">Log in to your account</span>
                    </div>

                    <form onSubmit={onSubmit}>
                        <div className="input-box">
                            <input type="text" name="username" placeholder="Username" onChange={changeAuthData} />
                            <span></span>
                        </div>

                        <div className="input-box">
                            <input type="password" name="password" placeholder="Password" onChange={changeAuthData} />
                            <span></span>
                        </div>

                        <button type="submit">Submit</button>
                    </form>

                    <p className="bottom">Password forgotten ? CHEH va voir dans la BDD ;p</p>
                </div>
            </div>

            <div className="background">
                <img src={background} alt="NTBD" />
            </div>
        </main>
    );
};

export default Login;
