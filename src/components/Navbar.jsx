import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">home</Link>
      <Link to="/article">article</Link>
      <Link to="/life-cycle">lifecycle</Link>
      <Link to="/square">square</Link>
      <Link to="/react-hook-form">react hook form</Link>
      <Link to="/cars">cars</Link>
      <Link to="/request">request</Link>
      <Link to="/exercice-api">exercice api</Link>
      <Link to="/meteo">meteo</Link>
      <Link to="/users">users</Link>
      <Link to="/contexts">contexts</Link>
    </div>
  )
}

export default Navbar
