import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Auth from './Auth'
import Login from './Login'
import './AuthPages.scss'

export default function AuthPages() {
    return (
        <div className="container">
            <div className="auth-page">
                <Routes>
                    <Route path="/auth" element={<Auth />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </div>
        </div>
    )
}
