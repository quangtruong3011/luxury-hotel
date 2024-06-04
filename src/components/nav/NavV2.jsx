import { useState } from "react";
import { Link } from "react-router-dom";

const NavV2 = () => {
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
            <div className={`w-full flex justify-between items-center p-6 transition-all duration-300 ease-in-out ${isScrolled ? 'fixed top-0 z-50 bg-white opacity-100 shadow-lg' : 'block'}`}>
                <div className="logo">Logo</div>
                <ul className="flex gap-6">
                    {navLinks.map((link, index) => (
                        <li className="text-slate-900 font-semibold hover:text-red-500" key={index}>
                            <Link to={link.path}>{link.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
};

export default NavV2;