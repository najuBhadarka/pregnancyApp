import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Form } from 'react-formio';

const FormRender = () => {
    const [formData, setFormData] = useState()
    console.log("formData:", formData)
    const navigate = useNavigate();

    useEffect(() => {
        axios({
            url: "http://localhost:3000/v1/questionbook/get-form",
            method: "GET",
        })
            .then((response) => {
                setFormData({
                    formDataJSON: JSON.parse(response?.data?.data.questions),
                    title: response?.data?.data?.title,
                    timeline: response?.data?.data?.timeline
                })
            })
            .catch((err) => { console.log(err) });
    }, [])

    return (
        <div>
            <header className="site-header">
                <div className="site-identity">
                    <h1><a href="#">Pregnancy App</a></h1>
                </div>
                <nav className="site-navigation">
                    <ul className="nav">
                        <li style={{ border: "1px solid black", padding: "5px", borderRadius: "5px" }} onClick={() => navigate('/')}><a href="#">LogOut</a></li>
                    </ul>
                </nav>
            </header>
            <hr/>
            <div className="container">
                <h3>Title: {formData?.title}</h3>
                <h5>Timeline: {formData?.timeline}</h5>
                <div className="row">
                    <div className="col">
                        <Form form={formData?.formDataJSON} onSubmit={(submission) => console.log("submission1", submission)} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormRender;