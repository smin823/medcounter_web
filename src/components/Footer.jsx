import { Pill, Mail, Github, Twitter } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-glow"></div>

            <div className="container">
                {/* CTA Section */}
                <div className="footer-cta">
                    <h3>Ready to count smarter?</h3>
                    <p>Download PillScan today and experience the future of pill counting.</p>
                    <div className="cta-buttons">
                        <button className="btn-primary">
                            <span>Download for iOS</span>
                        </button>
                        <button className="btn-secondary">
                            <span>Download for Android</span>
                        </button>
                    </div>
                </div>

                {/* Footer Content */}
                <div className="footer-content">
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <div className="logo-icon-wrapper">
                                <Pill size={18} />
                            </div>
                            <span>PillScan</span>
                        </div>
                        <p>AI-powered pill counting for healthcare professionals and patients. Fast, accurate, and private.</p>
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
                            <a href="/about">About</a>
                            <a href="/blog">Blog</a>
                            <a href="/contact">Contact</a>
                        </div>

                        <div className="link-group">
                            <h4>Legal</h4>
                            <a href="/privacy">Privacy Policy</a>
                            <a href="/terms">Terms of Service</a>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <p>&copy; {currentYear} PillScan. All rights reserved.</p>
                    <div className="social-links">
                        <a href="#" aria-label="Email">
                            <Mail size={18} />
                        </a>
                        <a href="#" aria-label="Twitter">
                            <Twitter size={18} />
                        </a>
                        <a href="#" aria-label="GitHub">
                            <Github size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
