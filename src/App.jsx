import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import ArticlePage from './pages/ArticlePage'
import Cars from './pages/Cars'
import Contexts from './pages/Contexts'
import ExerciceApi from './pages/ExerciceApi'
import Home from './pages/Home'
import Lifecycle from './pages/LifeCycle'
import Meteo from './pages/Meteo'
import ReactHookForm from './pages/ReactHookForm'
import Request from './pages/Request'
import Squares from './pages/Squares'
import Users from './pages/Users'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes className="">
        <Route path="/" element={<Home />} />
        <Route path="/article" element={<ArticlePage />} />
        <Route path="/life-cycle" element={<Lifecycle />} />
        <Route path="/square" element={<Squares />} />
        <Route path="/react-hook-form" element={<ReactHookForm />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/request" element={<Request />} />
        <Route path="/exercice-api" element={<ExerciceApi />} />
        <Route path="/meteo" element={<Meteo />} />
        <Route path="/users" element={<Users />} />
        <Route path="/contexts" element={<Contexts />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
