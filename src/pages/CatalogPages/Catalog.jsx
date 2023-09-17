import React from "react";
import { SearchToFilter } from "../../components/SearchToFilter/SearchToFilter";
import { CarList } from "../../components/CarList/CarList";

export const Catalog = () => {

  return (
    <>
       < SearchToFilter />
       < CarList />
       
      {/* <div>Catalog</div> */}
    </>
  );
}