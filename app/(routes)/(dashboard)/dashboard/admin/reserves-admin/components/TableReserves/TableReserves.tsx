import { formatPrice } from "@/lib/formatPrice";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { TableReservePorps } from "./TableReserves.type";
export function TableReserves(props: TableReservePorps) {
    const { reserves, totalAmount } = props;
    return (
        <Table>
            <TableCaption>A list of your recent bookings.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Order Date</TableHead>
                    <TableHead>Customer ID</TableHead>
                    <TableHead>Car</TableHead>
                    <TableHead>Date Start</TableHead>
                    <TableHead>Date End</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {reserves.map((order) => (
                    <TableRow key={order.id}>
                        <TableCell className="font-medium">
                            {new Date(order.createdAt).toLocaleDateString("es-ES", {
                                day: "2-digit",
                                month: "2-digit",
                                year: "numeric",
                            })}
                        </TableCell>
                        <TableCell className="font-medium max-w-[100px] truncate">
                            {order.userId}
                        </TableCell>
                        <TableCell className="font-medium truncate">
                            {order.carName}
                        </TableCell>
                        <TableCell>
                            {new Date(order.orderDate).toLocaleDateString("es-ES", {
                                day: "2-digit",
                                month: "2-digit",
                                year: "numeric",
                            })}
                        </TableCell>
                        <TableCell>
                            {new Date(order.orderEndDate).toLocaleDateString("es-ES", {
                                day: "2-digit",
                                month: "2-digit",
                                year: "numeric",
                            })}
                        </TableCell>
                        <TableCell className="text-right">
                            {formatPrice(Number(order.totalAmount))}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={5}>Total</TableCell>
                    <TableCell className="text-right">
                        {formatPrice(totalAmount)}
                    </TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    )
}
