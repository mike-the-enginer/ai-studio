"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import styles from "./CookieBanner.module.css";

export default function CookieBanner() {
    const params = useParams();
    const lang = (params?.lang as string) || "en";
    const [showBanner, setShowBanner] = useState(false);
    const isSk = lang === 'sk';

    useEffect(() => {
        const consent = localStorage.getItem("cookie_consent");
        if (!consent) {
            setShowBanner(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookie_consent", "accepted");
        setShowBanner(false);
    };

    const handleDecline = () => {
        localStorage.setItem("cookie_consent", "declined");
        setShowBanner(false);
    };

    if (!showBanner) return null;

    return (
        <div className={`${styles.banner} ${showBanner ? styles.visible : ""}`}>
            <div className={styles.content}>
                <div className={styles.text}>
                    <p>
                        {isSk
                            ? "Používame súbory cookie na zlepšenie vášho zážitku. Používaním našej stránky súhlasíte s používaním súborov cookie. "
                            : "We use cookies to improve your experience. By using our site, you agree to our usage of cookies. "
                        }
                        <Link href={`/${lang}/cookie`} className={styles.link}>
                            {isSk ? "Zistiť viac" : "Learn more"}
                        </Link>
                    </p>
                </div>
                <div className={styles.actions}>
                    <button
                        onClick={handleDecline}
                        className={`${styles.button} ${styles.buttonSecondary}`}
                    >
                        {isSk ? "Odmietnuť" : "Decline"}
                    </button>
                    <button
                        onClick={handleAccept}
                        className={`${styles.button} ${styles.buttonPrimary}`}
                    >
                        {isSk ? "Prijať" : "Accept"}
                    </button>
                </div>
            </div>
        </div>
    );
}
