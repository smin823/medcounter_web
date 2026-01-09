import { Zap, Shield, FileText, Target } from 'lucide-react';
import './Features.css';

const features = [
    {
        icon: <Target size={32} />,
        title: "99.9% Accuracy",
        description: "Our advanced AI model is trained on thousands of pill variations to ensure precise counts every single time."
    },
    {
        icon: <Zap size={32} />,
        title: "Instant Detection",
        description: "Get results in milliseconds. Just point your camera and let MedCounter do the heavy lifting instantly."
    },
    {
        icon: <Shield size={32} />,
        title: "Secure & Private",
        description: "Your data is yours. We prioritize privacy with secure processing and strict data protection standards."
    },
    {
        icon: <FileText size={32} />,
        title: "Easy Export",
        description: "Generate detailed reports in PDF or Excel formats to share with pharmacists or keep for your records."
    }
];

const Features = () => {
    return (
        <section id="features" className="features">
            <div className="container">
                <div className="section-header">
                    <h2>Why Choose <span className="gradient-text">MedCounter</span>?</h2>
                    <p>Experience the future of medical inventory management.</p>
                </div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card glass-panel">
                            <div className="feature-icon">
                                {feature.icon}
                            </div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
