import React from 'react'
import './index.scss'
import ProductsCard from '../../components/ProductsCard/ProductsCard'
import StoreHeader from '../../components/StoreHeader/StoreHeader'
import FooterMain from '../../components/FooterMain/FooterMain'
import { useEffect, useState, useCallback } from 'react'
import axios from 'axios'

const MainPage = ({data}) => {
    
  
  const [facility, setFacility] = useState([]);
  

    function descerPagina() {
        window.scrollTo(0, 150);
      }

      

  const fetchData = useCallback(() => {
    axios({
      "method": "GET",
      "url": "http://localhost:3001/api/v1/products",
    })
      .then((response) => {

        const APIResponse = response.data // This is response data from AXIOS

        console.log("response: ", APIResponse.allProducts) // This is response data from API

        setFacility(APIResponse.allProducts) // Only Response from API is set in state

      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
      
      

    useEffect(() => {
      descerPagina()
      fetchData()
      
      
    }, [fetchData])
    
    
  return (
    <div className='container'>
        
         
              <StoreHeader data={facility} />
                    
                         
    
            <section className='ad'>
                <img src="anuncio.png" width={'100%'}  height={'300px'} alt='Anúncio da Sony' />
            </section>
            <section className='items-to-Buy'>
                <div className='products'> {
            facility.map((item, i) => {
              return (
                
                    
                    
                   <ProductsCard data={item} key={i}/>
                        
                   
              );
            })
          }
                </div>
                
            </section>

            <FooterMain />
                

        </div>
        


  )
}

export default MainPage