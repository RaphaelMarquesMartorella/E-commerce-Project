import { Link } from 'react-router-dom'
import './index.scss'

const ShopCarSectionModal = ({isOpen, data, setOpenModal}) => {
  const idParam = window.localStorage.getItem('idParam')
  
  

  if(isOpen){
  return (
    
    <div className='modal'>
       <div className='all-sides'>
        <div className='left-side'>
            <img src={data.imgPath} alt={data.title} />
            <div className='left-side__title'>
                <p>{data.title}</p>
            </div>
            
        </div>

        <div className='right-side'>
            
            <div className='right-side__title'>
                <Link to={`/productSelected/${idParam}`}><span onClick={setOpenModal}>X</span></Link>

                <h1 className='myCar_title'>Meu Carrinho</h1>
                
            </div>

            
            <div className='price-color'>
                <h2>R$: {data.price}</h2>
                  {(data.color) && 
                  <p style={{
                    backgroundColor:(data.color)
                    }}></p>
                  }
                 
                 
             </div>
             <Link to={'/mainPage'}>
             <button
               >Continuar Comprando
               </button>
             </Link>
             
               <Link to={'/pay'}>
                <button className='keepBuying_button'
               >Finalizar Compra
               </button></Link>
               
        </div>
        </div>
    </div>
  )
}
return null

}



export default ShopCarSectionModal