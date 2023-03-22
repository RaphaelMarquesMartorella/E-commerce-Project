import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
import Header from '../../components/Header/Header'

const Login = () => {
  
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
            
            <label htmlFor="CPF">Digite seu CPF:</label>
            <input type="text" placeholder='Nome completo'/>

            <label htmlFor="Senha">Senha:</label>
            <input type="password" placeholder='*********'/>

            <button><Link to={'/mainPage'}>Entrar</Link></button>
        </div>

        </div>
  )
}

export default Login