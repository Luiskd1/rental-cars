"use client"
import { Button } from "@/components/ui/button"
import { useLovedCars } from "@/hooks/use-loved-cars"
import { useAuth, UserButton } from "@clerk/nextjs"
import { Heart, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Navbar() {
  const { userId } = useAuth()
  const {lovedItems} = useLovedCars()
  return (
    <div className="max-w-5xl py-5 mx-auto ">
      <div className="justify-between lg:flex ">
        <Link href={"/"} className="flex items-center justify-center gap-x-2">
          <Image src={"/logo.svg"} width={150} height={150} alt="logo de luis" />
          <span className="text-xl font-bold">luis cars </span>
        </Link>

        <div className="flex items-center justify-center gap-x-7">
          <Link href={"/cars"}>List Cars</Link>
          <Link href={"/dashboard"}>Dashboard</Link>
          {
            userId? (
              <>
              <Link href={"/loved-cars"}><Heart strokeWidth={1} className={`cursor-pointer ${lovedItems.length > 0 && "fill-red-500"} `}/></Link>
              <UserButton/>
              </>) : (
              <Link href={"/sign-in"} className="flex gap-x-3">
                <Button>Login
                  <User className="w-4 h-4 ml-2"/>
                </Button>
              </Link>
            )
          }
        </div>
      </div>
    </div>
  )
}
