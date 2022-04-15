const container = require('./container')

const run = async function () {
    let contenedor = new container('info.json')
    contenedor.save({
        title: "Pulsera",
        price: 150,
        thumbnail: "shorturl.at/bqDZ3"
    })

    contenedor.save({
        title: "Collar",
        price: 100,
        thumbnail: "shorturl.at/hlEYZ"
    })

    contenedor.save({
        title: "iPhone",
        price: 1200,
        thumbnail: "shorturl.at/dpqH6"
    })

    contenedor.save({
        title: "iPhone11pro",
        price: 1800,
        thumbnail: "shorturl.at/dpqH6"
    })

    console.log(contenedor.getById());
   // console.log(contenedor.getAll());
   // console.log(contenedor.deleteById(2));
   // console.log(contenedor.getAll(1));
   // console.log(contenedor.deleteAll());
   // console.log(contenedor.getAll());
};


run()