import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {faUser} from '@fortawesome/free-regular-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import './App.css'
const Header = () => {
  return (
    <header>
        <ul className = 'header'>
            <li className='logo'><a href="#">Doclan <span>Co.</span></a></li>
            <li className='nav navItem'><a href="#">Products</a></li>
            <li className='navItem'><a href="#">Contacts</a></li>
            <li className='navItem'><a href="#">Membership</a></li>
            <li className='navItem'><a href="#">Help</a></li>
            <li className='rightBar'> 
                <form action="">
                <input className='searchBar' type="text" />
                <button type='submit' className='searchButton'>< FontAwesomeIcon icon={faSearch}/></button>
                </form>
            </li>
            <li><a href="#"> Create account</a></li>
            <li className='myIcons'><FontAwesomeIcon icon={faUser} /></li>
            <li className='myIcons'><FontAwesomeIcon icon={faBagShopping}/></li>
        </ul>
           
    </header>
  );
}

export default Header
