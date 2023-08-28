import React, { useCallback, useEffect, useState } from 'react'
import './index.scss'
import { useParams } from 'react-router-dom'
import StoreHeader from '../../components/StoreHeader/StoreHeader'
import PaySectionModal from '../../components/PaySectionModal/PaySectionModal'
import Footer from '../../components/Footer/Footer'
import axios from 'axios'


const Pay = ({data}) => {

    const [openModal, setOpenModal] = useState(true)
    const { paymentId } = useParams();
    const [ID, setID] = useState({})
    const [facility, setFacility] = useState([]);
    
  
    
    
    
    const FindData = async () => {
      
      try {
        
          const selectedPayment = await data.find((payment) => payment._id == paymentId);
        
        if(selectedPayment) {
  
          setID(selectedPayment)
          
        return selectedPayment
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
  
          const APIResponse = response.data // This is response data from AXIOS
  
           // This is response data from API
  
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
    <div>
        
        <StoreHeader />

        
    <section>
      <PaySectionModal isOpen={openModal} data={facility} setOpenModal={() => setOpenModal(!openModal)}/>
    </section>

    <Footer />
        
    </div>
  )
}

export default Pay