import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Auth from './Auth'
import Login from './Login'
import './AuthPages.scss'
import axios from 'axios'

export default function AuthPages() {
    const [form, setForm] = useState({
        email: '',
        password: ''
    })


    const changeHandler = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value, })
    }

    const registerHandler = async () => {
        try {
            await axios.post('/api/auth/c', { ...form }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                console.log(res);
            })
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div className="container">
            <div className="auth-page">
                <Routes>
                    <Route path="/auth" element={<Auth changeHandler={changeHandler} />} />
                    <Route path="/" element={<Login registerHandler={registerHandler} changeHandler={changeHandler} />} />
                </Routes>
            </div>
        </div>
    )
}
