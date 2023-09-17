
import { useState, useEffect } from "react";
import { CarCard } from "../CarCard/CarCard";
import { Button, List, Item } from "./CarList.styled";
import { fetchCars } from "../Api/Api";

export const CarList = () => {
  const [cars, setCars] = useState([]);
  const [visibleCars, setVisibleCars] = useState(8);

  useEffect(() => {
    fetchCars()
      .then(({ data }) => {
        const arrayOfUsers = data;
        setCars(arrayOfUsers);
        setVisibleCars(8);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  const handleClickLoadMore = () => {
    setVisibleCars((prevVisibleCars) => prevVisibleCars + 8);
  };

  return (
    <div>

        <div>
          <List>
            {cars.slice(0,visibleCars).map((car) => (
              <Item key={car.id}>
                <CarCard user={car} />
              </Item>
            ))}
          </List>
          {visibleCars !== cars.length - 1 && (
            <Button type="button" onClick={handleClickLoadMore}>
              Load More
            </Button>
          )}
        </div>

    </div>
  );
};

