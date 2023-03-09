import React from 'react'
import './index.scss'
import { Link } from 'react-router-dom'

const Products = ({data}) => {

  console.log(data)

  return (
    <div className='home--card'>
        
        <img src={data.imgPath}></img>  
       
        <div className='card--titles'>
            <p>{data.title}</p>
            <button><Link to={`/productSelected/${data.id}`}>Ver Mais</Link></button>
                            
                  
                    
                            
    
                              
                            
    </div>
    </div>
    
  )
}

export default Products