import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import './LegalPage.css';

const PrivacyPolicy = () => {
    return (
        <div className="legal-page">
            <div className="legal-header">
                <div className="container">
                    <Link to="/" className="back-link">
                        <ArrowLeft size={20} />
                        <span>Back to Home</span>
                    </Link>
                </div>
            </div>

            <div className="container">
                <div className="legal-content">
                    <h1>PillScan Privacy Policy</h1>

                    <p className="intro">
                        This Privacy Policy applies beginning December 18, 2025. You may change your consent anytime in our App Settings. We collect limited information only to support essential app features, such as login and subscriptions. We always prioritize your privacy, and this Privacy Policy explains how we collect, use, and protect your information.
                    </p>

                    <section>
                        <h2>1. Data Controller and Representative</h2>
                        <p>
                            We ("we," "our," or "us") care about the privacy of your personal information and are committed to protecting it. To provide our services, we may need to collect your personal data. This Privacy Policy outlines what we do, how we do it, your choices, and how we may require your cooperation to keep you safe.
                        </p>
                        <p>
                            The PillScan Privacy Policy applies to the PillScan app and unless otherwise specified, its subsidiaries, including any contractors, representatives, agents, and resellers while they are working on our behalf (collectively "we," "us," or "our").
                        </p>
                    </section>

                    <section>
                        <h2>2. What Kind of Information We Collect</h2>
                        <p>In providing the PillScan application, we collect, store, and use the following information related to you:</p>

                        <h3>2.1 Personal Information</h3>
                        <p>"Personal Information" refers to information that identifies you or another person. This may include:</p>
                        <ul>
                            <li>Information you provide when you use login services (e.g., Google or Apple), such as your UID (Unique Identifier) and email address. This data is used only to authenticate your account and is not shared with third-party advertisers.</li>
                            <li>Information related to your subscription, including recent subscription payment start and expiration dates.</li>
                        </ul>

                        <h3>2.2 Non-Personal Information</h3>
                        <p>Non-Personal Information relates to you but does not directly identify you. This may include:</p>
                        <ul>
                            <li>Log data, such as user behavior collected through Google Analytics, device information (e.g., hardware model, operating system version), and other technical information related to how you connect to our app.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>3. How We Use Collected Information</h2>
                        <p>We may use your information for the following purposes:</p>
                        <ul>
                            <li>Provide and manage the PillScan app, including subscription services, status checks, updates, and payment processing.</li>
                            <li>Improve the app through user behavior analysis and service statistics.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>4. Image Data Handling</h2>
                        <p>
                            Any images captured within the app (e.g., for pill scanning and counting) are processed entirely on your device. They are not uploaded, shared externally, or permanently stored. All image processing is done temporarily and locally to ensure privacy and safety.
                        </p>
                    </section>

                    <section>
                        <h2>5. Advertising and Third-Party Services</h2>

                        <h3>5.1 Google Mobile Ads</h3>
                        <p>We display advertisements through Google Mobile Ads to support our free service. Google may collect and use the following information:</p>
                        <ul>
                            <li>Advertising ID (IDFA on iOS, GAID on Android)</li>
                            <li>Device information (device type, operating system, screen size)</li>
                            <li>IP address and approximate location</li>
                            <li>Ad interaction data (views, clicks)</li>
                            <li>App usage data for personalized advertising</li>
                        </ul>
                        <p>You can opt out of personalized advertising through your device settings or within the app. Premium subscribers do not see advertisements.</p>

                        <h3>5.2 Firebase Crashlytics</h3>
                        <p>We use Firebase Crashlytics to improve app stability. When the app crashes or encounters errors, the following information may be collected:</p>
                        <ul>
                            <li>Device information (model, OS version, available memory)</li>
                            <li>App state at the time of crash</li>
                            <li>Stack traces and error logs</li>
                            <li>Crash timestamps and frequency</li>
                        </ul>
                        <p>This data is used solely for identifying and fixing bugs to improve your experience. It does not include personal information.</p>
                    </section>

                    <section>
                        <h2>6. Your Rights</h2>
                        <p>
                            You may request access to, correction of, or deletion of your personal data at any time by contacting us at medcounter@plolabs.com.
                        </p>
                    </section>

                    <section>
                        <h2>7. Contact Us</h2>
                        <p>
                            If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us at:
                        </p>
                        <p className="contact-email">
                            Email: <a href="mailto:medcounter@plolabs.com">medcounter@plolabs.com</a>
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
