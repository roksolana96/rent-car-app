
import { useState, useEffect } from "react";
import { CarCard } from "../CarCard/CarCard";
// import { Modal } from "../Modal/Modal";
import { Button, List, Item,
    Img,
    InfoCar,
    MainInfo,
    PriceCar,
    TitleCarInfo,
    ButtonCar,
 } from "./CarList.styled";
import { fetchCars } from "../Api/Api";

export const CarList = () => {
  const [cars, setCars] = useState([]);
  const [visibleCars, setVisibleCars] = useState(8);

  const [isOpenedModal, setIsOpenedModal] = useState(false);

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

  const handleToggle = () => {
    setIsOpenedModal(prevState => !prevState);
  };
  return (
    <>
          <List>
            {cars.slice(0,visibleCars).map((car) => (
              <Item key={car.id}>
                <Img src={car.img} alt="" width="274" height="268" />
                <TitleCarInfo>
                <MainInfo>
                    {car.make} {car.model}, {car.year}{' '}
                </MainInfo>
                </TitleCarInfo>
                <PriceCar>{car.rentalPrice}</PriceCar>
                <InfoCar>
                  {car.address} | {car.rentalCompany} | {car.type} |
                  {car.mileage} m | {car.accessories[3]}
                </InfoCar>
                <ButtonCar onClick={handleToggle} >Learn more</ButtonCar>
                {/* <CarCard user={car} /> */}
                {isOpenedModal && <CarCard handleToggle={handleToggle} />}
              </Item>
            ))}
          </List>
          {visibleCars !== cars.length - 1 && (
            <Button type="button" onClick={handleClickLoadMore}>
              Load More
            </Button>
          )}

    </>
  );
};

