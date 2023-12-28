import CallToAction from "./CallToAction";
import SpecialContainer from "./SpecialContainer";
import CustomersSay from "./CustomersSay";

const HomePage = () => {
    return (
        <>
            <main className="container-fluid" aria-labelledby="homePageTitle">
                <div className="hero-section" aria-labelledby="heroSectionTitle">
                    <section className="container pt-4 pb-4">
                        <div className="row">
                            <div className="col col-lg-6 col-12">
                                <h1>Little Lemon</h1>
                                <h2>Chicago</h2>
                                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                                <CallToAction text="Reserve a Table" useClassName="yellowButton" link="/reservations" aria-label="Reserve a table at Little Lemon" />
                            </div>
                            <div className="col col-lg-6 col-12 imgContainer">
                                <img src="../images/restaurantfood.jpg" alt="Server holding meal on black platter." />
                            </div>
                        </div>
                    </section>
                </div>
                <section className="container specials" aria-labelledby="specialsSectionTitle">
                    <div className="row mb-4">
                        <div className="col col-lg-6 col-12">
                            <h2 className="specials">This weeks specials!</h2>
                        </div>
                        <div className="col col-lg-6 col-12 buttonContainer">
                            <CallToAction text="Online Menu" useClassName="yellowButton" link="/" aria-label="View the online menu at Little Lemon" />
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
                <section className="container testimonials" aria-labelledby="testimonialsSectionTitle">
                    <h2 className="text-center mb-4">Testimonials</h2>
                    <div className="row">
                        <CustomersSay name="Robert" image="../images/testimonial 1.jpg" quote="Little Lemon's exquisite flavors take me on a culinary journey through the Mediterranean with every bite!" />
                        <CustomersSay name="Maria" image="../images/testimonial 2.jpg" quote="From the warm ambiance to the delectable dishes, dining at Little Lemon is like taking a vacation to the Mediterranean without leaving town." />
                        <CustomersSay name="Jaquelin" image="../images/testimonial 3.jpg" quote="The fresh ingredients and authentic recipes at Little Lemon make it my go-to spot for a taste of the Mediterranean in the heart of the city." />
                        <CustomersSay name="Trevor" image="../images/testimonial 4.jpg" quote="As a food enthusiast, Little Lemon has become my top choice for experiencing the rich and diverse flavors of Mediterranean cuisine – a true hidden gem!" />
                    </div>
                </section>
                <section className="container lowerSection p-4" aria-labelledby="lowerInformationSectionTitle">
                    <div className="row">
                        <div className="col col-12 col-lg-6">
                            <h1>Little Lemon</h1>
                            <h2>Chicago</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eleifend dolor odio, quis mattis dolor maximus id. Praesent ac velit ut libero tempus semper. Integer dictum dolor sed condimentum euismod. Etiam hendrerit, orci eget cursus efficitur, justo quam varius lorem, in tempor est nisi semper eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus pretium interdum nulla sed condimentum. Nullam ut egestas turpis. Vestibulum at malesuada ex. Vestibulum laoreet lobortis lorem.
                            </p>
                        </div>
                        <div className="col col-12 col-lg-6">
                            <div className="lowerImages">
                                <img src="../images/restaurant.jpg" alt="Restaurant down the length of the building." className="lowerImage1" />
                                <img src="../images/Mario and Adrian A.jpg" alt="Cooks discussing a meal." className="lowerImage2" />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default HomePage;
