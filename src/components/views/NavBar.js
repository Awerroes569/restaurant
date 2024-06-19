import styles from './NavBar.module.scss';
import { Nav, Navbar}  from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        
        <Navbar
            bg="primary"
            className="
                mt-4
                mb-4
                rounded
                justify-content-between
            "
        >
            <Navbar.Text
                bg="primary"
                className="text-light"
            >
                &nbsp;&nbsp;Waiter.app
            </Navbar.Text>
            
            <Nav>
                <NavLink
                    className={({ isActive }) => [  isActive ? styles.active : styles.inactive].join(' ')}
                    to="/"
                >
                    Home
                </NavLink>
            </Nav>
        </Navbar>
        
    );
}

export default NavBar;  