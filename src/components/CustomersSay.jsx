import Star from "./Star";

const CustomersSay = (props) => {
    return (
        <>
            <div className="col col-6 col-lg-3">
                <div className="testimonalContainer p-4">
                    <div className="rating row">
                        <Star /><Star /><Star /><Star /><Star />
                    </div>
                    <div className="row pb-2 pt-2">
                        <img className="col col-6" src={props.image} alt="Image of client for testimonials" />
                        <p className="col col-6 name" >{props.name}</p>
                    </div>
                    <p className="quote">
                        {props.quote}
                    </p>
                </div>
            </div>
        </>
    )
}

export default CustomersSay;
