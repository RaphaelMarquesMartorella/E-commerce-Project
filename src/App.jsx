import './App.css'
import Login from './pages/Login/Login'
import MainPage from './pages/MainPage/MainPage'
import ProductSelected from './pages/ProductSelected/ProductSelected'
import ShopCart from './pages/ShopCart/ShopCart'
import Pay from './pages/Pay/Pay'
import { Routes, Route } from 'react-router-dom'
import { PRODUCTS_MOCK } from './mock/product.mock'
import { useCookies } from "react-cookie";
import { useEffect, useState, useCallback } from 'react'
import axios from 'axios'

function App() {
  const [cookies, _] = useCookies(["access_token"]);
  


    
  
  const [facility, setFacility] = useState([]);
  

    

      

  const fetchData = useCallback(() => {
    axios({
      "method": "GET",
      "url": "https://secure-beyond-22435-36910cbe64ba.herokuapp.com/api/v1/products",
    })
      .then((response) => {

        const APIResponse = response.data

        

        setFacility(APIResponse.allProducts)

      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
      
      


    useEffect(() => {
      
      fetchData()
      
      
    }, [fetchData])


  return (
    <div className="App">
      {/* <StoreHeader onSubmit={(inputValue) => setSearchValue(inputValue)}/> */}
      <Routes>
        <Route path='/' element= {<Login />} />
        {(cookies.access_token) && 
        <Route path='/mainPage' element= {<MainPage data={facility}/>} />
        } 
        {(cookies.access_token) && 
        <Route path= "/productSelected/:productId" element={ (!facility) ? null : <ProductSelected data = {facility}/>} />
        }
        {(cookies.access_token) && 
        <Route path= "/shopCart/:shopCartId" element={ <ShopCart data={ (!facility) ? null : facility }/>} />
        }
        {(cookies.access_token) && 
        <Route  path= "/pay" element= {<Pay data={ facility }/>} />
        }  
      </Routes>
    </div>
  )
}

export default App
