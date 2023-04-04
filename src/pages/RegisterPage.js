import { useState } from 'react'
import { registrar } from '../api/api'

function RegisterPage() {
  const [register, setRegister] = useState({
    username: '',
    email: '',
    password: '',
  })
  function handleChange(e) {
    switch (e.target.id) {
      case 'username':
        setRegister((prev) => {
          return { ...prev, username: e.target.value }
        })
        break
      case 'email':
        setRegister((prev) => {
          return { ...prev, email: e.target.value }
        })
        break
      case 'password':
        setRegister((prev) => {
          return { ...prev, password: e.target.value }
        })
        break

      default:
        break
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    registrar(register)
  }
  return (
    <form onSubmit={handleSubmit} className='register'>
      <h1>Registrar</h1>
      <input
        type='text'
        placeholder='username'
        value={register.username}
        onChange={handleChange}
        id='username'
      />
      <input
        type='text'
        placeholder='email'
        value={register.email}
        onChange={handleChange}
        id='email'
      />
      <input
        type='password'
        placeholder='password'
        value={register.password}
        onChange={handleChange}
        id='password'
      />
      <button type='submit'>Registrar</button>
    </form>
  )
}

export default RegisterPage
