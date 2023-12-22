import Nav from "./Nav";
import Header from "./Header";
import Footer from "./Footer";
import CallToAction from "./CallToAction";
import SpecialContainer from "./SpecialContainer";
import CustomersSay from "./CustomersSay";

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
                    <section className="container pt-4 pb-4">
                        <div className="row">
                            <div className="col col-lg-6 col-12">
                                <h1>Little Lemon</h1>
                                <h2>Chicago</h2>
                                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                                <CallToAction text="Reserve a Table" useClassName="yellowButton" />
                            </div>
                            <div className="col col-lg-6 col-12 imgContainer">
                                <img src="../images/restaurantfood.jpg" alt="Server holding meal on black platter." />
                            </div>
                        </div>
                    </section>
                </div>
                <section className="container specials">
                    <div className="row mb-4">
                        <div className="col col-lg-6 col-12">
                            <h2 className="specials">This weeks specials!</h2>
                        </div>
                        <div className="col col-lg-6 col-12 buttonContainer">
                            <CallToAction text="Online Menu" useClassName="yellowButton" />
                        </div>
                    </div>
                    <div className="row">
                        <SpecialContainer
                            image="../images/greek-salad.jpg"
                            alt="Close shot of a greek salad with fork resting on food."
                            title="Greek Salad"
                            price="$12.99"
                            text="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
                        />
                        <SpecialContainer
                            image="../images/bruchetta.jpg"
                            alt="Image of bruschetta from table view."
                            title="Bruschetta"
                            price="$ 5.99"
                            text="Our Bruschetta is made from girlled bread that has been smeared with garlic and seasoned with salt and olive oil."
                        />
                        <SpecialContainer
                            image="../images/lemon-dessert.jpg"
                            alt="Image of lemon dessert resting on a table with a full lemon in the background and fork in the foreground."
                            title="Lemon Dessert"
                            price="$ 4.99"
                            text="This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
                        />
                    </div>
                </section>
                <section className="container testimonials">
                    <h2 className="text-center">Testimonials</h2>
                    <div className="row">
                            <CustomersSay name="Robert" image="../images/testimonial 1.jpg" quote="Little Lemon's exquisite flavors take me on a culinary journey through the Mediterranean with every bite!" />
                            <CustomersSay name="Maria" image="../images/testimonial 2.jpg" quote="From the warm ambiance to the delectable dishes, dining at Little Lemon is like taking a vacation to the Mediterranean without leaving town." />
                            <CustomersSay name="Jaquelin" image="../images/testimonial 3.jpg" quote="The fresh ingredients and authentic recipes at Little Lemon make it my go-to spot for a taste of the Mediterranean in the heart of the city." />
                            <CustomersSay name="Trevor" image="../images/testimonial 4.jpg" quote="As a food enthusiast, Little Lemon has become my top choice for experiencing the rich and diverse flavors of Mediterranean cuisine – a true hidden gem!" />
                    </div>
                </section>
            </main>
            <div className="container p-2">
                <Footer />
            </div>
        </>
    )
}

export default HomePage;
