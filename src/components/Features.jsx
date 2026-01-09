import { Target, Zap, Shield, Share2 } from 'lucide-react';
import './Features.css';

const features = [
    {
        icon: <Target size={28} />,
        title: "99.9% Accuracy",
        description: "Advanced YOLO AI model trained on thousands of pill variations ensures precise counts every time.",
        highlight: "Most Accurate"
    },
    {
        icon: <Zap size={28} />,
        title: "Real-time Detection",
        description: "Get results in under 100ms. Point your camera and watch PillScan count instantly.",
        highlight: "Lightning Fast"
    },
    {
        icon: <Shield size={28} />,
        title: "100% Private",
        description: "All processing happens on your device. Your data never leaves your phone.",
        highlight: "On-Device AI"
    },
    {
        icon: <Share2 size={28} />,
        title: "Easy Export",
        description: "Share counts instantly or export detailed reports for your records.",
        highlight: "One Tap Share"
    }
];

const Features = () => {
    return (
        <section id="features" className="features">
            <div className="features-bg">
                <div className="features-glow"></div>
            </div>

            <div className="container">
                <div className="section-header">
                    <span className="section-badge">Features</span>
                    <h2>Why Choose <span className="gradient-text">PillScan</span>?</h2>
                    <p>Built with cutting-edge AI technology for healthcare professionals and patients.</p>
                </div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="feature-card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="feature-highlight">{feature.highlight}</div>
                            <div className="feature-icon">
                                {feature.icon}
                            </div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                            <div className="feature-line"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
