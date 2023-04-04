import { useState } from 'react'
import { loginUser } from '../api/api'

function LoginPage() {
  const [loginBody, setLoginBody] = useState({})
  const [redirect, setRedirect] = useState(false)
  function handleChange(e) {
    switch (e.target.id) {
      case 'email':
        setLoginBody((prev) => {
          return { ...prev, email: e.target.value }
        })
        break
      case 'password':
        setLoginBody((prev) => {
          return { ...prev, password: e.target.value }
        })
        break

      default:
        break
    }
  }
  function handleSubmit(e) {
    e.preventDefault()
    loginUser(loginBody, setRedirect)
  }
  return (
    <form onSubmit={handleSubmit} className='login'>
      <p>{redirect ? 'yes' : 'no'}</p>
      <h1>Login</h1>
      <input
        type='text'
        placeholder='email'
        value={loginBody.email}
        onChange={handleChange}
        id='email'
      />
      <input
        type='password'
        placeholder='password'
        value={loginBody.password}
        onChange={handleChange}
        id='password'
      />
      <button type='submit'>login</button>
    </form>
  )
}

export default LoginPage
