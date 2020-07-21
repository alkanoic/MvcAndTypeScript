"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
document.querySelectorAll(".testInput").forEach(function (testInput) {
    testInput.addEventListener('change', { handleEvent: function (event) {
            // this.handleInputChange(event.target.files![0]);
            console.log(event.target.value);
            axios_1.default
                .get("https://localhost:5001/WeatherForecast")
                .then(function (results) {
                console.log(results.data);
            })
                .catch(function (error) {
                console.log('通信失敗');
                console.log(error.status);
            });
        } }, false);
});
//# sourceMappingURL=app.js.map