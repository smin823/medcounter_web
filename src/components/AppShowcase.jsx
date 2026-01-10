import { Camera, Cpu, CheckCircle } from 'lucide-react';
import './AppShowcase.css';

const steps = [
    {
        number: "01",
        icon: <Camera size={24} />,
        title: "Point Your Camera",
        description: "Simply open PillScan and point your phone camera at the pills you want to count."
    },
    {
        number: "02",
        icon: <Cpu size={24} />,
        title: "AI Detection",
        description: "Our advanced YOLO AI model instantly detects and counts each pill in real-time."
    },
    {
        number: "03",
        icon: <CheckCircle size={24} />,
        title: "Get Results",
        description: "See accurate counts instantly and save or share your results with one tap."
    }
];

const AppShowcase = () => {
    return (
        <section id="how-it-works" className="showcase">
            <div className="showcase-bg">
                <div className="showcase-glow"></div>
            </div>

            <div className="container">
                <div className="section-header">
                    <span className="section-badge">How it Works</span>
                    <h2>Count Pills in <span className="gradient-text">3 Simple Steps</span></h2>
                    <p>No complex setup required. Just point, scan, and get results.</p>
                </div>

                <div className="showcase-content">
                    {/* Steps */}
                    <div className="steps-list">
                        {steps.map((step, index) => (
                            <div key={index} className="step-item">
                                <div className="step-number">{step.number}</div>
                                <div className="step-content">
                                    <div className="step-icon">
                                        {step.icon}
                                    </div>
                                    <div className="step-text">
                                        <h3>{step.title}</h3>
                                        <p>{step.description}</p>
                                    </div>
                                </div>
                                {index < steps.length - 1 && <div className="step-connector"></div>}
                            </div>
                        ))}
                    </div>

                    {/* Phone Mockup */}
                    <div className="showcase-phone">
                        <div className="phone-glow"></div>
                        <div className="phone-container">
                            <div className="phone-bezel">
                                <div className="phone-screen">
                                    <img
                                        src="/images/app-mockup-2.png"
                                        alt="PillScan App Real-time Mode"
                                        className="mockup-image"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppShowcase;
