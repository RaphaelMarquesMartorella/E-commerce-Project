import './App.css'
import { useState } from 'react'
import Login from './pages/Login/Login'
import MainPage from './pages/MainPage/MainPage'
import ProductSelected from './pages/ProductSelected/ProductSelected'
import Carrinho from './pages/Carrinho/Carrinho'
import Pay from './pages/Pay/Pay'
import { Routes, Route } from 'react-router-dom'
import { PRODUCTS_MOCK } from './mock/product.mock'
import StoreHeader from './components/StoreHeader/StoreHeader'

function App() {
  // const [searchValue, setSearchValue] = useState('')

  return (
    <div className="App">
      {/* <StoreHeader onSubmit={(inputValue) => setSearchValue(inputValue)}/> */}
      <Routes>
        <Route path='/' element= {<Login />} />
        <Route path='/mainPage' element= {<MainPage data={PRODUCTS_MOCK}/>} />
        <Route path= "/productSelected/:productId" element={ <ProductSelected data={ PRODUCTS_MOCK }/>} />
        <Route path= "/carrinho/:carrinhoId" element={ <Carrinho data={ PRODUCTS_MOCK }/>} />
        <Route  path= "/pay" element= {<Pay data={ PRODUCTS_MOCK }/>} />
      </Routes>
    </div>
  )
}

export default App
