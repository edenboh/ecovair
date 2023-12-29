"use client";
import Link from "next/link"
import  {usePathname} from "next/navigation";
import "./style.css";
import {useState} from "react";

const navLinks=[
    {name:"Register", href:"/register"},
    {name:"Login", href: "/login"},
    {name:"Forgot Password", href: "/forgot-password"}
]

export default function authLayout({ children }) {
    const pathName=usePathname();//represente la route dans l'url
    const [input,setInput]=useState("")
    return (
        <div>
            <div>
                 <input value={input} onChange={e=> setInput(e.target.value)}/>
            </div>
            {navLinks.map((link)=>{
                const isActive=pathName.startsWith(link.href)

                return(
                    <Link href={link.href} key={link.name} className={isActive?"text-red-500 mr-4":"text-blue-500 mr-4"} >   {link.name}  </Link>
                )
            })}
                {children}
        </div>

    )
}