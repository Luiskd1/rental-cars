"use client"
import { useState } from "react";
import { ButtonEditCardProps } from "./ButtonEditCar.types";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import { FormEditCar } from "./FormEditCar";

export function ButtonEditCar(props: ButtonEditCardProps) {
    const [openDialog, setOpenDialog] = useState(false)
    const { carData } = props;
    return (
        <Dialog open={openDialog}>
            <DialogTrigger asChild>
                <Button variant={"outline"} onClick={() => setOpenDialog(true)}>
                    Edit
                    <Pencil className="w-4 h-4 ml-2"/>
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogDescription>
                        <FormEditCar setOpenDialog={setOpenDialog} carData={carData}/>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}
