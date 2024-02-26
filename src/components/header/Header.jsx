import SearchBar from '../searchbar/SearchBar';
import './header.css'

const Header = () => {
    return(
        <header>
            <img className="logo" src='src/assets/logo.svg'/>
            <SearchBar/>
        </header>
    )
}

export default Header;