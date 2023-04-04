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
