import { Navbar } from "@/components/Shared/Navbar";
import { FirstBlock } from "./components/FirstBlock";
import { SliderBrand } from "./components/SliderBrand";
import { Features } from "./components/Features";
import { OurFleet } from "./components/OurFleet";
import { DriveToday } from "./components/DriveToday";

export default function Home() {
  return (
    <div className="font-21 placeholder:text-2xl">
      
      <Navbar/>
      <FirstBlock/>
      <SliderBrand/>
      <Features/>
      <OurFleet/>
      <DriveToday/>
    </div>
  )
}
