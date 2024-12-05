'use client';

import Link from "next/link";
import React from "react";
import { Avatar } from "primereact/avatar";

const NavBar = () => {
    return (
        <div className="bg-amber-500 border-b shadow-md max-h-16 p-4 text-black ">
            <div className="flex item-center justify-center h-screen">
            <Link href="/">Skadenlab</Link>
            </div>
            <div className="flex justify-between items-center w-full mt-4">
                <div >
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