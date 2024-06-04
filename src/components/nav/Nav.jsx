import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    const navLinks = [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Room', path: '/room' },
        { title: 'Blog', path: '/blog' },
        { title: 'Contact', path: '/contact' },
    ];

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    window.addEventListener('scroll', handleScroll);
    return (
        <nav>
            <div className={`fixed top-0 z-50 w-full flex justify-between items-center p-6 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-slate-800 opacity-100' : 'bg-transparent opacity-100'}`}>
                <div className="logo">Logo</div>
                <ul className="flex gap-6">
                    {navLinks.map((link, index) => (
                        <li className="text-white font-semibold hover:text-red-500" key={index}>
                            <Link to={link.path}>{link.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
};

export default Nav;