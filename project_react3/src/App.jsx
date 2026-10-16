import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import Header from './components/Header/header'
import Page1 from './pages/page1.jsx'
import Footer from './components/Footer/footer.jsx'

export default function App(){
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/Page1' index element = {<Page1/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}