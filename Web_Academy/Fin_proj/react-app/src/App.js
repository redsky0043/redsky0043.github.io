import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";

const API_KEY = "bc31b63e051c96fb9f519beb4a7baa59";

class App extends React.Component {

    gettingWeather = async () => {
        const api_url = await 
            fetch(`https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}unnits=metric`);
        const data = await api_url.json();
        console.log(data);
    }

    render() {
        return (
            <div>
                <Info />
                <Form />
                <Weather /> 
            </div>
        );
    }
}

export default App;