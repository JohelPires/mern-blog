import axios from 'axios'

export function registrar(bodyRegistro) {
  axios
    .post('http://localhost:5000/auth/register', bodyRegistro)
    .then((response) => {
      console.log('Registro enviado ao servidor.', response.data)
      alert('Usuário registrado com sucesso.')
    })
    .catch((err) => {
      console.log(err)
      if (err.response.data.keyPattern.email) {
        alert('Registro falhou. Este email já está cadastrado.')
      }
    })
}

export function loginUser(bodyRegistro, setRedirect) {
  axios
    .post('http://localhost:5000/auth/login', bodyRegistro, {
      withCredentials: true,
    })
    .then((response) => {
      console.log('Dados enviados.', response.data)
      alert('login')
      setRedirect(true)
    })
    .catch((err) => {
      console.log(err.response.data)
      alert(err.response.data)
    })
}
