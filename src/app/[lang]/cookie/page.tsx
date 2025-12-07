import styles from "@/components/LegalPage.module.css";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getDictionary } from "@/get-dictionary";

export default async function CookiePage({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    const isSk = lang === 'sk';

    return (
        <main className="min-h-screen flex flex-col">
            <Header dict={dict} lang={lang} />
            <div className={`container ${styles.wrapper}`}>
                <div className={styles.content}>
                    <h1 className={styles.title}>{isSk ? "Zásady používania súborov cookie" : "Cookie Policy"}</h1>

                    <div className={styles.section}>
                        <p className={styles.text}>{isSk ? "Dátum účinnosti: 23. septembra 2025" : "Effective Date: September 23, 2025"}</p>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>{isSk ? "1. Čo sú súbory cookie?" : "1. What Are Cookies?"}</h2>
                        <p className={styles.text}>
                            {isSk ? (
                                <>
                                    Súbory cookie sú malé textové súbory, ktoré sa ukladajú do vášho zariadenia (počítač, tablet, smartfón), keď navštívite webovú stránku. Sú široko používané na zefektívnenie fungovania webových stránok, ako aj na poskytovanie informácií vlastníkom stránky.
                                </>
                            ) : (
                                <>
                                    Cookies are small text files that are placed on your device (computer, tablet, smartphone) when you visit a website. They are widely used to make websites work more efficiently, as well as to provide information to the site owners.
                                </>
                            )}
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>{isSk ? "2. Ako používame súbory cookie" : "2. How We Use Cookies"}</h2>
                        <p className={styles.text}>
                            {isSk ? (
                                <>
                                    Naša webová stránka používa súbory cookie na to, aby sme vás odlíšili od ostatných používateľov, poskytli vám dobrý zážitok pri prehliadaní a pomohli nám vylepšiť našu stránku. Používaním našej stránky súhlasíte s používaním nevyhnutne potrebných súborov cookie. Pre všetky ostatné súbory cookie vyžadujeme váš výslovný súhlas.
                                </>
                            ) : (
                                <>
                                    Our website uses cookies to distinguish you from other users, to provide a good experience when you browse, and to help us improve our site. By using our site, you consent to the use of Strictly Necessary cookies. For all other cookies, we require your explicit consent.
                                </>
                            )}
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>{isSk ? "3. Typy súborov cookie, ktoré používame" : "3. Types of Cookies We Use"}</h2>

                        <h3 className={styles.subSectionTitle}>{isSk ? "Nevyhnutne potrebné súbory cookie" : "Strictly Necessary Cookies"}</h3>
                        <p className={styles.text}>{isSk ? "Tieto súbory cookie sú nevyhnutné na to, aby ste sa mohli pohybovať po webovej stránke a používať jej funkcie. Nevyžadujú váš súhlas." : "These cookies are essential for you to move around the website and use its features. They do not require your consent."}</p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>{isSk ? "Príklad:" : "Example:"} <code>sessionid</code> – {isSk ? "Používa sa na udržanie vašej relácie počas prehliadania." : "Used to maintain your session while browsing."}</li>
                        </ul>

                        <h3 className={styles.subSectionTitle}>{isSk ? "Výkonnostné a analytické súbory cookie" : "Performance and Analytics Cookies"}</h3>
                        <p className={styles.text}>{isSk ? "Tieto súbory cookie zhromažďujú anonymné informácie o tom, ako návštevníci používajú našu webovú stránku, napríklad ktoré stránky navštevujú najčastejšie. To nám pomáha zlepšovať fungovanie našej webovej stránky. Tieto súbory cookie použijeme iba vtedy, ak nám dáte svoj súhlas." : "These cookies collect anonymous information about how visitors use our website, such as which pages are visited most often. This helps us improve how our website works. We will only use these cookies if you give us your consent."}</p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>{isSk ? "Príklad:" : "Example:"} Google Analytics (<code>_ga</code>, <code>_gid</code>) – {isSk ? "Používajú sa na zhromažďovanie štatistických údajov o tom, ako návštevníci používajú stránku. Všetky údaje sú anonymizované." : "Used to gather statistical data on how visitors use the site. All data is anonymized."}</li>
                        </ul>

                        <h3 className={styles.subSectionTitle}>{isSk ? "Marketingové súbory cookie" : "Marketing Cookies"}</h3>
                        <p className={styles.text}>{isSk ? "Tieto súbory cookie sa používajú na sledovanie návštevníkov naprieč webovými stránkami. Zámerom je zobrazovať reklamy, ktoré sú relevantné a pútavé pre jednotlivého používateľa. Tieto súbory cookie použijeme iba vtedy, ak nám dáte svoj súhlas." : "These cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user. We will only use these cookies if you give us your consent."}</p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>{isSk ? "Príklad:" : "Example:"} Meta (Facebook) Pixel (<code>_fbp</code>) – {isSk ? "Používa sa na doručovanie cielených reklám na platformách Meta po tom, čo ste navštívili našu stránku." : "Used to deliver targeted advertisements on Meta platforms after you have visited our site."}</li>
                        </ul>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>{isSk ? "4. Vaše voľby a správa súborov cookie" : "4. Your Choices and Managing Cookies"}</h2>
                        <p className={styles.text}>
                            {isSk ? (
                                <>
                                    Svoje preferencie týkajúce sa súborov cookie môžete kedykoľvek spravovať prostredníctvom nášho bannera na správu súhlasu s cookies. Môžete tiež nastaviť svoj prehliadač tak, aby odmietal všetky alebo niektoré súbory cookie, alebo aby vás upozornil, keď webové stránky nastavia alebo pristupujú k súborom cookie. Upozorňujeme, že ak zakážete alebo odmietnete nevyhnutne potrebné súbory cookie, niektoré časti tejto webovej stránky sa môžu stať nedostupnými alebo nemusia správne fungovať.
                                </>
                            ) : (
                                <>
                                    You can manage your cookie preferences at any time through our Cookie Consent Banner. You can also set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. Please note that if you disable or refuse Strictly Necessary cookies, some parts of this website may become inaccessible or not function properly.
                                </>
                            )}
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>{isSk ? "5. Kontaktujte nás" : "5. Contact Us"}</h2>
                        <p className={styles.text}>
                            {isSk ? "Ak máte akékoľvek otázky týkajúce sa nášho používania súborov cookie, kontaktujte nás na adrese" : "If you have any questions about our use of cookies, please contact us at"} <a href="mailto:hello@euhub.sk" className={styles.link}>hello@euhub.sk</a>.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <p className={styles.text}>
                            <Link href={`/${lang}/terms`} className={styles.link}>{isSk ? "Obchodné podmienky" : "Terms & Conditions"}</Link> |
                            <Link href={`/${lang}/privacy`} className={styles.link}> {isSk ? "Ochrana osobných údajov" : "Privacy Policy"}</Link> |
                            <Link href={`/${lang}/cookie`} className={styles.link}> {isSk ? "Zásady používania cookies" : "Cookie Policy"}</Link>
                        </p>
                    </div>

                </div>
            </div>
            <Footer lang={lang} />
        </main>
    );
}
