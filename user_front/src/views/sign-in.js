import axios from 'axios'
import Cookies from 'js-cookie'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const initialData = {
    userName: '',
    password: ''
}

const TOKEN = "token";

const SignIn = () => {
    const [data, setData] = useState(initialData)
    const [error, setError] = useState()
    const navigate = useNavigate();

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let loginData = {
            userName: data.userName,
            password: data.password
        };

        axios({
            url: "http://64.227.172.35:3000/v1/auth/login",
            method: "POST",
            data: loginData,
        })
            .then((response) => {
                Cookies.set(TOKEN, response.data.token, { path: '/' })
                navigate('/form-test')
            })
            .catch((err) => { setError("Somthing went Wrong!") });
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <section className="MainContainer">
                    <section className="LoginContainer">
                        <section className="LoginHeaderContainer">
                            <div className="LoginHeaderTitle">
                                Log in
                            </div>
                            <div className="LoginHeaderSubTitle">
                                Welcome to <b>Pregnancy app!</b> Please Enter your Details.
                            </div>
                        </section>
                        <section className="FormContainer">
                            <div className="InputContainer">
                                <label className="label">User Name*</label>
                                <input className="input" type="text" name='userName' onChange={handleChange} />
                            </div>
                            <div className="InputContainer">
                                <label className="label">Password*</label>
                                <input className="input" type="password" onChange={handleChange} name='password' />
                            </div>
                        </section>
                        <section className="ButtonsContainer">
                            <div className="SignInButtonContainer">
                                <button className="SigninButton">Sign in</button>
                            </div>
                        </section>
                        <div style={{ color: 'red' }}>
                            {error}
                        </div>
                    </section>
                </section>
            </form>
        </>
    )
}

export default SignIn;