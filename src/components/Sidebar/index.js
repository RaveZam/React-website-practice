import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import logoS from '../../assets/images/logo-r2.png'
import logoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faDiscord, faFacebook, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={logoS} alt="Logo"/>
            <h1 className="sub-logo" >Runielle Raven</h1>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
            </NavLink>
        </nav>
            <ul>
                <li>
                    <a target="_blank" rel="noreferrer" href='https://www.discordapp.com/users/211109693991550976'>
                        <FontAwesomeIcon icon={faDiscord} color="4d4d4e"/>
                    </a>
                </li> 
                <li>
                    <a target="_blank" rel="noreferrer" href='https://www.facebook.com/RunielleRave/'>
                        <FontAwesomeIcon icon={faFacebook} color="4d4d4e"/>
                    </a>
                </li> 
                <li>
                    <a target="_blank" rel="noreferrer" href='https://www.instagram.com/runielleraven/?hl=en'>
                        <FontAwesomeIcon icon={faInstagram} color="4d4d4e"/>
                    </a>
                </li> 
                <li>
                    <a target="_blank" rel="noreferrer" href='https://github.com/RaveZam '>
                        <FontAwesomeIcon icon={faGithub} color="4d4d4e"/>
                    </a>
                </li> 
            </ul>
    </div>
)

export default Sidebar