const AvailableTimes = () => {
    const timeSlots = [
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
    ]

    const timeList = timeSlots.map((time) =>
        <option key={time}>{time}</option>
    )

    return(
        {timeList}
    )
}

export default AvailableTimes;
