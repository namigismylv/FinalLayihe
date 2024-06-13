import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import ROUTES from './Routes/Routes'
import MainContext from './Context/Context'
import { useState } from 'react'

function App() {
  const routes = createBrowserRouter(ROUTES)
  
  const contextData={}
  return (
    <>
    <MainContext.Provider value={contextData}>
      <RouterProvider router={routes}/>
    </MainContext.Provider>
    </>
  )
}

export default App
