import { FaHome} from 'react-icons/fa';
import SearchBar from './Search';
import "./Header.scss"



function Header(){
    return (
        <header className="header">
            <div className="header__logo">
                <FaHome></FaHome>
            </div>
              <div className="header__text">
               <h1>Todolist</h1>
              </div>
            <div className="header__search">
                <SearchBar></SearchBar>
            </div>
        </header>
    );
}

export default Header;