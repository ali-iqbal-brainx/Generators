const axios = require("axios");
function* pollForWeatherInfo() {
    while (true) {
        yield fetch('http://localhost:4000/api/currentWeather', {
            method: 'get'
        }).then(function (d) {
            var json = d.json();
            return json;
        });
    }
}

function runPolling(generator) {
    if (!generator) {
        generator = pollForWeatherInfo();
    }

    var p = generator.next();
    p.value.then(function (d) {
        if (!d.temperature) {
            runPolling(generator);
        } else {
            console.log(d);
        }
    });
}

module.exports={
    runPolling
}