import React from 'react'
import './index.scss'
import { Link } from 'react-router-dom'

const PaySectionModal = ({data, isOpen, setOpenModal}) => {
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
                <label>Digite seu nome:</label>
                <input type="text" placeholder='Nome completo'/>
                <label>Digite seu CPF:</label>
                <input type="text" placeholder='000.000.000-00'/>
                <label>Endereço:</label>
                <input type="text" placeholder='Rua dos bobos, número 0'/>
                <label>Forma de Pagamento:</label>
                <input type="text" placeholder='Dinheiro/Cartão'/>

                <button>Confirmar Pedido</button>

            </div>
             </div>
             
        </div>
        
    
  )
}

export default PaySectionModal