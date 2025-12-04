"use client";

import Link from 'next/link';
import { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';
import styles from './Header.module.css';

export default function Header({ dict, lang }: { dict: any, lang: string }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const otherLang = lang === 'en' ? 'sk' : 'en';

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className={`${styles.header} glass`}>
            <div className={`container ${styles.container}`}>
                <Link href={`/${lang}`} className={styles.logo}>
                    EU HUB <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>AI</span>
                </Link>

                <button
                    className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </button>

                <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
                    <Link href={`/${lang}#services`} className={styles.link} onClick={() => setIsMenuOpen(false)}>Services</Link>
                    <Link href={`/${lang}#about`} className={styles.link} onClick={() => setIsMenuOpen(false)}>About</Link>
                    <Link href={`/${lang}#contact`} className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }} onClick={() => setIsMenuOpen(false)}>
                        Contact
                    </Link>

                    <div className={styles.mobileLang}>
                        <Link href={`/${otherLang}`} className={styles.langLink}>
                            {otherLang.toUpperCase()}
                        </Link>
                    </div>
                </nav>

                <div className={styles.desktopLang}>
                    <div className={styles.controls}>
                        <ThemeToggle />
                        <Link href={`/${otherLang}`} className={styles.langLink}>
                            {otherLang.toUpperCase()}
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
