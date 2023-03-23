import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import './index.scss'
import Header from '../../components/Header/Header'

const Login = () => {
  
  const [alertValue1, setAlertValue1] = useState('')
  const [alertValue2, setAlertValue2] = useState('')
  let navigate = useNavigate()


    const handleLoginSubmit = (e) => {
      e.preventDefault();
      const valueInput1 = e.target[0].value
      const valueInput2 = e.target[1].value
      console.log(valueInput1)
      console.log(valueInput2)

      if(valueInput1 && valueInput2 !='') {
        navigate('/mainPage')
      }if (valueInput1 == '') {
        setAlertValue1("*Campo Obrigatório*")
      }else {
        setAlertValue1('')
      }
      if (valueInput2 == '') {
        setAlertValue2("*Campo Obrigatório*")
      }else {
        setAlertValue2('')
      }

     

    }

  return (
    <div>
        <div className='header'>
        <Header></Header>
        </div>
        <div className='loginTitulo'>
            <h2>Acesse com seu login ou cadastre-se!</h2>
            <h3>você pode entrar com o seu CPF</h3>
        </div>
        <div className='inputs'>
            <form  onSubmit={handleLoginSubmit}>
            <label htmlFor="CPF">Digite seu CPF:</label>
            <input type="text" placeholder='Nome completo'/>
            <p style={{
              marginTop:'-15px',
              width:'450px',
              textAlign:'right',
              color:'red'
            }}>{alertValue1}</p>

            <label htmlFor="Senha">Senha:</label>
            <input onSubmit={handleLoginSubmit} type="password" placeholder='*********'/>
            <p style={{
              marginTop:'-15px',
              width:'450px',
              textAlign:'right',
              color:'red'
            }}>{alertValue2}</p>

            <button>Entrar</button>
            </form>
        </div>

        </div>
  )
}

export default Login