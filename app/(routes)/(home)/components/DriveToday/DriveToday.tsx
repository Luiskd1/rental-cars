import { Reveal } from "@/components/Shared/Reveal";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export const DriveToday = () => {
  return (
    <div className="p-6 lg:my-32 max-w-7xl mx-auto">
      <div className="bg-[url('/images/background-2.jpg')] bg-center bg-no-repeat bg-cover rounded-xl p-6 lg:p-32 relative">
        <div className="lg:flex gap-x-6">
          <div>
            <h3 className="text-4xl text-white">Drive your dream car Today</h3>
            <p className="text-white text-xl my-5">
              Register and explore the world of premium cars
            </p>
            <Link href="/sign-in">
              <Button className="w-full px-10 py-3 text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:bg-gradient-to-r from-blue-600 to-purple-600">
                Register here
              </Button>
            </Link>
          </div>
          <Reveal position="right" className="lg:absolute lg:-right-32 top-5">
            <Image
              src={"/images/audi.png"}
              alt="car drive footer"
              width={550}
              height={250}
            />
          </Reveal>
        </div>
      </div>
    </div>
  );
};
