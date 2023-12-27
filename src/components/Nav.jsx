import 'bootstrap/dist/css/bootstrap.min.css';
import Links from './Link';

const Nav = () => {
    const linkElements = [
        {linkName: "Home", link: "index.html"},
        {linkName: "About", link: "index.html"},
        {linkName: "Menu", link: "index.html"},
        {linkName: "Reservations", link: "booking.html"},
        {linkName: "Online Menu", link: "index.html"},
        {linkName: "Login", link: "index.html"},
    ];

    const linkList = linkElements.map((link) =>
        <li
            className='col col-12 col-lg-2 justify-content-center'
            key={link.linkName}
        >
            <Links link={link.link} linkName={link.linkName} />
        </li>
    );

    return (
        <nav className='col col-lg-10 col-12 col-lg-10'>
            <ul className='row'>{linkList}</ul>
        </nav>
    )
};

export default Nav;
