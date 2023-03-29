import React from 'react'

function RegisterPage() {
  return (
    <form className='register'>
      <h1>Registrar</h1>
      <input type='text' placeholder='username' />
      <input type='password' placeholder='password' />
      <button>Registrar</button>
    </form>
  )
}

export default RegisterPage
