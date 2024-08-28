"use client"
import { Car } from "@prisma/client"
import { Dispatch, SetStateAction } from "react"


export type FormEditCardProps = {
    carData : Car,
    setOpenDialog: Dispatch<SetStateAction<boolean>>;
}