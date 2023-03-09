import React from 'react'
import './index.scss'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import StoreHeader from '../../components/StoreHeader/StoreHeader'
import ShopCarSectionModal from '../../components/ShopCarSectionModal/ShopCarSectionModal'
import Footer from '../../components/Footer/Footer'
const Carrinho = ({data}) => {

  const [openModal, setOpenModal] = useState(true)
  const { carrinhoId }  = useParams();
  const selectedCart = data.find(cart => cart.id == carrinhoId)
  console.log(selectedCart)
  

  return (
    <div className='body'>
        
        <StoreHeader />

        

    <section>
      <ShopCarSectionModal isOpen={openModal} data={selectedCart} setOpenModal={() => setOpenModal(!openModal)}/>
    </section>

    <Footer />
        
    </div>
  )
}

export default Carrinho