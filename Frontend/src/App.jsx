import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import ROUTES from './Routes/Routes'
import MainContext from './Context/Context'
import { useState } from 'react'

function App() {
  const routes = createBrowserRouter(ROUTES)
  const [modal, setModal] = useState(false);
  function clickModal() {
    setModal(!modal);
} 
  const contextData={modal,setModal,clickModal}
  return (
    <>
    <MainContext.Provider value={contextData}>
      <RouterProvider router={routes}/>
    </MainContext.Provider>
    </>
  )
}

export default App
