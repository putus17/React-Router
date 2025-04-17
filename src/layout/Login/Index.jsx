import React from 'react'

 const Login = () => {
  return (
    <div className='Page'>
        <h1>🔑Login Page</h1>
        <form className='form'>
            <div className='form-group'>
                <label htmlFor='Email'>Email:</label>
                <input type='text' id='Email' name='Email' required />
            </div>
            <div className='form-group'>
                <label htmlFor='password'>Password:</label>
                <input type='password' id='password' name='password' required />
            </div>
            <button type='submit'>Login</button>
        </form>  
        </div>
  )
}
export default Login
