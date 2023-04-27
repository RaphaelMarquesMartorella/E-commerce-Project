import React from 'react'
import './index.scss'
import { useParams } from 'react-router-dom'
import StoreHeader from '../../components/StoreHeader/StoreHeader'
import ShopCarSectionModal from '../../components/ShopCarSectionModal/ShopCarSectionModal'
import Footer from '../../components/Footer/Footer'
import { useEffect, useState, useCallback } from 'react'
import axios from 'axios'


const Carrinho = ({data}) => {
  const [facility, setFacility] = useState([]);
  const [openModal, setOpenModal] = useState(true)
  const { shopCartId }  = useParams();
  const selectedCart = data.find(cart => cart._id == shopCartId)
  console.log(selectedCart)
  const fetchData = useCallback(() => {
    axios({
      "method": "GET",
      "url": `http://localhost:3001/api/v1/products/${selectedCart._id}`,
    })
      .then((response) => {

        const APIResponse = response.data // This is response data from AXIOS

        console.log("response: ", APIResponse.getProduct) // This is response data from API

        setFacility(APIResponse.getProduct) // Only Response from API is set in state

      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
      
      

    useEffect(() => {
      fetchData()
      console.log();
    }, [fetchData])
  

  return (
    <div className='body'>
        
        <StoreHeader />

        

    <section>
      <ShopCarSectionModal isOpen={openModal} data={facility} setOpenModal={() => setOpenModal(!openModal)}/>
    </section>

    <Footer />
        
    </div>
  )
}

export default Carrinho