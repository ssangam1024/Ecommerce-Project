// we are importing axios so it can be used to make HTTP requests to the backend API to fetch and manipulate data related to the shopping cart, orders, and tracking information. (is used to send and receive information (data) between your React app and the backend/server.)
import axios from 'axios'
// we are importing them to create navigation (pages) in our app. Routes is a container for all the Route components, and Route is used to define a specific route and the component that should be rendered when that route is accessed.
// We import Routes and Route to enable page navigation in React so different components appear based on the URL without reloading the page. Routes = checks current URL, Route = tells what to show
import { Routes, Route } from 'react-router'
// we are importing useState and useEffect to manage state and side effects in our React component. useState allows us to create and update state variables, while useEffect lets us perform side effects (like fetching data) when the component updates. In this case, we use them to manage the shopping cart data and load it when the component renders.
import { useState, useEffect } from 'react'
// we are importing the different page components (HomePage, CheckoutPage, OrdersPage, TrackingPage, NotFoundPage) that we have created in our app. These components represent different pages or views in our application, and we will use them in our routing setup to display the appropriate content based on the URL.
import { HomePage } from './pages/home/HomePage'
import { CheckoutPage } from './pages/checkout/CheckoutPage'
import { OrdersPage } from './pages/orders/OrdersPage'
import { TrackingPage } from './pages/TrackingPage'
import './App.css'
import { NotFoundPage } from './pages/NotFoundPage' 

// This is the main component of our React application. It manages the state of the shopping cart and sets up the routing for different pages in the app. When the component mounts, it fetches the cart data from the backend API and updates the state. The Routes component defines the different routes and their corresponding components that will be rendered when those routes are accessed.
function App() {
  const [cart, setCart] = useState ([]);

  const loadCart = async() => {
    const response = await axios.get('/api/cart-items?expand=product')
    setCart(response.data)
  }
  useEffect( ()=> {
    loadCart();
  }, []);
  

  return (
    <Routes> 
      <Route index element={<HomePage cart= {cart} loadCart={loadCart} /> } />
      <Route path="checkout" element={ <CheckoutPage  cart= {cart} loadCart={loadCart} /> } /> 
      <Route path="orders" element={<OrdersPage cart= {cart} loadCart={loadCart} />}/>
      <Route path="Tracking/:orderId/:productId" element={<TrackingPage />}/> 
      <Route path="NotfoundPage" element={<NotFoundPage cart={cart} />}/>
    </Routes>    
  )
}

export default App
