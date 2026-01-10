import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [showDownloadModal, setShowDownloadModal] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (mobileMenuOpen || showDownloadModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [mobileMenuOpen, showDownloadModal]);

    const handleDownloadClick = () => {
        setShowDownloadModal(true);
        setMobileMenuOpen(false);
    };

    return (
        <>
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <div className="container navbar-content">
                    <a href="/" className="logo">
                        <img src="/images/logo.png" alt="PillScan" className="logo-img" />
                        <span className="logo-text">PillScan</span>
                    </a>

                    <div className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
                        <a href="#features" onClick={() => setMobileMenuOpen(false)}>Features</a>
                        <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)}>How it Works</a>
                        <div className="nav-mobile-cta">
                            <button className="btn-primary" onClick={handleDownloadClick}>
                                <span>Download App</span>
                            </button>
                        </div>
                    </div>

                    <div className="nav-actions">
                        <button className="btn-primary nav-cta" onClick={handleDownloadClick}>
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

            {/* Download Modal */}
            {showDownloadModal && (
                <div className="download-modal-overlay" onClick={() => setShowDownloadModal(false)}>
                    <div className="download-modal" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => setShowDownloadModal(false)}>
                            <X size={20} />
                        </button>
                        <h3>Download PillScan</h3>
                        <p>Choose your platform</p>
                        <div className="modal-buttons">
                            <a
                                href="https://apps.apple.com/us/app/pillscan-pill-counting-app/id6476859707"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="store-badge"
                            >
                                <img src="/images/app-store-badge.svg" alt="Download on the App Store" />
                            </a>
                            <a
                                href="https://play.google.com/store/apps/details?id=com.med.counter"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="store-badge"
                            >
                                <img src="/images/google-play-badge.png" alt="Get it on Google Play" />
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
