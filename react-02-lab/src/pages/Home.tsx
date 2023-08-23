import NavBar from '../components/NavBar'
import { Info } from '../components/Info'
import { LoginPage } from '../components/LoginPage'
export const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Info></Info>
      <LoginPage></LoginPage>
    </div>
  )
}
