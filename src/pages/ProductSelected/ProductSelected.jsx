import React from 'react'
import './index.scss'
import StoreHeader from '../../components/StoreHeader/StoreHeader'
import { PRODUCTS_MOCK } from '../../mock/product.mock'
import StoreSection from '../../components/StoreSection/StoreSection'
import Footer from '../../components/Footer/Footer'
import { useParams } from 'react-router-dom'
import { useEffect, useState, useCallback } from 'react'
import axios from 'axios'



const ProductSelected = ({data}) => {
  
  const [facility, setFacility] = useState([]);
  
  const { productId } = useParams();
  console.log(data);
  
  const selectedProducts = data.find((product) => product._id == productId);

  const fetchData = useCallback(() => {
    axios({
      "method": "GET",
      "url": `http://localhost:3001/api/v1/products/${selectedProducts._id}`,
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
  console.log(facility);
      
      

    useEffect(() => {
      fetchData()
      console.log();
    }, [fetchData])
  

  return (

    <div>
      

    <StoreHeader data={data} />

    <div className='products'>{PRODUCTS_MOCK.map((item, idx) => (
                    
                    
                    <StoreSection facility={facility} key={idx}/>
                         
                 ))}
                 </div>

    

    <Footer />

    </div>

  )
}

export default ProductSelected