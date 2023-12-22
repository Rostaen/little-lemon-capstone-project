import Nav from "./Nav";
import Header from "./Header";
import Footer from "./Footer";
import CallToAction from "./CallToAction";

const HomePage = () => {
    return (
        <>
            <div className="container p-3">
                <div className='row'>
                    <Header />
                    <Nav />
                </div>
            </div>
            <main className="container-fluid">
                <div className="hero-section">
                    <section className="container p-4">
                        <div className="row">
                            <div className="col col-lg-6 col-12">
                                <h1>Little Lemon</h1>
                                <h2>Chicago</h2>
                                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                                <CallToAction text="Reserve a Table" useClassName="reserveTable" />
                            </div>
                            <div className="col col-lg-6 col-12 imgContainer">
                                <img src="../images/restaurantfood.jpg" alt="Server holding meal on black platter." />
                            </div>
                        </div>
                    </section>
                </div>
                <section className="mt-5">

                </section>
            </main>
            <div className="container p-2">
                <Footer />
            </div>
        </>
    )
}

export default HomePage;
