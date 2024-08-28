import { Navbar } from "@/components/Shared/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function page() {
  return (
    <div>
      <Navbar />
      <div className="p-6 mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <h1 className="text-2xl">Thank you very much for trusting us</h1>
          <p>You will receive all the information via email shortly.</p>
          <p>You can view all your reservations within your customer area.</p>
          <Link href={"/"}>
            <Button>Back to see the products</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
