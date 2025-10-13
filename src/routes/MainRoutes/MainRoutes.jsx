import { Route, Routes } from 'react-router-dom'
import Login from '../../pages/auth/Login'
import Signup from '../../pages/auth/Signup'
import Home from '../../pages/Home/Home'

function MainRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sigup' element={<Signup />} />
    </Routes>
  )
}

export default MainRoutes;