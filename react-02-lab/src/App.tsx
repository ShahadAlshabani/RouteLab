
import './App.css'
import {Routes , Route} from 'react-router-dom'
import { Home } from './pages/Home'
import { LogIn } from './pages/LogIn'
import { PageNotFound } from './pages/PageNotFound'
function App() {

  return (
    <>
      <Routes>
        <Route path = "/" element={<Home/>} />
        <Route path ="/login" element={<LogIn/>}/>
        <Route path = "*" element={<PageNotFound/>}/>
      </Routes>
    </>
  )
}

export default App
