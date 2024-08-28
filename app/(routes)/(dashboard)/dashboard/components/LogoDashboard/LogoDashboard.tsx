import Image from "next/image";
import Link from "next/link";

export  function LogoDashboard() {
  return (
    <Link href="/" className="flex items-center h-20 gap-2 border-b cursor-pointer min-h-20 px-6">
      <Image src="/logo.svg" alt="logo" width="150" height="150" priority/>
      <h1 className="text-xl font-bold">LuisCars</h1>
    </Link>
  )
}
