import { Link } from 'react-router-dom'
import '../css/header.css'


function Header(props) {
    function logOut() {
        localStorage.setItem('authorization', 0);
        props.check(false);
    }




    return (
        <header>
            <nav>
                <div className='header-wrapper'>
                    <Link to="/" className='logo'>Anime Search</Link>
                    <ul className='menu'>
                        <li className='menu-item'><Link to="/favourite">Favourite</Link></li>
                    </ul>
                    <Link to="/"><img onClick={() => logOut()} src={process.env.PUBLIC_URL + '/exit.png'} /></Link>
                </div>

            </nav >

        </header >
    )
}

export { Header }