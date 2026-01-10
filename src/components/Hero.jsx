import { ArrowRight, Sparkles, Scan, Shield } from 'lucide-react';
import './Hero.css';

const Hero = () => {
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
                        <button className="btn-primary">
                            <span>Download Free</span>
                            <ArrowRight size={18} />
                        </button>
                        <button className="btn-secondary">
                            <span>Watch Demo</span>
                        </button>
                    </div>

                    {/* Trust Indicators */}
                    <div className="hero-trust">
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
                            <span className="card-value">99.9%</span>
                            <span className="card-label">Accuracy</span>
                        </div>
                    </div>

                    <div className="floating-card card-speed">
                        <div className="card-icon">
                            <Scan size={16} />
                        </div>
                        <div className="card-content">
                            <span className="card-value">&lt;100ms</span>
                            <span className="card-label">Detection</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
