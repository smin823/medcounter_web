import { useState } from 'react';
import { ArrowRight, Sparkles, Scan, Shield, Camera, X } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    const [showDownloadModal, setShowDownloadModal] = useState(false);

    return (
        <section className="hero">
            {/* Background Effects */}
            <div className="hero-bg">
                <div className="hero-glow hero-glow-1"></div>
                <div className="hero-glow hero-glow-2"></div>
                <div className="hero-grid"></div>
            </div>

            <div className="container hero-content">
                <div className="hero-text">
                    {/* Badge */}
                    <div className="hero-badge">
                        <Sparkles size={14} />
                        <span>AI-Powered Pill Counter</span>
                    </div>

                    {/* Headline */}
                    <h1>
                        Count Pills with
                        <span className="gradient-text"> AI Precision</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="hero-subtitle">
                        Point your camera, get instant counts. PillScan uses advanced
                        computer vision to deliver 99.9% accurate results in milliseconds.
                    </p>

                    {/* CTA Buttons */}
                    <div className="hero-cta">
                        <button className="btn-primary" onClick={() => setShowDownloadModal(true)}>
                            <span>Download App</span>
                            <ArrowRight size={18} />
                        </button>
                    </div>

                    {/* Trust Indicators */}
                    <div className="hero-trust">
                        <div className="trust-item">
                            <div className="trust-icon">
                                <Camera size={18} />
                            </div>
                            <span>Photo Detection</span>
                        </div>
                        <div className="trust-divider"></div>
                        <div className="trust-item">
                            <div className="trust-icon">
                                <Scan size={18} />
                            </div>
                            <span>Real-time Detection</span>
                        </div>
                        <div className="trust-divider"></div>
                        <div className="trust-item">
                            <div className="trust-icon">
                                <Shield size={18} />
                            </div>
                            <span>100% Private</span>
                        </div>
                    </div>
                </div>

                {/* Phone Mockup */}
                <div className="hero-visual">
                    <div className="phone-wrapper">
                        <div className="phone-glow"></div>
                        <div className="phone-frame">
                            <div className="phone-notch"></div>
                            <div className="phone-screen">
                                <img
                                    src="/images/app-mockup-1.png"
                                    alt="PillScan App"
                                    className="mockup-image"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Floating Cards */}
                    <div className="floating-card card-accuracy">
                        <div className="card-icon">
                            <Sparkles size={16} />
                        </div>
                        <div className="card-content">
                            <span className="card-value">Highly</span>
                            <span className="card-label">Accurate</span>
                        </div>
                    </div>

                    <div className="floating-card card-speed">
                        <div className="card-icon">
                            <Scan size={16} />
                        </div>
                        <div className="card-content">
                            <span className="card-value">Fast</span>
                            <span className="card-label">Processing</span>
                        </div>
                    </div>
                </div>
            </div>

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
                                className="modal-btn app-store"
                            >
                                <div className="modal-btn-text">
                                    <span className="modal-btn-small">Download on the</span>
                                    <span className="modal-btn-large">App Store</span>
                                </div>
                            </a>
                            <a
                                href="https://play.google.com/store/apps/details?id=com.med.counter"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="modal-btn google-play"
                            >
                                <div className="modal-btn-text">
                                    <span className="modal-btn-small">Get it on</span>
                                    <span className="modal-btn-large">Google Play</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Hero;
