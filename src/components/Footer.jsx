import { Smartphone, Twitter, Instagram, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <div className="logo">
                            <Smartphone className="logo-icon" />
                            <span className="logo-text">MedCounter</span>
                        </div>
                        <p>The smartest way to count pills. Fast, accurate, and secure.</p>
                    </div>

                    <div className="footer-links">
                        <div className="link-group">
                            <h4>Product</h4>
                            <a href="#features">Features</a>
                            <a href="#how-it-works">How it Works</a>
                            <a href="#pricing">Pricing</a>
                        </div>

                        <div className="link-group">
                            <h4>Company</h4>
                            <a href="/about">About Us</a>
                            <a href="/careers">Careers</a>
                            <a href="/contact">Contact</a>
                        </div>

                        <div className="link-group">
                            <h4>Legal</h4>
                            <a href="/privacy">Privacy Policy</a>
                            <a href="/terms">Terms of Service</a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} MedCounter. All rights reserved.</p>
                    <div className="social-links">
                        <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                        <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
                        <a href="#" aria-label="Email"><Mail size={20} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
