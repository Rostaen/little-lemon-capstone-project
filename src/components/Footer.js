import { Link } from "react-router-dom";

const Footer = () => {
    const linkElements = [
        {linkName: "Home", link: "/"},
        {linkName: "About", link: "/"},
        {linkName: "Menu", link: "/"},
        {linkName: "Reservations", link: "/reservations"},
        {linkName: "Online Menu", link: "/"},
        {linkName: "Login", link: "/"},
    ];

    const socialElements = [
        {linkName: "Meta", link: "/"},
        {linkName: "X", link: "/"},
        {linkName: "TikTok", link: "/"},
        {linkName: "YouTube", link: "/"},
        {linkName: "LinkedIn", link: "/"},
    ];

    const linkList = linkElements.map((link) =>
        <li key={link.linkName}>
            <Link to={link.link}>{link.linkName}</Link>
        </li>
    );

    const socialList = socialElements.map((social) =>
        <li key={social.linkName}>
            <Link to={social.link}>{social.linkName}</Link>
        </li>
    );

    return (
        <footer className="row pb-5">
            <div className="col col-12 col-lg-3 imgContainer">
                <img src="../images/little-lemon-vert-logo.png" alt="Little Lemon Lemon Logo" />
            </div>
            <nav className="col col-12 col-lg-3">
                <h2>Navigation</h2>
                <ul className='row'>{linkList}</ul>
            </nav>
            <div className="col col-12 col-lg-3">
                <h2>Contact</h2>
                <ul>
                    <li className="pb-2">
                        Little Lemon<br/>
                        1095 Vesta Drive<br/>
                        Chicago, IL 60605
                    </li>
                    <li className="pb-2">773-555-5667</li>
                    <li className="pb-2">contact@littlelemon.com</li>
                </ul>
            </div>
            <div className="col col-12 col-lg-3 socials">
                <h2>Socials</h2>
                <ul>{socialList}</ul>
            </div>
        </footer>
    )
};

export default Footer;
