import { useState } from 'react'
import { registrar } from '../api/api'

function RegisterPage() {
  const [register, setRegister] = useState({ username: '', password: '' })
  function handleChange(e) {
    switch (e.target.id) {
      case 'username':
        setRegister((prev) => {
          return { ...prev, username: e.target.value }
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
