import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";

const API_KEY = "bc31b63e051c96fb9f519beb4a7baa59";

class App extends React.Component {

    gettingWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const api_url = await 
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&unnits=metric`);
        const data = await api_url.json();
        console.log(data);
    }

    render() {
        return (
            <div>
                 <Info />
                <Form weatherMethod={this.gettingWeather}/>
                <Weather /> 
            </div>
        );
    }
}

export default App;