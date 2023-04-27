import React from 'react'
import './index.scss'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import StoreHeader from '../../components/StoreHeader/StoreHeader'
import PaySectionModal from '../../components/PaySectionModal/PaySectionModal'
import Footer from '../../components/Footer/Footer'

const Pay = ({data}) => {

    const [openModal, setOpenModal] = useState(true)
    const { paymentId } = useParams();
    const selectedPayment = data.find((payment) => payment.id == paymentId);

  return (
    <div>
        
        <StoreHeader />

        
    <section>
      <PaySectionModal isOpen={openModal} data={selectedPayment} setOpenModal={() => setOpenModal(!openModal)}/>
    </section>

    <Footer />
        
    </div>
  )
}

export default Pay