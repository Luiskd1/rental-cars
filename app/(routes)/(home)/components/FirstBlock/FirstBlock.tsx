import { Reveal } from "@/components/Shared/Reveal";
import Image from "next/image";

export const FirstBlock = () => {
  return (
    <div className="grid lg:grid-cols-2 lg:px-0 lg:py-24 items-center">
      <Reveal position="bottom" className="p-6 lg:pl-40">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold ">
          Premium
          <span className="block">Rental Car</span>
          in  Colombia
        </h1>
        <p className="text-lg mt-2 lg:mt-5 lg:text-xl max-w-sm">
          Dont deny tourself pleasure of driving the best premium cars from
          around the world here and now
        </p>
      </Reveal>
      <Reveal position="right"  className="flex justify-end">
        <Image
          src="/images/porsche.png"
          alt="rent cars"
          width={800}
          height={800}
          priority
        />
      </Reveal>
    </div>
  );
};
