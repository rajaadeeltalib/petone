import Image from "next/image"
import Link from "next/link"
import Logo from "/public/img/header/logo.svg"
const Header = () => {
  return (
    <header className="py-6 lg:absolute lg:w-full lg:left-0">
      <div className="container mx-auto flex flex-col gap-y-6 lg:flex-row h-full justify-between items-center relative">
      <Link href="/"><Image src={Logo} alt="Logo" /></Link>
      <nav className="text-xl flex gap-x-4 lg:gap-x-12">
      <Link href="/">Services</Link>
      <Link href="/">About</Link>
      <Link href="/">Blog</Link>
      <Link href="/">Contact</Link>
      </nav>
      <button className="btn btn-primary lg:btn-outline">Sign up</button>
      </div>
    </header>
  )
}

export default Header