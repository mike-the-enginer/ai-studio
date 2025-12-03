import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer} id="contact">
            <div className="container">
                <div className={styles.grid}>
                    <div>
                        <h3 className={styles.brand}>AI-Ops Studio</h3>
                        <p className={styles.tagline}>Automating the future, today.</p>
                    </div>

                    <div className={styles.links}>
                        <h4>Contact</h4>
                        <a href="mailto:hello@euhub.sk">hello@euhub.sk</a>
                        <a href="tel:+421919028987">+421 919 028 987</a>
                        <a href="https://wa.me/421919028987" target="_blank" rel="noopener noreferrer">WhatsApp</a>
                    </div>

                    <div className={styles.links}>
                        <h4>Social</h4>
                        <a href="https://www.upwork.com/freelancers/~010ff50fa102581498" target="_blank" rel="noopener noreferrer">Upwork Profile</a>
                        <a href="https://ai-ops.euhub.sk/" target="_blank" rel="noopener noreferrer">Mike G. Profile</a>
                    </div>
                </div>

                <div className={styles.copyright}>
                    © {new Date().getFullYear()} AI-Ops Studio. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
