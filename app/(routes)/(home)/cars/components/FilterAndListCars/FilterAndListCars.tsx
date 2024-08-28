"use client";
import { Car } from "@prisma/client";
import { ListCars } from "../ListCars";
import { FilterAndListCarsProps } from "./FilterAndListCars.types";
import { useEffect, useState } from "react";
import { FiltersCars } from "../FiltersCars";

export const FilterAndListCars = (props: FilterAndListCarsProps) => {
  const { cars } = props;
  const [filteredCars, setFilteredCars] = useState<Car[]>();
  const [filters, setFilters] = useState({
    type: "",
    transmision: "",
    engine: "",
    people: "",
  });

  useEffect(() => {
    let filtered = cars;

    if (filters.type) {
      filtered = filtered.filter((car) =>
        car.type.toLowerCase().includes(filters.type.toLowerCase())
      );
    }
    if (filters.transmision) {
      filtered = filtered.filter((car) =>
        car.transmision
          .toLowerCase()
          .includes(filters.transmision.toLowerCase())
      );
    }
    if (filters.engine) {
      filtered = filtered.filter((car) =>
        car.engine.toLowerCase().includes(filters.engine.toLowerCase())
      );
    }
    if (filters.people) {
      filtered = filtered.filter((car) =>
        car.people.toLowerCase().includes(filters.people.toLowerCase())
      );
    }

    setFilteredCars(filtered);
  }, [filters, cars]);

  const handleFilterChange = (filterName: string, filterValue: String) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: filterValue,
    }));
  };

  const clearFilters = () => {
    setFilters({
      type: "",
      transmision: "",
      engine: "",
      people: "",
    });
  };

  return (
    <div>
      <FiltersCars
        clearFilters={clearFilters}
        setFilters={handleFilterChange}
        filters={filters}
      />
      <ListCars cars={filteredCars} />
    </div>
  );
};
