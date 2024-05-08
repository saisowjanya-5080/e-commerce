import React from 'react'
import { Provider } from 'react-redux'
import store from './utils/store'
import Navbar from './components/Navbar'
import { Outlet, createBrowserRouter } from 'react-router-dom'
import Footer from './components/Footer'
import Error from './components/Error'

import Products from './components/Products'
import CartPage from './components/CartPage'
import ProductItem from './components/ProductItem'
import Body from './components/Body'

function App() {
  return (
    <Provider store={store}>
      <div className='overflow-hidden'>
        <div className='fixed w-full z-10'>
          <Navbar />
        </div>
        <Outlet />
        <Footer />
      </div>
    </Provider>
  )
}
export const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:(
          <div>
            <Body/>
            <Products/>
          </div>
        )
      },
      {
        path:"/products",
        element:<Products/>
      },
      {
        path:"/cart",
        element:<CartPage/>
      },
      {
        path:"/products/:id",
        element:<ProductItem/>
      }
    ]
  }
]);

export default App