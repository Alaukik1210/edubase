import CreateAccount from './components/CreateAccount'
import Home from './components/Home'
import { Routes,Route } from 'react-router-dom'
import Login from './components/Login'
import Profile from './components/Profile'
function App() {
 

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<CreateAccount/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/profile' element={<Profile/>}/>
    </Routes>
     
    </>
  )
}

export default App
