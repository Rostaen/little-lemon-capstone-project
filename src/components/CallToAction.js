import { Link } from "react-router-dom";

const CallToAction = (props) => {
    const handleClick = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <button
                onClick={handleClick}
                className={props.useClassName}
            >
                <Link to={props.link}>
                    {props.text}
                </Link>
            </button>
        </>
    )
}

export default CallToAction;