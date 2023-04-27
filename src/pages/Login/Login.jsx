import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import './index.scss'
import Header from '../../components/Header/Header'
import axios from 'axios'
import RegisterModal from '../../components/RegisterModal/RegisterModal'

const Login = () => {
  const [openModal, setOpenModal] = useState(false)
  const [_, setCookies] = useCookies(["access_token"])

  const [alertValue1, setAlertValue1] = useState('')
  const [alertValue2, setAlertValue2] = useState('')
  const [validationAlert, setValidationAlert] = useState('')


  let navigate = useNavigate()


  useEffect(() => {
    setCookies("access_token", '')
  
    return () => {
      
    }
  }, [])
  

    const handleLoginSubmit = async (e) => {
      e.preventDefault();
      let valueInput1 = e.target[0].value
      let valueInput2 = e.target[1].value
      

      if(valueInput1 && valueInput2 !='') {
        
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

      try {
        const response = await axios.post('http://localhost:3001/api/v1/auth/login',{
          name:valueInput1,
          password:valueInput2,
        })

        setCookies("access_token", response.data.token)
        window.localStorage.setItem("userID", response.data.userID)

        
        if(response.data.token){
          navigate('/mainPage')
        }
        
        
        
      } catch (error) {
        console.log(error)
        if(valueInput1 != '' && valueInput1 != ''){
        setValidationAlert("Por favor insira nome e senha válidos!")
        }
      }

    }
    const toggleModal = () => {
      setOpenModal(true)
    }

  return (
    <div>
      
        <div className='header'>
        <Header></Header>
        </div>

        <div><RegisterModal isOpen={openModal} setOpenModal={() => setOpenModal(!openModal)}/></div>
        <div className='loginTitulo'>
            <h2>Acesse com seu login ou cadastre-se!</h2>
            <h3>você pode entrar com o seu nome</h3>
        </div>
        
        <div className='inputs'>
            <form className='login-form' onSubmit={handleLoginSubmit}>
            <label className='label-name' htmlFor="name">Digite seu nome:</label>
            <input type="text" placeholder='Nome completo'/>
            <p style={{
              marginTop:'-15px',
              width:'450px',
              textAlign:'right',
              color:'red'
            }}>{alertValue1}</p>

            <label className='label-password' htmlFor="Senha">Senha:</label>
            <input  type="password" placeholder='*********'/>
            <p style={{
              marginTop:'-15px',
              width:'450px',
              textAlign:'right',
              color:'red'
            }}>{alertValue2}</p>
            <b>{validationAlert}</b>
            <button className='login-button'>Entrar</button>
            </form>
            
        </div>
            <div className='sign-up-page'>
              <b>New Costumer? <a onClick={toggleModal}>Create an account</a></b>
            </div>
            
        </div>
  )
}

export default Login