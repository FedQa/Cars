import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {cars as carsData} from "../home/cars.data";
import CarItem from "../home/car-item/CarItem";

const CarDetail = () => {
    const [car, setCar] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        if (!id) return;

        const fetchData = async () => {
            const selectedCar = carsData.find((car) => car.id === Number(id));

            if (selectedCar) {
                setCar(selectedCar);
            }
        };

        fetchData();
    }, [id])

   if (!car) return <p>Loading...</p>

    return (
    <div>
        <Link to='/'>Back</Link>
        <h2>Car Details</h2>
        <CarItem car={car} />
    </div>
    );
};

export default CarDetail