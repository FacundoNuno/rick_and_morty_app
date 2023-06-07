import SearchBar  from "../searchBar/SearchBar";
import { Link, NavLink } from "react-router-dom"

function NavBar ({onSearch, randomCharacter}) {
    function generarRandomId() {
        randomCharacter();
    }
    
    
    return ( 
        <div>
            <SearchBar onSearch={onSearch}/>
            <button onClick={generarRandomId}>Random</button>
                <Link to='/home'>
                    <button>Home</button>
                </Link>
                <NavLink to='/about'>
                    <button>About</button>
                </NavLink>
                <NavLink to= '/favorites'>
                    <button>Favorites</button>
                </NavLink>
            
        </div>
    );
}

export default NavBar;