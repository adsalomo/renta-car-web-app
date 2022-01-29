import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { createCar } from '../../services/car';

const brands = [
    'Renault', 'BWM', 'Chevrolet', 'Ferrari', 'Ford', 'Mazda', 'Suzuki'
];

const years = [
    '2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010'
];

const fuelTypes = [ 'Gasolina', 'Diésel', 'Electricidad', 'Gas Natural'];

const doors = [4, 2];

const transmissions = [ 'Manual', 'Automatico' ];

const motors = [ '2.0', '1.6', '1.4' ];

export const CarNew = ({ }) => {

    const [formValues, setFormValues] = useState({
        brand: '', model: '', transmission: '', 
        kilometres: '', licencePlate: '', year: '',
        color: '', fuelType: '', numberDoors: '', motor: '', photo: ''
    });

    const { brand, model, transmission, kilometres, 
        licencePlate, year, color, fuelType, numberDoors, motor, photo } = formValues;

    const handleOnChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value,
        });
    }

    const handleCreateCar = async (e) => {

        e.preventDefault();

        Swal.fire({
            allowOutsideClick: false,
            text: 'Loading...'
          });
          
        Swal.showLoading();

        try {

            await createCar({
                brand, model, transmission, kilometres, 
                licencePlate, year, color, fuelType, numberDoors, motor, photo
            });

            Swal.close();
            Swal.fire('Info!!', 'Vehiculo creado con éxito', 'info');
            
            setFormValues({
                brand: '', model: '', transmission: '', 
                kilometres: '', licencePlate: '', year: '',
                color: '', fuelType: '', numberDoors: '', motor: '', photo: ''
            });

        } catch (error) {
            console.log(error);
            Swal.close();
            Swal.fire('Error', 'Se presento un error al procesar la solicitud', 'error');
        }

    }

    return (
       <div className="container">
           <div className="card mt-3">
                <div className="card-header">
                    Por favor diligencia los siguientes datos
                </div>
                <div className="card-body">
                    <form onSubmit={handleCreateCar}>
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="mb-3">
                                    <label className="form-label">Placa</label>
                                    <input className="form-control" 
                                            name="licencePlate"
                                            required
                                            minLength={6}
                                            maxLength={6}
                                            value={licencePlate}
                                            onChange={handleOnChange} />
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="mb-3">
                                    <label className="form-label">Marca</label>
                                    <select className="form-control" 
                                        name="brand"
                                        required
                                        value={brand}
                                        onChange={handleOnChange}>
                                    <option value="">--SELECCIONAR--</option>
                                    {
                                        brands.map((brand, index) => {
                                            return <option key={index} value={brand}>{brand}</option>
                                        })
                                    }                    
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="mb-3">
                                    <label className="form-label">Modelo</label>
                                    <input className="form-control" 
                                            name="model"
                                            required
                                            minLength={3}
                                            value={model}
                                            onChange={handleOnChange} />
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="mb-3">
                                    <label className="form-label">Año</label>
                                        <select className="form-control" 
                                            name="year"
                                            required
                                            value={year}
                                            onChange={handleOnChange}>
                                        <option value="">--SELECCIONAR--</option>
                                        {
                                            years.map((year, index) => {
                                                return <option key={index} value={year}>{year}</option>
                                            })
                                        }                    
                                        </select>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="mb-3">
                                    <label className="form-label">Color</label>
                                    <input className="form-control" 
                                            name="color"
                                            required
                                            minLength={3}
                                            value={color}
                                            onChange={handleOnChange} />
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="mb-3">
                                    <label className="form-label">Tipo de Combustible</label>
                                    <select className="form-control" 
                                        name="fuelType"
                                        required
                                        value={fuelType}
                                        onChange={handleOnChange}>
                                    <option value="">--SELECCIONAR--</option>
                                    {
                                        fuelTypes.map((fuel, index) => {
                                            return <option key={index} value={fuel}>{fuel}</option>
                                        })
                                    }                    
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="mb-3">
                                    <label className="form-label">Puertas</label>
                                    <select className="form-control" 
                                        name="numberDoors"
                                        required
                                        value={numberDoors}
                                        onChange={handleOnChange}>
                                    <option value="">--SELECCIONAR--</option>
                                    {
                                        doors.map((door, index) => {
                                            return <option key={index} value={door}>{door}</option>
                                        })
                                    }                    
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="mb-3">
                                    <label className="form-label">Transmisión</label>
                                    <select className="form-control" 
                                        name="transmission"
                                        required
                                        value={transmission}
                                        onChange={handleOnChange}>
                                    <option value="">--SELECCIONAR--</option>
                                    {
                                        transmissions.map((trans, index) => {
                                            return <option key={index} value={trans}>{trans}</option>
                                        })
                                    }                    
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="mb-3">
                                    <label className="form-label">Motor</label>
                                    <select className="form-control" 
                                        name="motor"
                                        required
                                        value={motor}
                                        onChange={handleOnChange}>
                                    <option value="">--SELECCIONAR--</option>
                                    {
                                        motors.map((motor, index) => {
                                            return <option key={index} value={motor}>{motor}</option>
                                        })
                                    }                    
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="mb-3">
                                    <label className="form-label">Kilometros</label>
                                    <input className="form-control" 
                                            name="kilometres"
                                            required
                                            minLength={3}
                                            value={kilometres}
                                            type="number"
                                            onChange={handleOnChange} />
                                </div>
                            </div>
                            <div className="col-lg-3">
                            <div className="mb-3">
                                <label className="form-label">Foto</label>
                                <input className="form-control" 
                                        name="photo"
                                        required
                                        value={photo}
                                        onChange={handleOnChange}
                                        type="url" />
                            </div>
                        </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-2">
                                <button type="submit" 
                                    className="btn btn-primary">Crear</button>
                            </div>
                        </div>
                    </form>
                </div>
           </div>
       </div>
    )
}