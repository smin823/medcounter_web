import './AppShowcase.css';

const AppShowcase = () => {
    return (
        <section id="showcase" className="showcase">
            <div className="container">
                <div className="showcase-header">
                    <h2>Designed for <span className="gradient-text">Efficiency</span></h2>
                    <p>A clean, intuitive interface that puts powerful tools at your fingertips.</p>
                </div>

                <div className="phone-mockup-container">
                    <div className="phone-frame">
                        <div className="phone-notch"></div>
                        <div className="phone-screen">
                            {/* Fake App UI */}
                            <div className="app-header">
                                <div className="app-time">9:41</div>
                                <div className="app-status">
                                    <span>5G</span>
                                    <div className="battery"></div>
                                </div>
                            </div>

                            <div className="app-content">
                                <div className="camera-view">
                                    <div className="focus-ring"></div>
                                    <div className="detected-pills">
                                        {[...Array(8)].map((_, i) => (
                                            <div key={i} className={`detected-box box-${i}`}></div>
                                        ))}
                                    </div>
                                    <div className="scan-overlay"></div>
                                </div>

                                <div className="app-controls">
                                    <div className="result-card">
                                        <div className="result-row">
                                            <span>Total Count</span>
                                            <span className="count-value">42</span>
                                        </div>
                                        <div className="result-row small">
                                            <span>Confidence</span>
                                            <span className="confidence-value">99.9%</span>
                                        </div>
                                    </div>

                                    <div className="shutter-button">
                                        <div className="shutter-inner"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="glow-effect"></div>
                </div>
            </div>
        </section>
    );
};

export default AppShowcase;
