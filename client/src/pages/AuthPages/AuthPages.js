import React from 'react'
import './AuthPages.scss'

export default function AuthPages() {
    return (
        <>
            <div className="container">
                <div className="auth-page">
                    <h3>Auth</h3>
                    <form className="form from-login">
                        <div className="row">
                            <div className="input-field col s12" >
                                <input type='text' name="email" className="validate" />
                                <label htmlFor="email" className="">Email</label>
                            </div>
                            <div className="input-field col s12" >
                                <input type='password' name="password" className="validate" />
                                <label htmlFor="password"> password</label>
                            </div>
                        </div>
                        <div className="row">
                            <button className="btn wawes-effect wawes-light btn btn-blue"> Enter</button>
                            <a className='btn-outline btn-reg' > Not accounts ?</a>
                        </div>
                    </form>


                    <h3>Sign up</h3>
                    <form className="form from-login">
                        <div className="row">
                            <div className="input-field col s12" >
                                <input type='text' name="email" className="validate" />
                                <label htmlFor="email" className="">Email</label>
                            </div>
                            <div className="input-field col s12" >
                                <input type='password' name="password" className="validate" />
                                <label htmlFor="password"> password</label>
                            </div>
                        </div>
                        <div className="row">
                            <button className="btn wawes-effect wawes-light btn btn-blue">Registration</button>
                            <a className='btn-outline btn-reg' > Have accounts ?</a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
