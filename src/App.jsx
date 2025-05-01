
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Contact from './Component/Contact.jsx'
import Navbar from './Component/Navbar.jsx'
import Blog from './Pages/Blog.jsx'
import Home from './Pages/Home.jsx'
import Kids from './Pages/Kids.jsx'
import Mens from './Pages/Mens.jsx'
import Womens from './Pages/Womens.jsx'
import SinglePage from './Pages/SinglePage.jsx'
import CartPage from './Pages/CartPage.jsx'
import { CartProvider } from './Context/ContextPage.jsx'




function App() {
 

  return (
    <CartProvider>
     <HashRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/mens' element={<Mens/>}/>
    <Route path='/mens/:id' element={<SinglePage/>}/>
    <Route path='/womens' element={<Womens/>}/>
    <Route path='/womens/:id' element={<SinglePage/>}/>
    <Route path='/kids' element={<Kids/>}/>
    <Route path='/blog' element={<Blog/>}/>
    <Route path='/cartpage' element={<CartPage/>}/>
    </Routes>
    <Contact/>
    </HashRouter>
    </CartProvider> 

  
 
    
  )
}

export default App     

































