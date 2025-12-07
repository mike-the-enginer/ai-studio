import styles from "@/components/LegalPage.module.css";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getDictionary } from "@/get-dictionary";

export default async function PrivacyPage({
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
                    <h1 className={styles.title}>{isSk ? "Politika ochrany osobných údajov" : "Privacy Policy"}</h1>

                    <div className={styles.section}>
                        <p className={styles.text}>{isSk ? "Naposledy aktualizované: 22. septembra 2025" : "Last Updated: September 22, 2025"}</p>
                        <p className={styles.text}>{isSk ? "Dátum účinnosti: 23. septembra 2025" : "Effective Date: September 23, 2025"}</p>
                    </div>

                    <div className={styles.section}>
                        <p className={styles.text}>
                            {isSk ? (
                                <>
                                    Zrieknutie sa zodpovednosti: Tento dokument je komplexná šablóna vytvorená na základe zákonov EÚ a Slovenskej republiky o ochrane údajov. Nenahrádza odborné právne poradenstvo. Musíte sa poradiť s kvalifikovaným právnym odborníkom, aby ste sa uistili, že táto politika je úplná, presná a plne v súlade s vašimi konkrétnymi obchodnými operáciami.
                                </>
                            ) : (
                                <>
                                    Disclaimer: This document is a comprehensive template generated based on EU and Slovak data protection laws. It is not a substitute for professional legal advice. You must consult with a qualified legal professional to ensure this policy is complete, accurate, and fully compliant with your specific business operations.
                                </>
                            )}
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>{isSk ? "Článok 1: Úvod a rozsah" : "Article 1: Introduction and Scope"}</h2>
                        <p className={styles.text}>
                            {isSk ? (
                                <>
                                    Engineers-incubator s.r.o. („my“, „nás“ alebo „naše“) sa zaväzuje dodržiavať najvyššie štandardy ochrany súkromia a údajov. Táto politika ochrany osobných údajov stanovuje naše povinnosti a vaše práva týkajúce sa zhromažďovania, spracúvania a ochrany vašich osobných údajov, keď interagujete s našou webovou stránkou [euhub-ai.com](https://euhub-ai.com) („Služba“).
                                </>
                            ) : (
                                <>
                                    Engineers-incubator s.r.o. (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is dedicated to upholding the highest standards of privacy and data protection. This Privacy Policy outlines our obligations and your rights concerning the collection, processing, and protection of your personal data when you interact with our website, [euhub-ai.com](https://euhub-ai.com) (the &quot;Service&quot;).
                                </>
                            )}
                        </p>
                        <p className={styles.text}>
                            {isSk ? (
                                <>
                                    Táto politika je vypracovaná v prísnom súlade s Nariadením (EÚ) 2016/679 (GDPR) a slovenským zákonom č. 18/2018 Z.z. o ochrane osobných údajov („Zákon“).
                                </>
                            ) : (
                                <>
                                    This policy is drafted in strict accordance with Regulation (EU) 2016/679 (the General Data Protection Regulation or &quot;GDPR&quot;) and the Slovak Act No. 18/2018 Coll. on Personal Data Protection (the &quot;Act&quot;).
                                </>
                            )}
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>{isSk ? "Článok 2: Prevádzkovateľ údajov" : "Article 2: Data Controller"}</h2>
                        <p className={styles.text}>
                            {isSk ? "Názov spoločnosti: Engineers-incubator s.r.o." : "Company Name: Engineers-incubator s.r.o."}<br />
                            {isSk ? "Identifikačné číslo spoločnosti (IČO): 53 741 200" : "Company ID (IČO): 53 741 200"}<br />
                            {isSk ? "Sídlo: Horná 67, 974 01 Banská Bystrica, Slovenská republika" : "Registered Address: Horná 67, 974 01 Banská Bystrica, Slovenská republika"}<br />
                            {isSk ? "Kontaktný e-mail pre otázky týkajúce sa ochrany súkromia:" : "Contact Email for Privacy Inquiries:"} <a href="mailto:hello@euhub.sk" className={styles.link}>hello@euhub.sk</a>
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>{isSk ? "Článok 3: Zhromažďovanie údajov a účel spracúvania" : "Article 3: Data Collection and Purpose of Processing"}</h2>
                        <p className={styles.text}>
                            {isSk ? "Dodržiavame zásadu minimalizácie údajov a zhromažďujeme osobné údaje len na špecifikované, výslovné a legitímne účely." : "We adhere to the principle of data minimization and collect personal data only for specified, explicit, and legitimate purposes."}
                        </p>

                        <h3 className={styles.subSectionTitle}>{isSk ? "3.1. Informácie, ktoré poskytujete priamo:" : "3.1. Information You Provide Directly:"}</h3>
                        <ul className={styles.list}>
                            {isSk ? (
                                <>
                                    <li className={styles.listItem}><strong>Účet a profil:</strong> Celé meno, e-mail, používateľské meno, hašované heslo. Dobrovoľne – LinkedIn alebo Telegram. <br />Účel: vytvorenie a správa účtu, poskytovanie služieb, interakcia s používateľmi.</li>
                                    <li className={styles.listItem}><strong>Komunikácia:</strong> Meno, kontaktné údaje, obsah správy. <br />Účel: odpovedať na otázky a viesť záznamy o korešpondencii.</li>
                                    <li className={styles.listItem}><strong>Marketingové odbery:</strong> E-mailová adresa. <br />Účel: zasielanie marketingových správ na základe vášho súhlasu.</li>
                                </>
                            ) : (
                                <>
                                    <li className={styles.listItem}><strong>Account and Profile Information:</strong> Full Name, Email Address, Username, and Hashed Password. Optional data: LinkedIn URL, Telegram username. <br />Purpose: To create and manage your account, provide our services, and facilitate user interaction.</li>
                                    <li className={styles.listItem}><strong>Communications:</strong> Name, contact details, and message content. <br />Purpose: To respond to inquiries and maintain a record of correspondence.</li>
                                    <li className={styles.listItem}><strong>Marketing Subscriptions:</strong> Email Address. <br />Purpose: To send marketing communications to which you consented.</li>
                                </>
                            )}
                        </ul>

                        <h3 className={styles.subSectionTitle}>{isSk ? "3.2. Automaticky zhromažďované informácie:" : "3.2. Information Collected Automatically:"}</h3>
                        <ul className={styles.list}>
                            {isSk ? (
                                <>
                                    <li className={styles.listItem}><strong>Údaje o protokole a zariadení:</strong> IP, typ prehliadača, zariadenie, OS, URL odkazov. <br />Účel: bezpečnosť, analýza, zlepšenie funkčnosti.</li>
                                    <li className={styles.listItem}><strong>Súbory cookie a údaje o používaní:</strong> Informácie o interakcii so službou. <br />Účel: prevádzka webu, preferencie používateľov, analytika, marketing. Pozri osobitnú Politiku súborov cookie.</li>
                                </>
                            ) : (
                                <>
                                    <li className={styles.listItem}><strong>Log and Device Data:</strong> IP, browser type, device info, OS, referring URLs. <br />Purpose: Security, analysis, improved functionality.</li>
                                    <li className={styles.listItem}><strong>Usage Data & Cookies:</strong> Data from cookies and similar tech. <br />Purpose: Website operation, preferences, analytics, marketing. Detailed in Cookie Policy.</li>
                                </>
                            )}
                        </ul>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>{isSk ? "Článok 4: Právny základ spracúvania" : "Article 4: Legal Basis for Processing"}</h2>
                        <ul className={styles.list}>
                            {isSk ? (
                                <>
                                    <li className={styles.listItem}>Zmluvná nevyhnutnosť: čl. 6(1)(b) GDPR</li>
                                    <li className={styles.listItem}>Súhlas: čl. 6(1)(a) GDPR</li>
                                    <li className={styles.listItem}>Oprávnené záujmy: čl. 6(1)(f) GDPR</li>
                                    <li className={styles.listItem}>Právna povinnosť: čl. 6(1)(c) GDPR</li>
                                </>
                            ) : (
                                <>
                                    <li className={styles.listItem}>Contractual Necessity: Article 6(1)(b) GDPR</li>
                                    <li className={styles.listItem}>Consent: Article 6(1)(a) GDPR</li>
                                    <li className={styles.listItem}>Legitimate Interests: Article 6(1)(f) GDPR</li>
                                    <li className={styles.listItem}>Legal Obligation: Article 6(1)(c) GDPR</li>
                                </>
                            )}
                        </ul>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>{isSk ? "Článok 5: Sprístupnenie a prenos údajov" : "Article 5: Data Disclosure and Transfers"}</h2>
                        <ul className={styles.list}>
                            {isSk ? (
                                <>
                                    <li className={styles.listItem}>Poskytovatelia služieb tretích strán: hosting, platby, analytika.</li>
                                    <li className={styles.listItem}>Súlad so zákonom: sprístupnenie na základe zákona alebo rozhodnutia súdu.</li>
                                    <li className={styles.listItem}>Medzinárodný prenos: chránený štandardnými zmluvnými doložkami.</li>
                                </>
                            ) : (
                                <>
                                    <li className={styles.listItem}>Third-Party Service Providers: Hosting, payments, analytics.</li>
                                    <li className={styles.listItem}>Legal Compliance: Disclosure if required by law or authority.</li>
                                    <li className={styles.listItem}>International Transfers: Protected via Standard Contractual Clauses.</li>
                                </>
                            )}
                        </ul>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>{isSk ? "Článok 6: Uchovávanie údajov" : "Article 6: Data Retention"}</h2>
                        <p className={styles.text}>
                            {isSk ? "Údaje uchovávame len po dobu potrebnú na účely, ak zákon nevyžaduje dlhšie uchovávanie." : "We retain data only as long as necessary unless law requires longer retention."}
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>{isSk ? "Článok 7: Vaše práva" : "Article 7: Your Data Protection Rights"}</h2>
                        <ul className={styles.list}>
                            {isSk ? (
                                <>
                                    <li className={styles.listItem}>Právo na prístup</li>
                                    <li className={styles.listItem}>Právo na opravu</li>
                                    <li className={styles.listItem}>Právo na vymazanie („byť zabudnutý“)</li>
                                    <li className={styles.listItem}>Právo na obmedzenie spracúvania</li>
                                    <li className={styles.listItem}>Právo na prenosnosť údajov</li>
                                    <li className={styles.listItem}>Právo namietať</li>
                                    <li className={styles.listItem}>Právo odvolať súhlas</li>
                                    <li className={styles.listItem}>Právo podať sťažnosť – <br />
                                        Úrad na ochranu osobných údajov Slovenskej republiky,<br />
                                        Hraničná 12, 820 07 Bratislava 27, Slovenská republika,<br />
                                        <a href="https://dataprotection.gov.sk/uoou/" target="_blank" rel="noopener noreferrer" className={styles.link}>dataprotection.gov.sk/uoou</a></li>
                                </>
                            ) : (
                                <>
                                    <li className={styles.listItem}>Right to Access</li>
                                    <li className={styles.listItem}>Right to Rectification</li>
                                    <li className={styles.listItem}>Right to Erasure (&quot;Right to be Forgotten&quot;)</li>
                                    <li className={styles.listItem}>Right to Restrict Processing</li>
                                    <li className={styles.listItem}>Right to Data Portability</li>
                                    <li className={styles.listItem}>Right to Object</li>
                                    <li className={styles.listItem}>Right to Withdraw Consent</li>
                                    <li className={styles.listItem}>Right to Lodge a Complaint – Supervisory Authority: <br />
                                        Úrad na ochranu osobných údajov Slovenskej republiky,<br />
                                        Hraničná 12, 820 07 Bratislava 27, Slovenská republika,<br />
                                        <a href="https://dataprotection.gov.sk/uoou/" target="_blank" rel="noopener noreferrer" className={styles.link}>dataprotection.gov.sk/uoou</a></li>
                                </>
                            )}
                        </ul>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>{isSk ? "Článok 8: Bezpečnosť údajov" : "Article 8: Data Security"}</h2>
                        <p className={styles.text}>
                            {isSk ? "Zaviedli sme technické a organizačné opatrenia na ochranu údajov pred stratou, zmenou, sprístupnením alebo neoprávneným prístupom." : "We implement appropriate technical and organizational measures to protect your data from loss, alteration, unauthorized disclosure, or access."}
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>{isSk ? "Článok 9: Ochrana súkromia detí" : "Article 9: Children's Privacy"}</h2>
                        <p className={styles.text}>
                            {isSk ? "Služba nie je určená osobám mladším ako 16 rokov. Ak takéto údaje zhromaždíme omylom — vymažeme ich." : "Our Service is not directed to children under 16. We do not knowingly collect their data. If we become aware, we delete it promptly."}
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>{isSk ? "Článok 10: Zmeny politiky" : "Article 10: Amendments to This Policy"}</h2>
                        <p className={styles.text}>
                            {isSk ? "Politiku môžeme aktualizovať. Nová verzia nadobúda účinnosť od dátumu označeného ako „Dátum účinnosti“." : "We may update this Privacy Policy from time to time. The updated version will show a revised &quot;Effective Date&quot; and will apply immediately."}
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
