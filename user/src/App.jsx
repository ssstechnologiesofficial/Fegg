import './App.css'
import { Outlet } from 'react-router-dom'
import './index.css'
import Navbar from './component/navbar/Navbar'
import Footer from './component/footer/Footer'
import FooterItems from './component/footer/FooterItems'
import Hero from './component/content/Hero'
function App() {


  return (
    <>
 
 
          {/* {children} */}
          {/* <Outlet/> */}
          <Navbar/>
          {/* <Hero/> */}
          <Outlet/>
         <FooterItems/>
       <Footer/>
     
    </>
  )
}

export default App
