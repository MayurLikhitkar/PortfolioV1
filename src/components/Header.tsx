import React, { useEffect, useRef, useState } from 'react'
import { MdOutlineMenu, MdOutlineClose } from "react-icons/md";
import { Link, useLocation } from 'react-router-dom';
import Button from '../templates/Button';
import { Email, navItems } from '../utilities/data';
import { IoMdMail } from "react-icons/io";
import logo from "../assets/images/logo.png";


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
    }, [currentPath, currentHash]);

    return (
        <header className={`fixed w-full px-5 py-6 z-999 ${isMenuOpen ? 'h-full backdrop-blur-2xl' : ''}`}>
            <div className="container mx-auto max-w-screen-lg">
                <nav className={`flex items-center justify-between backdrop-blur-md text-primary-light border border-border-light/40 px-3 py-2 lg:py-0 rounded-lg`}>
                    <Link to="/" className="flex items-center gap-3 font-bold text-xl tracking-wider rounded-full">
                        <img src={logo} className="w-12 h-12 rounded-full bg-background-light" />
                        Mayur Likhitkar
                    </Link>

                    {/* Desktop Navigation */}
                    <div ref={navRef} className="hidden lg:flex items-center gap-5 bg-background-main/60 backdrop-blur-sm p-5">
                        {navItems.map((item) => {
                            const isActive = item.hash
                                ? currentPath === item.path && currentHash === "#" + item.hash
                                : currentPath === item.path && !currentHash;

                            return (
                                <Link
                                    key={item.key}
                                    to={{ pathname: item.path, hash: item.hash }}
                                    className={`relative text-sm font-medium flex items-center gap-1 ${isActive
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
                            className="absolute bottom-4 rounded-full h-[2px] bg-primary-light transition-all duration-1000"
                            style={{
                                left: underlineStyle.left,
                                width: underlineStyle.width,
                            }}
                        />
                    </div>

                    <div className="hidden lg:flex gap-2">
                        {/* <Button className=''><IoSunnyOutline /></Button> */}
                        <Button link to={`mailto:${Email}`} target='_self' variant='outline'><IoMdMail /></Button>
                    </div>

                    {/* Mobile menu button */}
                    <button className="lg:hidden text-text-main" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <MdOutlineClose className="w-6 h-6" /> : <MdOutlineMenu className="w-6 h-6" />}
                    </button>
                </nav>

                {/* Mobile Navigation */}
                <div className={`flex-col gap-5 ${isMenuOpen ? 'flex mt-15' : 'hidden'}`}
                    aria-hidden={!isMenuOpen}>
                    {navItems.map((item) => {
                        const isActive = item.hash
                            ? currentPath === item.path && currentHash === '#' + item.hash
                            : currentPath === item.path && !currentHash;
                        return (
                            <Link
                                key={item.key}
                                to={{ pathname: item.path, hash: item.hash }}
                                onClick={() => setIsMenuOpen(false)}
                                className={`relative text-sm font-medium flex items-center gap-3 transition-colors ${isActive
                                    ? "text-primary-light active-link"
                                    : "text-text-light hover:text-primary-light"
                                    }`}
                            >
                                <item.icon className='inline-block' /> {item.title}
                            </Link>
                        )
                    })}
                    <Button link target="_self" to={`mailto:${Email}`}>Connect With Me</Button>
                </div>
            </div>
        </header>
    )
}

export default Header