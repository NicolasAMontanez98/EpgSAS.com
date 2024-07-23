import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/home/HomeLayout'
import { Services } from './pages/services/ServicesLayout'
import { About } from './pages/about/AboutLayout'
import { Experiences } from './pages/experiences/ExperiencesLayout'
import { Navbar } from '../src/components/navbar/NavbarLayout'
import { Logo } from '../src/components/logo/LogoLayout'
import { LogoFooter } from './components/logoFooter/LogoLayout'
import { Infographs } from './pages/infographs/InfographsLayout'

function App() {
  return (
    <div className='w-screen h-screen flex flex-col items-start'>
      <Logo />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/about-us' element={<About />}/>
        <Route path='/experiences' element={<Experiences />}/>
        <Route path='/infographs' element={<Infographs />}/>
      </Routes>
      <LogoFooter />
    </div>
  )
}

export default App
