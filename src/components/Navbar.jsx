import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [mobileMenuOpen]);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-content">
                <a href="/" className="logo">
                    <img src="/images/logo.png" alt="PillScan" className="logo-img" />
                    <span className="logo-text">PillScan</span>
                </a>

                <div className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
                    <a href="#features" onClick={() => setMobileMenuOpen(false)}>Features</a>
                    <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)}>How it Works</a>
                    <a href="#showcase" onClick={() => setMobileMenuOpen(false)}>Showcase</a>
                    <div className="nav-mobile-cta">
                        <button className="btn-primary">
                            <span>Download App</span>
                        </button>
                    </div>
                </div>

                <div className="nav-actions">
                    <button className="btn-primary nav-cta">
                        <span>Download App</span>
                    </button>
                    <button
                        className="mobile-menu-btn"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
