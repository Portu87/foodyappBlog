"use client";
import Logo from "@/assets/images/isotipo@4x.png";
import {CartContext} from "@/context/CartContext";
import { cn } from "@/helpers/classnames";
import { Navbar } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
const navLinks = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "Blog",
    href: "/blog",
  },
  {
    text: "Store",
    href: "/store",
  },
  {
    text: "Cart",
    href: "/cart",
  },
];
const Header = () => {
  const pathname = usePathname();
const {totalQuantityProduct} = useContext(CartContext)
  return (
    <Navbar fluid rounded>
      <Navbar.Brand>
        <Image src={Logo} alt={"logo"} height={25} width={25} />
        <span className="self-center text-2xl font-bold whitespace-nowrap text-[#ed1c24]">
          foodyapp
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        {navLinks.map((navLink) => (
          <Navbar.Link
            key={navLink.href}
            href={navLink.href}
            active={pathname === navLink.href}
            as={Link}
            className={cn(
              pathname === navLink.href && "text-primary bg-gray-700 dark:bg-gray-200"
            )}
          >
            <span className="relative">
              {navLink.text}
               {navLink.text === "Cart" && (
                <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full -top-2 -right-5">
                  {totalQuantityProduct}
                </div>
              )} 
            </span>
          </Navbar.Link>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
