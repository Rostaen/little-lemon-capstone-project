const CallToAction = (props) => {
    const handleClick = (e) => {
        e.preventDefault();
        console.log("Button clicked: " + props.text);
    }

    return (
        <>
            <button onClick={handleClick} className={props.useClassName}>{props.text}</button>
        </>
    )
}

export default CallToAction;
