import { Order } from "@prisma/client"

export type TableReservePorps = {
    reserves: Order[],
    totalAmount: number
}