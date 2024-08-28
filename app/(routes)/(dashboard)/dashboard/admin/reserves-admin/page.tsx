import { db } from "@/lib/db"

import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { TableReserves } from "./components/TableReserves";
import { isAdministrator } from "@/lib/isAdministrator";

export default async function pageReservesAdmin() {

const {userId} = auth()
const user = await currentUser();
console.log(user)
if (!userId  || !user || !isAdministrator(userId)) {
  return redirect("/")
}

  const reserves = await db.order.findMany({
    orderBy: {
      createdAt: "desc"
    }
  })

  const totalAmount = reserves.reduce((acc, booking) => {
    return acc + parseFloat(booking.totalAmount);
}, 0);
  return (
    <div>
      <TableReserves totalAmount={totalAmount} reserves={reserves}/>
    </div>
  )
}
