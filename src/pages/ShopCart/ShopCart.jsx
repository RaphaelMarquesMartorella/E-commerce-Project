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
  const [ID, setID] = useState({})
  const [openModal, setOpenModal] = useState(true)
  const { shopCartId }  = useParams();
  window.localStorage.setItem("idParam", shopCartId)
  
  
    const FindData = async () => {
    
      try {
        
          const selectedCart = await data.find(cart => cart._id == shopCartId)
        
        if(selectedCart) {
  
          setID(selectedCart)
          
        return selectedCart
        }
        
      
      } catch (error) {
        console.log(error);
  
      }
    
      
    }
  
  
      const options = {
        "method": "GET",
        "url": `https://secure-beyond-22435-36910cbe64ba.herokuapp.com/api/v1/products/${ID._id}`,
      }
      
      const fetchData = useCallback(
        () => {
          axios.request(options)
        
        
        .then((response) => {
  
          const APIResponse = response.data
  
          
  
          setFacility(APIResponse.getProduct)
          
          // Only Response from API is set in state
          
        })
        .catch((error) => {
          
          
        })
      
        },
        [ID],
      )
        
      
      useEffect(() => {
        
        FindData()
        
        
      }, [data])
   
      
      useEffect(() => {

        fetchData()
      
      }, [data, fetchData])
    
    


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