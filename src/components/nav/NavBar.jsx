import SearchBar  from "../searchBar/SearchBar";

function NavBar ({onSearch, randomCharacter}) {
    function generarRandomId() {
        randomCharacter();
    }
        
    
    return ( 
        <div>
            <SearchBar onSearch={onSearch}/>
            <button onClick={generarRandomId}>Random</button>
        </div>
    );
}

export default NavBar;