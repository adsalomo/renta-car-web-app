import { axiosInstance } from '../helpers/axiosInstance';

export const getCars = () => {
    return axiosInstance.get('car', {
        headers: {
            'Content-type': 'application/json',
        }
    });
}

export const createCar = (car) => {
    return axiosInstance.post('car', car, {
        headers: {
            'Content-type': 'application/json',
        }
    });
}
