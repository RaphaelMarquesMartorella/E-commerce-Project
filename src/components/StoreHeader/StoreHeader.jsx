import React from 'react'
import './index.scss'
import Logo from '../../assets/logoDNC.png'
import Carrinho from '../../assets/carrinhoCompras.png'
import Lupa from '../../assets/lupa.png'
import { Link } from 'react-router-dom'

const StoreHeader = ({data}) => {
  
  console.log(data)

  return (
    <div className='container'>
      <div className='header--superior'>
          <Link to={'/mainPage'}><img className='logo' src={Logo} alt="Logo DNC" />
          </Link>
            <img className='lupa' src={Lupa} alt="Lupa de busca" />
            <input type="text" placeholder='O que você está procurando?' />

          

  
     <button><Link to={`/carrinho/1`}><img className='carrinho' src={Carrinho}  alt="Carrinho de compras" /></Link></button>
    
 
           
        </div>
        <div className='header--inferior'>
            <h3 className='font--bold'>Novidades</h3>
            <h3>Jogos</h3>
            <h3>Video Games</h3>
            <h3>Mesas Gamer</h3>
            <h3>Promoções</h3>
            <h3>Atendimento</h3>
        
        </div>
    </div>
  )
}

export default StoreHeader