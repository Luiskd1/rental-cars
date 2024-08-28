import { Car } from "@prisma/client"

export type CardCarType = {
    car: Car,
    key: string
}