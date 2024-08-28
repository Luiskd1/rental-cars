import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FiltersCarsProps } from "./FiltersCars.type";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";

export const FiltersCars = (props: FiltersCarsProps) => {
  const { clearFilters, setFilters, filters } = props;

  const handleFilter = (filter: string, value: string) => {
    setFilters(filter, value);
  };
  return (
    <div className="mt-5 mb-8 md:gap-x-4 flex flex-col space-y-2 md:flex-row md:space-y-0 ">
      <Select onValueChange={(value) => handleFilter("type", value)}  value={filters.type}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Tipo de vehiculo"></SelectValue>
        </SelectTrigger>
        <SelectContent>
            <SelectGroup >
                <SelectLabel>Tipo de vehiculo</SelectLabel>
              <SelectItem value="sedan">Sedan</SelectItem>
              <SelectItem value="suv">Suv</SelectItem>
              <SelectItem value="coupe">Coupe</SelectItem>
              <SelectItem value="family">Family</SelectItem>
              <SelectItem value="deluxe">Deluxe</SelectItem>
            </SelectGroup>
        </SelectContent>
      </Select>
      <Select onValueChange={(value) => handleFilter("transmision", value)} value={filters.transmision}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Cambio de marcha"></SelectValue>
        </SelectTrigger>
        <SelectContent>
            <SelectGroup >
                <SelectLabel>Cambio de marcha</SelectLabel>
              <SelectItem value="manual">Manual</SelectItem>
              <SelectItem value="automatic">Suv</SelectItem>
            </SelectGroup>
        </SelectContent>
      </Select>
      <Select onValueChange={(value) => handleFilter("people", value)} value={filters.people}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Personas"></SelectValue>
        </SelectTrigger>
        <SelectContent>
            <SelectGroup >
                <SelectLabel>Personas</SelectLabel>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="4">4</SelectItem>
              <SelectItem value="5">5</SelectItem>
              <SelectItem value="7">7</SelectItem>
            </SelectGroup>
        </SelectContent>
      </Select>
      <Select onValueChange={(value) => handleFilter("engine", value)} value={filters.engine}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Tipo de motor"></SelectValue>
        </SelectTrigger>
        <SelectContent>
            <SelectGroup >
                <SelectLabel>Tipo de motor</SelectLabel>
              <SelectItem value="gasoil">Gasolina</SelectItem>
              <SelectItem value="diesel">Diesel</SelectItem>
              <SelectItem value="electric">Electrico</SelectItem>
              <SelectItem value="hybrid">Hibrido</SelectItem>
            </SelectGroup>
        </SelectContent>
      </Select>
      
      <Button onClick={clearFilters}>
        Remove filters <Trash className="w-4 h-4 ml-2"/>
      </Button>

    </div>
  );
};
