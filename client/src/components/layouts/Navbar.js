import React, { useContext, Fragment } from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import AuthContext from '../../context/auth/authContext'


const Navbar = ({title, icon}) => {
  const authContext = useContext(AuthContext)
  const {isAuthenticated, logout, user} = authContext

  const onLogout = () => {
    logout();
  }

  const authLinks = (
    <Fragment>
      <li>Hello { user && user.name }</li>
      <li><a onClick={onLogout} href="#!"><i className="fas fa-sign-out-alt"></i> <span className="hide-sm">Logout</span></a></li>
    </Fragment>
  )

  const guessLinks = (
    <Fragment>
      <li><Link to='/register'>Register</Link></li>
      <li><Link to='/login'>Login</Link></li>
    </Fragment>
  )

  return (
    <div className="navbar bg-primary">
      <h1>
        <i className={icon}></i> {title}
      </h1>

      <ul>
        {/* <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li> */}
        {isAuthenticated ? authLinks : guessLinks }
      </ul>
    </div>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
}

Navbar.defaultProps = {
  title: 'Contact',
  icon: 'fas fa-id-card-alt'
}

export default Navbar

