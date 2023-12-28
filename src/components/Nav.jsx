import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const Nav = () => {
    const linkElements = [
        {linkName: "Home", link: "/"},
        {linkName: "About", link: "/"},
        {linkName: "Menu", link: "/"},
        {linkName: "Reservations", link: "/reservations"},
        {linkName: "Online Menu", link: "/"},
        {linkName: "Login", link: "/"},
    ];

    const linkList = linkElements.map((link) =>
        <li
            className='col col-12 col-lg-2 justify-content-center'
            key={link.linkName}
        >
            <Link to={link.link}>{link.linkName}</Link>
        </li>
    );

    return (
        <nav className='col col-lg-10 col-12 col-lg-10'>
            <ul className='row'>{linkList}</ul>
        </nav>
    )
};

export default Nav;
