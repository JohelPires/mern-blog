import axios from 'axios'

export function registrar(bodyRegistro) {
  axios
    .post('http://localhost:5000/register', bodyRegistro)
    .then((response) => {
      console.log('Registro enviado ao servidor.')
    })
    .catch((err) => {
      console.log(err)
    })
}
