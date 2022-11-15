import React from 'react';
import '../styles/Login.scss'

const Login = () => {
    return (
        <div className='forms'>
            <form action="" className='form'>
            <div className='input'>
                <label htmlFor="">email</label>
                <input type="text" name="" id="" placeholder='email'/>
            </div>
            <div class="input">
                <label htmlFor="">password</label>
                <input type="password" name="" id="" placeholder='password'/>
            </div>

                <button type='submit'>Next</button>

            </form>
        </div>
    )
}

export default Login