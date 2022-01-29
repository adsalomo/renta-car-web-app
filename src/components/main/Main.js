import React, { useState, useEffect } from 'react';
import { getCars } from '../../services/car';
import { Car } from './Car';

export const Main = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        listCars();
    }, [useState]);
    
    const listCars = async () => {
        try {
            const resp = await getCars();
            setCars(resp.data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="container">
             <div className="mt-2 mb-2 row row-cols-1 row-cols-md-2 g-4">
                 {
                     cars.length > 0
                     &&
                     cars.map((car, i) => {
                         return (
                            <Car car={car} key={car.id} />
                         )
                     })
                 }
             </div>
        </div>
    );
}