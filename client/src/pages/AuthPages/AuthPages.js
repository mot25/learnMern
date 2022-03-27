import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Auth from './Auth'
import './AuthPages.scss'
import Login from './Login'

export default function AuthPages() {
    return (
        <>
            <div className="container">
                <div className="auth-page">
                    <Routes>
                        <Route path="/auth" element={<Auth />} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </div>
            </div>
        </>
    )
}
