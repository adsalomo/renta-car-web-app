import React from 'react';

export const Car = ({ car }) => {
    return (
        <div className="col">
            <div className="card">
                <img src={car.photo} className="card-img-top" alt="Logo" />
                <div className="card-body">
                    <h5 className="card-title">{ `Características principales` }</h5>
                    <hr />
                    <p className="card-text">{ `Marca: ${car.brand}` }</p>
                    <p className="card-text">{ `Modelo: ${car.model}` }</p>
                    <p className="card-text">{ `Año: ${car.year}` }</p>
                    <p className="card-text">{ `Color: ${car.color}` }</p>
                    <p className="card-text">{ `Tipo de combustible: ${car.fuelType}` }</p>
                    <p className="card-text">{ `Puertas: ${car.numberDoors}` }</p>
                    <p className="card-text">{ `Transmisión: ${car.transmission}` }</p>
                    <p className="card-text">{ `Motor: ${car.motor}` }</p>
                    <p className="card-text">{ `Kilometros: ${car.kilometres}` }</p>
                </div>
            </div>
        </div>
    )
}