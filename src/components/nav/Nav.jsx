import SearchBar  from "../searchBar/SearchBar";

function Nav ({onSearch}) {
    return ( 
        <div>
            <SearchBar onSearch={onSearch}/>
        </div>
    );
}

export default Nav;