'use client';

import Link from "next/link";
import React, {useState} from "react";
import { Avatar } from "primereact/avatar";

const NavBar = () => {
    const [menu, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu(!menu);
    }

    return (
        <div className="bg-amber-500 border-b shadow-md max-h-16 p-4 text-black flex flex-col">
            <div className="flex justify-center">
                <Link href="/">Skadenlab</Link>
            </div>
            <div>
                <div  className="flex justify-between w-1/4">
                    <Link href="/">Blog</Link>
                    <Link href="/projects">Projets</Link>
                    <Link href="/about">L'auteur</Link>
                    <Link href="/contact">Contact</Link>
                </div>
                <div>
                    <Avatar icon="pi pi-user" className="mr-2" size="xlarge" shape="circle" />
                </div>
            </div>
        </div>
    )
}

export default NavBar;