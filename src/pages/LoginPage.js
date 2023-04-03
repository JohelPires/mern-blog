import { useState } from 'react'

function LoginPage() {
  const [login, setLogin] = useState({ username: '', password: '' })
  function handleChange(e) {
    switch (e.target.id) {
      case 'username':
        setLogin((prev) => {
          return { ...prev, username: e.target.value }
        })
        break
      case 'password':
        setLogin((prev) => {
          return { ...prev, password: e.target.value }
        })
        break

      default:
        break
    }
  }

  return (
    <form className='login'>
      <h1>Login</h1>
      <input
        type='text'
        placeholder='username'
        value={login.username}
        onChange={handleChange}
        id='username'
      />
      <input
        type='password'
        placeholder='password'
        value={login.password}
        onChange={handleChange}
        id='password'
      />
      <button>login</button>
    </form>
  )
}

export default LoginPage
