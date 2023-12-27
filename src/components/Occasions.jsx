const Occasions = () => {
    const occasions = [
        "Birthday",
        "Anniversary",
        "Graduation",
        "Celebration",
    ]

    const occasionList = occasions.map((theOccasion) =>
        <option key={theOccasion}>{theOccasion}</option>
    )

    return occasionList;
}

export default Occasions;
