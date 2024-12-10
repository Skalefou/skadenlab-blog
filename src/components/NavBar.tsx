"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Avatar } from "primereact/avatar";
import { Sidebar } from "primereact/sidebar";

const NavBar = () => {
    const [menu, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu(!menu);
    };

    const getLinks = (
        <>
            <Link href="/" className="flex-shrink-0">
                Blog
            </Link>
            <Link href="/projects" className="flex-shrink-0">
                Projets
            </Link>
            <Link href="/about" className="flex-shrink-0">
                L&apos;auteur
            </Link>
            <Link href="/contact" className="flex-shrink-0">
                Contact
            </Link>
        </>
    );

    return (
        <>
            {/* Header Section */}
            <div className="bg-amber-500 border-b shadow-md max-h-16 p-4 text-black">
                <div className="flex justify-center">
                    <Link href="/">Skadenlab</Link>
                </div>
                <div className="hidden md:flex justify-between w-1/4">
                    {getLinks}
                </div>
            </div>
            <div>
                <Sidebar onHide={toggleMenu} visible={menu}>
                    <div className="flex flex-col space-y-4">{getLinks}</div>
                </Sidebar>
            </div>
        </>
    );
};

export default NavBar;
