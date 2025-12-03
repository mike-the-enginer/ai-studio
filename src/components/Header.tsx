import Link from 'next/link';
import styles from './Header.module.css';

export default function Header({ dict, lang }: { dict: any, lang: string }) {
    const otherLang = lang === 'en' ? 'sk' : 'en';

    return (
        <header className={`${styles.header} glass`}>
            <div className={`container ${styles.container}`}>
                <Link href={`/${lang}`} className={styles.logo}>
                    AI-Ops<span style={{ color: 'var(--primary)' }}>Studio</span>
                </Link>

                <nav className={styles.nav}>
                    <Link href={`/${lang}#services`} className={styles.link}>Services</Link>
                    <Link href={`/${lang}#about`} className={styles.link}>About</Link>
                    <Link href={`/${lang}#contact`} className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                        Contact
                    </Link>
                </nav>

                <div className={styles.langSwitcher}>
                    <Link href={`/${otherLang}`} className={styles.langLink}>
                        {otherLang.toUpperCase()}
                    </Link>
                </div>
            </div>
        </header>
    );
}
