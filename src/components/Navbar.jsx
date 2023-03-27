import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to="/">home</Link>
      <Link to="/article">article</Link>
      <Link to="/life-cycle">lifecycle</Link>
    </div>
  )
}

export default Navbar
