import { Button } from "@/components/ui/button";
import { ModalAddReservationProps } from "./ModalAddReservation.types";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Car } from "@prisma/client";
import { CalendarSelector } from "./CalendarSelector";
import { useState } from "react";
import { addDays } from "date-fns";
import { DateRange } from "react-day-picker";
import axios from "axios";
import { toast } from "@/components/ui/use-toast";


export function ModalAddReservation(props: ModalAddReservationProps) {
    const { car } = props
    const [dateSelected, setDateSelected] = useState<{
        from: Date | undefined;
        to: Date | undefined;
    }>({
        from: new Date(),
        to: addDays(new Date(),5)
    })

    const onReserveCar = async (car: Car, dateSelected: DateRange) => {
        const response = await axios.post("/api/checkout", {
            carId: car.id,
            priceDay: car.priceDay,
            startDate: dateSelected.from,
            endDate: dateSelected.to,
            carName: car.name,
            carImage: car.photo
        })

        window.location = response.data.url
        toast({
            title: "Car Reserved 😍",
            variant: "default"
        })

    }
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant={"outline"} className="w-full mt-3">
                    Reserve Vehicle
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Select the date you want to rent the car</AlertDialogTitle>
                    <AlertDialogDescription>
                        <CalendarSelector setDateSelected={setDateSelected} carPriceDay={car.priceDay}/>
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => onReserveCar(car, dateSelected)}>Rent a Car</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
