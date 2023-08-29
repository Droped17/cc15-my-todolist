import { FaSearch } from "react-icons/fa";

function SearchBar(){
    return (
        <div className='search'>
        <span className='search__icon'>
            <FaSearch></FaSearch>
            </span>
        <input type="text" placeholder='search' className='search__input'/>
         </div>
    );
}

export default SearchBar;