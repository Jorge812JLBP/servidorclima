const express = require('express')
const app = express()

app.get('/clima/:ciudad', function (req, res) {
    const request = require('postman-request');
    request(`http://api.weatherstack.com/current?access_key=ce5b2ca79d190280448dd08c04aac341&query=${req.params.ciudad}`, function (error, response, body) {
    console.log('error:', error); 
    console.log('statusCode:', response && response.statusCode); 
    let json=JSON.parse(body);
    let temperatura=`
    <html>
    <body>
    <p>Temperatura de ${json.location.name} es de: ${json.current.temperature} °C</p>
    </body>
    </html>`;
    res.send(temperatura)
    });
    })
    app.listen(3000)
