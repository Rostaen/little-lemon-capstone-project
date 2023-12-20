import 'bootstrap/dist/css/bootstrap.min.css';

const Nav = () => {
    return (
        <nav className='col col-lg-10 col-12 col-lg-10'>
            <ul className='row'>
                <li className='col col-12 col-lg-1 justify-content-center'><a href="index.html">Home</a></li>
                <li className='col col-12 col-lg-1 justify-content-center'><a href="index.html">About</a></li>
                <li className='col col-12 col-lg-1 justify-content-center'><a href="index.html">Menu</a></li>
                <li className='col col-12 col-lg-2 justify-content-center'><a href="index.html">Reservations</a></li>
                <li className='col col-12 col-lg-2 justify-content-center'><a href="index.html">Online Menu</a></li>
                <li className='col col-12 col-lg-1 justify-content-center'><a href="index.html">Login</a></li>
            </ul>
        </nav>
    )
};

export default Nav;