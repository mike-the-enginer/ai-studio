import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer({ lang = 'en' }: { lang?: string }) {
    const isSk = lang === 'sk';

    return (
        <footer className={styles.footer} id="contact">
            <div className="container">
                <div className={styles.grid}>
                    <div>
                        <h3 className={styles.brand}>EUHub AI Studio</h3>
                        <p className={styles.tagline}>{isSk ? "Automatizácia budúcnosti, už dnes." : "Automating the future, today."}</p>
                    </div>

                    <div className={styles.links}>
                        <h4>{isSk ? "Právne" : "Legal"}</h4>
                        <Link href={`/${lang}/terms`}>{isSk ? "Obchodné podmienky" : "Terms of Service"}</Link>
                        <Link href={`/${lang}/privacy`}>{isSk ? "Ochrana osobných údajov" : "Privacy Policy"}</Link>
                        <Link href={`/${lang}/cookie`}>{isSk ? "Zásady používania cookies" : "Cookie Policy"}</Link>
                    </div>

                    <div className={styles.links}>
                        <h4>{isSk ? "Kontakty" : "Contacts"}</h4>
                        <a href="mailto:hello@euhub.sk">hello@euhub.sk</a>
                        <a href="tel:+421919028987">+421 919 028 987</a>
                        <a href="https://wa.me/421919028987" target="_blank" rel="noopener noreferrer">WhatsApp</a>
                    </div>

                    <div className={styles.links}>
                        <h4>{isSk ? "Sociálne siete" : "Social"}</h4>
                        <a href="https://www.upwork.com/freelancers/~010ff50fa102581498" target="_blank" rel="noopener noreferrer">{isSk ? "Profil Upwork" : "Upwork Profile"}</a>
                        <a href="https://mike.euhub-ai.com/" target="_blank" rel="noopener noreferrer">{isSk ? "Profil Mike G." : "Mike G. Profile"}</a>
                    </div>
                </div>

                <div className={styles.copyright}>
                    © {new Date().getFullYear()} EUHub AI Studio. {isSk ? "Všetky práva vyhradené." : "All rights reserved."}
                </div>
            </div>
        </footer>
    );
}
