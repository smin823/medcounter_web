import { ArrowRight, CheckCircle } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-bg-glow"></div>
            <div className="container hero-content">
                <div className="hero-text">
                    <div className="badge">
                        <span className="badge-dot"></span>
                        <span>Now Available on iOS & Android</span>
                    </div>
                    <h1>
                        Precision <span className="gradient-text">Pill Counting</span> <br />
                        in Your Pocket
                    </h1>
                    <p className="hero-subtitle">
                        Powered by advanced AI to count pills instantly with 99.9% accuracy.
                        Secure, fast, and designed for healthcare professionals and patients alike.
                    </p>

                    <div className="hero-cta">
                        <button className="btn-primary">
                            Get Started <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                        </button>
                        <button className="btn-secondary">
                            Watch Demo
                        </button>
                    </div>

                    <div className="hero-stats">
                        <div className="stat-item">
                            <CheckCircle size={20} className="stat-icon" />
                            <span>99.9% Accuracy</span>
                        </div>
                        <div className="stat-item">
                            <CheckCircle size={20} className="stat-icon" />
                            <span>Real-time Detection</span>
                        </div>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="glass-card main-card">
                        <div className="card-header">
                            <div className="card-dot red"></div>
                            <div className="card-dot yellow"></div>
                            <div className="card-dot green"></div>
                        </div>
                        <div className="card-body">
                            <div className="scan-line"></div>
                            <div className="pill-grid">
                                {/* Abstract representation of pills */}
                                {[...Array(12)].map((_, i) => (
                                    <div key={i} className="pill-item" style={{ animationDelay: `${i * 0.1}s` }}></div>
                                ))}
                            </div>
                            <div className="scan-result">
                                <span>Count: 12</span>
                            </div>
                        </div>
                    </div>

                    <div className="glass-card floating-card card-1">
                        <span>💊 Aspirin</span>
                    </div>
                    <div className="glass-card floating-card card-2">
                        <span>⚡️ Instant</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
