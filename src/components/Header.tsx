import React, { useEffect, useRef, useState } from 'react'
import { MdOutlineMenu, MdOutlineClose } from "react-icons/md";
import { Link, useLocation } from 'react-router-dom';
import Button from '../templates/Button';
import { navItems } from '../utilities/data';
import { IoMdMail } from "react-icons/io";
import { IoSunnyOutline } from "react-icons/io5";


const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const location = useLocation();
    const currentPath = location.pathname;
    const currentHash = location.hash;

    const navRef = useRef<HTMLDivElement>(null);
    const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });

    useEffect(() => {
        const activeLink = navRef.current?.querySelector<HTMLAnchorElement>(
            "a.active-link"
        );

        if (activeLink) {
            const linkRect = activeLink.getBoundingClientRect();
            const navRect = navRef.current!.getBoundingClientRect();

            setUnderlineStyle({
                left: linkRect.left - navRect.left,
                width: linkRect.width,
            });
        }
    }, [currentPath, currentHash, navItems]);

    return (
        <header className={`fixed w-full px-3 py-6 z-999`}>
            <div className="container mx-auto max-w-screen-xl">
                <nav className="flex items-center justify-between text-primary-light">
                    {/* Logo */}
                    <Link to="/" className="flex items-center font-semibold text-2xl tracking-wider">
                        {/* <img src={logo} className="w-60 h-10" /> */}
                        Mayur Likhitkar
                    </Link>

                    {/* Desktop Navigation */}
                    <div ref={navRef} className="hidden md:flex items-center space-x-8 bg-background-main/50 backdrop-blur-md py-4 px-5 rounded-md border border-border-dark/70">
                        {navItems.map((item) => {
                            const isActive = item.hash
                                ? currentPath === item.path && currentHash === "#" + item.hash
                                : currentPath === item.path && !currentHash;

                            return (
                                <Link
                                    key={item.key}
                                    to={{ pathname: item.path, hash: item.hash }}
                                    className={`relative text-sm font-medium flex items-center gap-1 transition-colors ${isActive
                                        ? "text-primary-light active-link"
                                        : "text-text-light hover:text-primary-light"
                                        }`}
                                >
                                    <item.icon className='inline-block' /> {item.title}
                                </Link>
                            );
                        })}

                        {/* Sliding underline */}
                        <span
                            className="absolute bottom-2 h-[2px] bg-primary-light transition-all duration-1000"
                            style={{
                                left: underlineStyle.left,
                                width: underlineStyle.width,
                            }}
                        />
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:flex gap-2">
                        <Button className=''><IoSunnyOutline /></Button>
                        <Button className='' variant='outline'><IoMdMail /></Button>
                    </div>

                    {/* Mobile menu button */}
                    <button className="md:hidden text-text-main" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <MdOutlineClose className="w-6 h-6" /> : <MdOutlineMenu className="w-6 h-6" />}
                    </button>
                </nav>

                {/* Mobile Navigation */}
                <nav className={`flex flex-col gap-5 rounded-sm bg-background-light p-6 transform transition-all duration-1000 ease-out ${isMenuOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-75 pointer-events-none'}`}
                    aria-hidden={!isMenuOpen}>
                    {navItems.map((item) => {
                        const isActive = item.hash
                            ? currentPath === item.path && currentHash === '#' + item.hash
                            : currentPath === item.path && !currentHash;
                        return <Link
                            key={item.key}
                            to={{ pathname: item.path, hash: item.hash }}
                            onClick={() => setIsMenuOpen(false)}
                            className={`relative text-sm font-medium transition-colors after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-primary-light after:transition-all after:duration-300 ${isActive
                                ? "text-primary-light active-link"
                                : "text-text-light hover:text-primary-light"
                                }`}>
                            {item.title}
                        </Link>
                    })}
                    <Button link href='{whatsappLink}'>Get Started</Button>
                </nav>
            </div>
        </header>
    )
}

export default Header