import React from 'react'
import './index.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react'


const PaySectionModal = ({data, isOpen, setOpenModal}) => {
  
  const [prevent, setPrevent] = useState(true)
  const [alertSpaceEmpty1, setAlertSpaceEmpty1] = useState('')
  const [alertSpaceEmpty2, setAlertSpaceEmpty2] = useState('')
  const [alertSpaceEmpty3, setAlertSpaceEmpty3] = useState('')
  const [alertSpaceEmpty4, setAlertSpaceEmpty4] = useState('')

  

  const handleSubmitDefault = (e) => {



    prevent == true && e.preventDefault()

    
    const input1Value = e.target[0].value
    const input2Value = e.target[1].value
    const input3Value = e.target[2].value
    const input4Value = e.target[3].value

    if(input1Value != '' && input2Value != '' && input3Value != '' && input4Value != '' ) {
      setPrevent(false)
    }if (input1Value == ''){
      setAlertSpaceEmpty1("*Campo Obrigatório não preenchido*")
    }else if (input1Value != '') {
      setAlertSpaceEmpty1('')
    }if (input2Value == '') {
      setAlertSpaceEmpty2("*Campo Obrigatório não preenchido*")
    }else if (input2Value != '') {
      setAlertSpaceEmpty2('')
    }if (input3Value == '') {
      setAlertSpaceEmpty3("*Campo Obrigatório não preenchido*")
    }else if (input3Value != '') {
      setAlertSpaceEmpty3('')
    }if (input4Value == '') {
      setAlertSpaceEmpty4("*Campo Obrigatório não preenchido*")
    }else if (input4Value != '') {
      setAlertSpaceEmpty4('')
    }
    
  }
  
  
  return (
    <div className='modal'>
       <div className='all-content'>
        <div className='title'>
        <div className='right-side__title'>
                <Link to={'/productSelected/1'}><span onClick={setOpenModal}>X</span></Link>

                
                
            </div>
        <h1>Finalizar Compra:</h1>
        </div>
            <div className='forms'>
              <form onSubmit={handleSubmitDefault}>
                <label>Digite seu nome:</label>
                <input type="text" placeholder='Nome completo'/>
                <p className='Ps' style={{
                  width:'430px',
                  textAlign:'right',
                  marginTop:'-15px',
                  fontSize: '12px', 
                  color:'red'
                }}>{alertSpaceEmpty1}</p>
                <label>Digite seu CPF:</label>
                <input type="text" placeholder='000.000.000-00'/>
                <p className='Ps' style={{
                  width:'430px',
                  textAlign:'right',
                  marginTop:'-15px',
                  fontSize: '12px', 
                  color:'red'
                }}>{alertSpaceEmpty2}</p>
                <label>Endereço:</label>
                <input type="text" placeholder='Rua dos bobos, número 0'/>
                <p className='Ps' style={{
                  width:'430px',
                  textAlign:'right',
                  marginTop:'-15px',
                  fontSize: '12px', 
                  color:'red'
                }}>{alertSpaceEmpty3}</p>
                <label>Forma de Pagamento:</label>
                <input type="text" placeholder='Dinheiro/Cartão'/>
                <p className='Ps' style={{
                  width:'430px',
                  textAlign:'right',
                  marginTop:'-15px',
                  fontSize: '12px', 
                  color:'red'
                }}>{alertSpaceEmpty4}</p>
                <button>Confirmar Pedido</button>
                </form>

            </div>
             </div>
             
        </div>
        
    
  )
}

export default PaySectionModal