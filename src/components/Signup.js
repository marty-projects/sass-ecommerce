import React from 'react'
import '../styles/Signup.scss'

const Signup = () => {
    return (
        <div className='sign-upPage'>
            <form action="" className='signup-form'>
               <div class="input">
                <label htmlFor="">email</label>
                <input type="text" name="" id="" />
                </div>
                <div class="input">
                <label htmlFor="">password</label>
                <input type="password" name="" id="" />
                </div>
                <div class="input">
                <label htmlFor="">Phone</label>
                <input type="number" name="" id="" />
                </div>
                <div class="input">
                <label htmlFor="">Are you a human ? </label>
                <input type="checkbox" name="" id="" />
                </div>
                <button>Register</button>
            </form>
        </div>
    )
}

export default Signup