import { useState, useEffect } from 'react';
import { Menu, X, Smartphone } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-content">
                <div className="logo">
                    <Smartphone className="logo-icon" />
                    <span className="logo-text">MedCounter</span>
                </div>

                <div className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
                    <a href="#features" onClick={() => setMobileMenuOpen(false)}>Features</a>
                    <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)}>How it Works</a>
                    <a href="#showcase" onClick={() => setMobileMenuOpen(false)}>App Showcase</a>
                    <button className="btn-primary mobile-only">Download App</button>
                </div>

                <div className="nav-actions">
                    <button className="btn-primary desktop-only">Download App</button>
                    <button
                        className="mobile-menu-btn"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
