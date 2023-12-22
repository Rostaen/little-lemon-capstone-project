import Links from "./Link";

const Footer = () => {
    const linkElements = [
        {linkName: "Home", link: "index.html"},
        {linkName: "About", link: "index.html"},
        {linkName: "Menu", link: "index.html"},
        {linkName: "Reservations", link: "index.html"},
        {linkName: "Online Menu", link: "index.html"},
        {linkName: "Login", link: "index.html"},
    ];

    const socialElements = [
        {linkName: "Meta", link: "index.html"},
        {linkName: "X", link: "index.html"},
        {linkName: "TikTok", link: "index.html"},
        {linkName: "YouTube", link: "index.html"},
        {linkName: "LinkedIn", link: "index.html"},
    ];

    const linkList = linkElements.map((link) =>
        <li key={link.linkName}>
            <Links link={link.link} linkName={link.linkName} />
        </li>
    );

    const socialList = socialElements.map((social) =>
        <li key={social.linkName}>
            <Links link={social.link} linkName={social.linkName} />
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
