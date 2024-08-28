import React from 'react'
import { ButtonAddCar } from './components/ButtonAddCar'
import { ListCars } from './components/ListCars'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { db } from '@/lib/db'
import { isAdministrator } from '@/lib/isAdministrator'

export default async function CardManagerPage() {
    const {userId} = auth()
    if (!userId || !isAdministrator(userId)) {
        return  redirect("/")
    }

    const car = await db.car.findMany({
        where: {
            userId: userId
        },
        orderBy: {
            createdAt: "desc"
        }
    })
    

  return (
    <div>
        <div className='flex justify-between'>
            <div className='text-2xl font-bold'> Manage yours cars</div>
            <ButtonAddCar/>
        </div>
        <ListCars cars={car}/>
    </div>
  )
}
