import React from 'react'
import './index.scss'
import Logo from '../../assets/logoDNC.png'

const FooterMain = () => {
  return (
    <div>
        <div className='footerMain'>
                <img src={Logo} alt="Logo DNC" />
                <p>Preços e condições de pagamento exclusivos para compras via internet e podem variar nas lojas físicas.<br></br>
                   <span>Para mais informações</span>,  entre em contato: (011) 1111-2222</p>
            </div>
    </div>
  )
}

export default FooterMain