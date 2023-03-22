import React from 'react'
import './index.scss'
import { Link } from 'react-router-dom'

const Products = ({data}) => {

  console.log(data)

  return (
    <div className='home--card'>
        
        <img src={data.imgPath}></img>  
       
        <div className='card--titles'>
        {(data.title.length > 28 ) && 
            <p style={{transform: 'translateX(-7%)'}}>{data.title}</p>}
             {(data.title.length < 31 ) && <p style={{transform: 'translateX(0%)'}}>{data.title}</p>} 
            <button><Link to={`/productSelected/${data.id}`}>Ver Mais</Link></button>
                            
                  
                    
                            
    
                              
                            
    </div>
        
    </div>
    
  )
}

export default Products