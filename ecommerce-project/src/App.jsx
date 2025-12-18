import { Routes, Route } from 'react-router'
import { HomePage } from './pages/HomePage'
import { CheckoutPage } from './pages/checkout/CheckoutPage'
import { OrdersPage } from './pages/OrdersPage'
import { TrackingPage } from './pages/TrackingPage'
import './App.css'
import { NotFoundPage } from './pages/NotfoundPage' 

function App() {
  

  return (
    <Routes> 
      <Route index element={<HomePage /> } />
      <Route path="checkout" element={ <CheckoutPage /> } /> 
      <Route path="orders" element={<OrdersPage/>}/>
      <Route path="Tracking" element={<TrackingPage />}/>
      <Route path="NotfoundPage" element={<NotFoundPage />}/>
    </Routes>    
  )
}

export default App
