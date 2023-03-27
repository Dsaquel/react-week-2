import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import ArticlePage from './pages/ArticlePage'
import Home from './pages/Home'
import Lifecycle from './pages/LifeCycle'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes className="">
        <Route path="/" element={<Home />} />
        <Route path="/article" element={<ArticlePage />} />
        <Route path="/life-cycle" element={<Lifecycle />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
