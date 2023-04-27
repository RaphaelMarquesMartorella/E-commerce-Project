import { useState } from 'react'
import "./index.scss"
import axios from 'axios'
import { useCookies } from 'react-cookie'

const RegisterModal = ({data, isOpen, setOpenModal}) => {
    const [alertValue1, setAlertValue1] = useState('')
    const [alertValue2, setAlertValue2] = useState('')
    

        const handleRegisterSubmit = async (e) => {
            e.preventDefault()
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
              const response = await axios.post('http://localhost:3001/api/v1/auth/register',{
                name:valueInput1,
                password:valueInput2,
              })
              
              setOpenModal(false)
              console.log(response);
              
            } catch (error) {
              console.log(error)
            }
      
          }
          if(isOpen){
  return (
    <div className='register-modal'>
       <div className='register-all-content'>
       <div className='register-titulo'>
       <span style={{
        marginTop:"-10px",
        marginLeft:"650px",
        fontSize:"28px"
       }} onClick={setOpenModal}>X</span>
            <h2>Acesse com seu login ou cadastre-se!</h2>
            <h3>você pode entrar com o seu CPF</h3>
        </div>
        
        <div className='register-inputs'>
            <form onSubmit={handleRegisterSubmit}>
            <label htmlFor="CPF">Digite seu CPF:</label>
            <input type="text" placeholder='Nome completo'/>
            <p style={{
              marginRight:'130px', 
              marginTop:'-15px',
              width:'450px',
              textAlign:'right',
              color:'red'
            }}>{alertValue1}</p>

            <label htmlFor="Senha">Senha:</label>
            <input type="password" placeholder='*********'/>
            <p style={{
              marginRight:'130px', 
              marginTop:'-15px',
              width:'450px',
              textAlign:'right',
              color:'red'
            }}>{alertValue2}</p>

            <button  className='register-button'>Registrar</button>
            </form>
        </div>
        </div>
        </div>
  )
}
    return null
}

export default RegisterModal