import React from 'react'
import "./App.css"
import { Route,Routes } from 'react-router-dom'
import LandingPage from './stores/pages/LandingPage'
import MobilePage from './stores/pages/MobilePage'
import ComputerPage from './stores/pages/ComputerPage'
import WatchPage from './stores/pages/WatchPage'
import MenPage from './stores/pages/MenPage'
import WomanPage from './stores/pages/WomanPage'
import TvPage from './stores/pages/TvPage'
import AcPage from './stores/pages/AcPage'
import FridgePage from './stores/pages/FridgePage'
import FurniturePage from './stores/pages/FurniturePage'
import KitchenPage from './stores/pages/KitchenPage'
import SpeakerPage from './stores/pages/SpeakerPage'
import MobileSingle from './singles/MobileSingle'
import ComputerSingle from './singles/ComputerSingle'
import WatchSingle from './singles/WatchSingle'  
import MenSingle from './singles/MenSingle'
import WomanSingle from './singles/WomanSingle' 
import TvSingle from './singles/TvSingle' 
import AcSingle from './singles/AcSingle'
import SpeakerSingle from './singles/SpeakerSingle'
import FridgeSingle from './singles/FridgeSingle'
import FurnitureSingle from './singles/FurnitureSingle'
import KitchenSingle from './singles/KitchenSingle'
import UserCart from './stores/UserCart'
import LoginPage from './stores/pages/LoginPage'
import SignupPage from './stores/pages/SignupPage'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={ <LandingPage/>}/>
        <Route path='/mobile' element={ <MobilePage/>}/>
        <Route path='/computer' element={ <ComputerPage/>}/>
        <Route path='/watch' element={ <WatchPage/>}/>
        <Route path='/men' element={ <MenPage/>}/>
        <Route path='/woman' element={ <WomanPage/>}/>
        <Route path='/tv' element={ <TvPage/>}/>
        <Route path='/ac' element={ <AcPage/>}/>
        <Route path='/fridges' element={ <FridgePage/>}/>
        <Route path='/furniture' element={ <FurniturePage/>}/>
        <Route path='/kitchen' element={ <KitchenPage/>}/>
        <Route path='/speakers' element={ <SpeakerPage/>}/>
               <Route path='/mobile/:id' element={ <MobileSingle/>}/>
               <Route path='/computer/:id' element={ <ComputerSingle/>}/>
               <Route path='/watch/:id' element={ <WatchSingle/>}/>
              <Route path='/men/:id' element={ <MenSingle/>}/>
              <Route path='/woman/:id' element={ <WomanSingle/>}/>
              <Route path='/tv/:id' element={ <TvSingle/>}/>
              <Route path='/ac/:id' element={ <AcSingle/>}/>
              <Route path='/speakers/:id' element={ <SpeakerSingle/>}/>
              <Route path='/fridge/:id' element={ <FridgeSingle/>}/>
              <Route path='/furniture/:id' element={ <FurnitureSingle/>}/>
              <Route path='/kitchen/:id' element={ <KitchenSingle/>}/>
              <Route path='/cart' element={<UserCart/>}/>
              <Route path='/login' element={<LoginPage/>}/>
              <Route path='/signup' element={<SignupPage/>}/>
      </Routes>
    </div>
  )
}

export default App