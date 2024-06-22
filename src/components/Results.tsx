type ResultsProps = {
    results:{
        county: string
        cityName: string
        temperature: string
        conditionText: string
        icon: string
    }
  }

const Results = (props:ResultsProps) => {
    return(
        <>
            {props.results.county &&
            <>
                <div className="results-country">{props.results.county}</div>
                <div className="results-city">{props.results.cityName}</div>
                <div className="results-temp">{props.results.temperature}</div>
                <div className="results-condition">
                    <img src={props.results.icon} alt="icon" />
                    <span>{props.results.conditionText}</span>
                </div>
            </>
            }
        </>
    )
}

export default Results