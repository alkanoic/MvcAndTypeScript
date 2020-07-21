import { HTMLElementEvent } from "./HTMLElementEvent"
import axios from "axios"

document.querySelectorAll(".testInput")!.forEach(function (testInput) {
    testInput.addEventListener(
        'change',
        {handleEvent: (event: HTMLElementEvent<HTMLInputElement>) => {
            // this.handleInputChange(event.target.files![0]);
            console.log(event.target.value);
            axios
                .get("https://localhost:5001/WeatherForecast")
                .then((results) => {
                    console.log(results.data);
                })
                .catch((error) => {
                    console.log('通信失敗');
                    console.log(error.status);
                });
        }},
        false,
    );
});
