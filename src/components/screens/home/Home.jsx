import {cars as carsData} from './cars.data'
import CarItem from "./car-item/CarItem";
import CreateCarForm from "./create-car-form/CreateCarForm";
import {useEffect, useState} from "react";
function Home() {

    const [cars, setCars] = useState([]);

    useEffect(() => {
        setCars(carsData);
    }, []);

    return (
        <div>
            <h1>Cars catalog</h1>
            <CreateCarForm setCars={setCars} />
            {cars.length > 0 ? (
                cars.map(car => (
                    <CarItem key={car.id} car={car}/>
                ))
                )
                : <p>There are no cars!</p>
            }
        </div>
    );
}

export default Home;