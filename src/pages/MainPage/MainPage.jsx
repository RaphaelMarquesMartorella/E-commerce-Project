import React from 'react'
import './index.scss'
import { Link } from 'react-router-dom'
import { PRODUCTS_MOCK } from '../../mock/product.mock'
import ProductsCard from '../../components/ProductsCard/ProductsCard'
import StoreHeader from '../../components/StoreHeader/StoreHeader'
import FooterMain from '../../components/FooterMain/FooterMain'
import { useEffect } from 'react'

const MainPage = ({data}) => {

    

    function descerPagina() {
        window.scrollTo(0, 150);
      }

    useEffect(() => {
       descerPagina()
        
    }, [])
    
    
  return (
    <div className='container'>
        
         
              <StoreHeader data={data} />
                    
                         
    
            <section className='ad'>
                <img src="anuncio.png" width={'100%'}  height={'300px'} alt='Anúncio da Sony' />
            </section>
            <section className='items-to-Buy'>
                <div className='products'>{PRODUCTS_MOCK.map((item) => (
                    
                    
                   <ProductsCard data={item} key={item.id}/>
                        
                ))}
                </div>
                
            </section>

            <FooterMain />
                

        </div>
        


  )
}

export default MainPage