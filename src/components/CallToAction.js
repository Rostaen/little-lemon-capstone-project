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
                aria-label="Link button click"
            >
                <Link to={props.link}>
                    {props.text}
                </Link>
            </button>
        </>
    )
}

export default CallToAction;