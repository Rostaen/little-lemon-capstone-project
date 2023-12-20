const Footer = () => {
    return (
        <footer className="row">
            <img src="../images/little-lemon-vert-logo.png" alt="Little Lemon Lemon Logo" className="col col-xl-3" />
            <nav className="col col-xl-3">
                <h2>Doormat Navigation</h2>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="index.html">About</a></li>
                    <li><a href="index.html">Menu</a></li>
                    <li><a href="index.html">Reservations</a></li>
                    <li><a href="index.html">Order Online</a></li>
                    <li><a href="index.html">Login</a></li>
                </ul>
            </nav>
            <div className="col col-xl-3">
                <h2>Contact</h2>
                <ul>
                    <li>Address</li>
                    <li>Phone Number</li>
                    <li>Email</li>
                </ul>
            </div>
            <div className="col col-xl-3">
                <h2>Social Media Links</h2>
                <ul>
                    <li><a href="index.html">Meta</a></li>
                    <li><a href="index.html">X</a></li>
                    <li><a href="index.html">TikTok</a></li>
                    <li><a href="index.html">YouTube</a></li>
                    <li><a href="index.html">LinkedIn</a></li>
                </ul>
            </div>
        </footer>
    )
};

export default Footer;