import { Link } from 'react-router-dom'
import './index.scss'
import '../../assets/xboxBranco.png'
import '../../assets/xboxPreto.png'
import '../../assets/godOfWar.png'
import '../../assets/nintendo.png'
import '../../assets/uncharted.png'
import '../../assets/granTurismo.png'

const ShopCarSectionModal = ({isOpen, data, setOpenModal}) => {

  console.log(data)
  

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
                <Link to={'/productSelected/1'}><span onClick={setOpenModal}>X</span></Link>

                <h1 className='myCar_title'>Meu Carrinho</h1>
                
            </div>

            <div className='price-color'>
                <h2>{data.price}</h2>
                 <h3>Cor: {data.colorName}</h3>
                 <p style={{
                     backgroundColor:(data.color)
                 }}></p>
                 
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