import { lazy } from 'react'
import './App.css'


const Nav = lazy(() => import("./components/Nav"));
const Home = lazy(() => import("./components/Home"));
const Main = lazy(() => import("./components/Main"));
const Footer = lazy(() => import("./components/Footer"));


function App() {

  return (
    <>
      <Nav></Nav>
      <Home></Home>
      <Main></Main>
      <Footer></Footer>
    </>
  )
}

export default App
