const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        deman: true
    }
}).argv;


lugar.getLugarLatLng(argv.direccion)
    .then(resp => {
        clima.getClima(resp.Lat, resp.Lng)
            .then(resp => {
                console.log(resp)
            })
            .catch(err => console.log(`Error ..! ${ err }`));
    })
    .catch(err => console.log(`Error ..! ${ err }`));

/*
clima.getClima(argv.direccion)
.then(resp => {
    console.log(resp)
})
.catch(err => console.log(`Error ..! ${ err }`));
*/