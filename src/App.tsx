import React, { useState } from "react"
import Title from "./components/Title"
import Form from "./components/Form"
import Results from "./components/Results"

type ResultsState = {
  county: string
  cityName: string
  temperature: string
  conditionText: string
  icon: string
}

const App = () => {
  const [city,setCity]=useState<string>("")
  const [results, setResults] = useState({
    county: "",
    cityName: "",
    temperature: "",
    conditionText: "",
    icon: ""
  })

  const getWeather = (e: React.FormEvent<HTMLElement>) => {
      e.preventDefault()
      fetch(`http://api.weatherapi.com/v1/current.json?key=4bdec65faabd40f2948150752241906&q=${city}&aqi=no`)
        .then(res => res.json())
        .then(data => {
          setResults({
            county:data.location.country,
            cityName:data.location.name,
            temperature:data.current.temp_c,
            conditionText:data.current.condition.text,
            icon:data.current.condition.icon
        })
    })
  }

  return (
    <div className="wrapper">
      <div className="container">
        <Title/>
        <Form setCity={setCity} getWeather={getWeather}/>
        <Results results={results}/>
      </div>
    </div>
  )
}

export default App