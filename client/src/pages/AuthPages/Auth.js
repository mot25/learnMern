import React from 'react'
import { Link } from 'react-router-dom'

export default function Auth() {
    return (
        <div>
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
                    <Link to="/" className='btn-outline btn-reg' > Not accounts ?</Link>
                </div>
            </form>
        </div>
    )
}
