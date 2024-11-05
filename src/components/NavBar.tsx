import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <div className='navbar'>
        <NavLink to={'/Home'}>Home</NavLink><br />
        <NavLink to={'/UnitsPage'}>units page</NavLink><br />
    </div>
  )
}