import React from 'react'
import './index.scss'
import StoreHeader from '../../components/StoreHeader/StoreHeader'
import { PRODUCTS_MOCK } from '../../mock/product.mock'
import StoreSection from '../../components/StoreSection/StoreSection'
import Footer from '../../components/Footer/Footer'
import { useParams } from 'react-router-dom'



const ProductSelected = ({data}) => {
  const { productId } = useParams();
  console.log (productId)
  const selectedProducts = data.find((product) => product.id == productId);
  console.log(selectedProducts)

  return (

    <div>
      

    <StoreHeader data={data} />

    <div className='products'>{PRODUCTS_MOCK.map((item) => (
                    
                    
                    <StoreSection selectedProducts={selectedProducts} data={item} key={item.id}/>
                         
                 ))}
                 </div>

    

    <Footer />

    </div>

  )
}

export default ProductSelected