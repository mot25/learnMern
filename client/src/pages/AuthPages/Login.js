import React from 'react'
import { Link } from 'react-router-dom'

export default function Login({ registerHandler, changeHandler }) {
    return (
        <div>
            <h3>Sign up</h3>
            <form className="form from-login" onSubmit={e => e.preventDefault()}>
                <div className="row">
                    <div className="input-field col s12" >
                        <input onChange={changeHandler} type='text' name="email" className="validate" />
                        <label htmlFor="email" className="">Email</label>
                    </div>
                    <div className="input-field col s12" >
                        <input onChange={changeHandler}  type='password' name="password" className="validate" />
                        <label htmlFor="password"> password</label>
                    </div>
                </div>
                <div className="row">
                    <button className="btn wawes-effect wawes-light btn btn-blue" onClick={registerHandler}>Registration</button>
                    <Link to="/" className='btn-outline btn-reg' > Have accounts ?</Link>
                </div>
            </form>
        </div>
    )
}
