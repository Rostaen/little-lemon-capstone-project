import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar } from "@fortawesome/free-solid-svg-icons";

const SpecialContainer = (props) => {
    const carIcon = <FontAwesomeIcon icon={faCar} />;

    return (
        <>
            <div className="col col-12 col-lg-4">
                <img src={props.image} alt={props.alt} />
                <div className="p-3 innerContainer">
                    <div className="row">
                        <h3 className="col col-7">{props.title}</h3>
                        <p className="col col-5">{props.price}</p>
                    </div>
                    <p className="mb-4 textArea">
                        {props.text}
                    </p>
                    <div className="addSpecial">
                        <button className="addSpecial">Add to Delivery&nbsp;&nbsp;&nbsp;{carIcon}</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SpecialContainer;
