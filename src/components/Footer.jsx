import { Mail } from 'lucide-react';
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
                        <a href="https://apps.apple.com/us/app/pillscan-pill-counting-app/id6476859707" target="_blank" rel="noopener noreferrer" className="btn-primary">
                            <span>Download for iOS</span>
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=com.med.counter" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                            <span>Download for Android</span>
                        </a>
                    </div>
                </div>

                {/* Footer Content */}
                <div className="footer-content">
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <img src="/images/logo.png" alt="PillScan" className="footer-logo-img" />
                            <span>PillScan</span>
                        </div>
                        <p>AI-powered pill counting for pharmacists and pharmacy technicians. Fast, accurate, and privacy-focused.</p>
                    </div>

                    <div className="footer-links">
                        <div className="link-group">
                            <h4>Product</h4>
                            <a href="#features">Features</a>
                            <a href="#how-it-works">How it Works</a>
                        </div>

                        <div className="link-group">
                            <h4>Legal</h4>
                            <a href="/privacy">Privacy Policy</a>
                            <a href="/terms">Terms of Service</a>
                        </div>

                        <div className="link-group">
                            <h4>Contact</h4>
                            <a href="mailto:medcounter@plolabs.com">medcounter@plolabs.com</a>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <p>&copy; {currentYear} PillScan. All rights reserved.</p>
                    <div className="social-links">
                        <a href="mailto:medcounter@plolabs.com" aria-label="Email">
                            <Mail size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
