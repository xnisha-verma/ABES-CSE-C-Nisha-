const Weather = (props) => {
    return (
        <div>
            <h1>Temp: {props.temperature_2m}</h1>
            <h1>Pressure: {props.time}</h1>
        </div>
    )
}
export default Weather