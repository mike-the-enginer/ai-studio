import styles from "@/components/LegalPage.module.css";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getDictionary } from "@/get-dictionary";

export default async function TermsPage({
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
                    <h1 className={styles.title}>{isSk ? "Obchodné podmienky" : "Terms and Conditions"}</h1>

                    <div className={styles.section}>
                        <p className={styles.text}>{isSk ? "Dátum účinnosti: 23. septembra 2025" : "Effective Date: September 23, 2025"}</p>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>{isSk ? "1. Úvod a súhlas" : "1. Introduction and Agreement"}</h2>
                        <p className={styles.text}>
                            {isSk ? (
                                <>
                                    Vitajte na EUHub AI Studio („Stránka“), ktorú prevádzkuje spoločnosť Engineers-incubator s.r.o. („my“, „nás“ alebo „naša“). Tieto Obchodné podmienky („Podmienky“) upravujú váš prístup a používanie našej Stránky. Prístupom na Stránku alebo jej používaním súhlasíte s tým, že ste viazaní týmito Podmienkami v plnom rozsahu. Ak nesúhlasíte s ktoroukoľvek časťou týchto Podmienok, nesmiete túto Stránku používať.
                                </>
                            ) : (
                                <>
                                    Welcome to EUHub AI Studio (the &quot;Site&quot;), operated by Engineers-incubator s.r.o. (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). These Terms and Conditions (&quot;Terms&quot;) govern your access to and use of our Site. By accessing or using the Site, you agree to be bound by these Terms in their entirety. If you do not agree with any part of these Terms, you must not use this Site.
                                </>
                            )}
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>{isSk ? "2. Práva duševného vlastníctva" : "2. Intellectual Property Rights"}</h2>
                        <p className={styles.text}>
                            {isSk ? (
                                <>
                                    Všetok obsah prítomný na tejto Stránke, vrátane, ale nie výlučne, textu, grafiky, log, obrázkov a softvéru, je majetkom spoločnosti Engineers-incubator s.r.o. alebo jej dodávateľov obsahu a je chránený slovenskými a medzinárodnými zákonmi o autorských právach. Máte udelenú obmedzenú, nevýhradnú licenciu na prístup a prezeranie obsahu len na osobné, nekomerčné použitie.
                                </>
                            ) : (
                                <>
                                    All content present on this Site, including but not limited to text, graphics, logos, images, and software, is the property of Engineers-incubator s.r.o. or its content suppliers and is protected by Slovak and international copyright laws. You are granted a limited, non-exclusive license to access and view the content for personal, non-commercial use only.
                                </>
                            )}
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>{isSk ? "3. Povinnosti používateľa a prijateľné použitie" : "3. User Obligations and Acceptable Use"}</h2>
                        <p className={styles.text}>
                            {isSk ? "Súhlasíte s tým, že budete Stránku používať len na zákonné účely. Je vám zakázané:" : "You agree to use the Site only for lawful purposes. You are prohibited from:"}
                        </p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>
                                {isSk ? "Používať Stránku akýmkoľvek spôsobom, ktorý by mohol poškodiť, znefunkčniť alebo narušiť Stránku." : "Using the Site in any way that could damage, disable, or impair the Site."}
                            </li>
                            <li className={styles.listItem}>
                                {isSk ? "Pokúšať sa získať neoprávnený prístup k akejkoľvek časti Stránky alebo jej súvisiacim systémom." : "Attempting to gain unauthorized access to any part of the Site or its related systems."}
                            </li>
                            <li className={styles.listItem}>
                                {isSk ? "Zavádzať akékoľvek vírusy, trójske kone alebo iný materiál, ktorý je škodlivý alebo technologicky poškodzujúci." : "Introducing any viruses, trojans, or other material that is malicious or technologically harmful."}
                            </li>
                        </ul>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>{isSk ? "4. Vylúčenie zodpovednosti a obmedzenie zodpovednosti" : "4. Disclaimers and Limitation of Liability"}</h2>
                        <p className={styles.text}>
                            {isSk ? (
                                <>
                                    Stránka je poskytovaná „tak, ako je“ a „ako je dostupná“. Neposkytujeme žiadne záruky, vyjadrené ani implicitné, týkajúce sa presnosti, spoľahlivosti alebo úplnosti obsahu Stránky.
                                </>
                            ) : (
                                <>
                                    The Site is provided on an &quot;as is&quot; and &quot;as available&quot; basis. We make no warranties, expressed or implied, regarding the accuracy, reliability, or completeness of the Site&apos;s content.
                                </>
                            )}
                        </p>
                        <p className={styles.text}>
                            {isSk ? (
                                <>
                                    V plnom rozsahu povolenom slovenským právom spoločnosť Engineers-incubator s.r.o. nenesie zodpovednosť za žiadne nepriame, náhodné alebo následné škody, vrátane straty zisku alebo údajov, ktoré vzniknú z vášho používania alebo nemožnosti používať túto Stránku. Toto obmedzenie sa nevzťahuje na škody spôsobené hrubou nedbanlivosťou alebo úmyselným pochybením.
                                </>
                            ) : (
                                <>
                                    To the fullest extent permitted by Slovak law, Engineers-incubator s.r.o. shall not be liable for any indirect, incidental, or consequential damages, including loss of profits or data, arising from your use of, or inability to use, this Site. This limitation does not apply to damages caused by gross negligence or willful misconduct.
                                </>
                            )}
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>{isSk ? "5. Odkazy na webové stránky tretích strán" : "5. Links to Third-Party Websites"}</h2>
                        <p className={styles.text}>
                            {isSk ? (
                                <>
                                    Naša Stránka môže obsahovať odkazy na webové stránky tretích strán. Tieto odkazy sú poskytované len pre vaše pohodlie. Nemáme žiadnu kontrolu nad obsahom týchto stránok a neprijímame žiadnu zodpovednosť za ne ani za akúkoľvek stratu alebo škodu, ktorá môže vzniknúť z ich používania.
                                </>
                            ) : (
                                <>
                                    Our Site may contain links to third-party websites. These links are provided for your convenience only. We have no control over the content of these sites and accept no responsibility for them or for any loss or damage that may arise from your use of them.
                                </>
                            )}
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>{isSk ? "6. Rozhodné právo a súdna právomoc" : "6. Governing Law and Jurisdiction"}</h2>
                        <p className={styles.text}>
                            {isSk ? (
                                <>
                                    Tieto Podmienky a akýkoľvek spor z nich vyplývajúci alebo s nimi súvisiaci sa riadia a vykladajú v súlade s právnymi predpismi Slovenskej republiky.
                                </>
                            ) : (
                                <>
                                    These Terms and any dispute arising out of or in connection with them shall be governed by and construed in accordance with the laws of the Slovak Republic.
                                </>
                            )}
                        </p>
                        <p className={styles.text}>
                            {isSk ? (
                                <>
                                    Súhlasíte s tým, že príslušné súdy so sídlom v Banskej Bystrici, Slovenská republika, budú mať výhradnú právomoc na riešenie akéhokoľvek sporu, ktorý môže vzniknúť z týchto Podmienok alebo v súvislosti s nimi.
                                </>
                            ) : (
                                <>
                                    You agree that the competent courts located in Banská Bystrica, Slovak Republic, shall have exclusive jurisdiction to settle any dispute which may arise out of or in connection with these Terms.
                                </>
                            )}
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>{isSk ? "7. Zmeny" : "7. Amendments"}</h2>
                        <p className={styles.text}>
                            {isSk ? (
                                <>
                                    Vyhradzujeme si právo kedykoľvek zmeniť tieto Podmienky. Používateľov upozorníme na akékoľvek zmeny zverejnením nových Podmienok na tejto Stránke. Vaše ďalšie používanie Stránky po takýchto zmenách predstavuje váš súhlas s novými Podmienkami.
                                </>
                            ) : (
                                <>
                                    We reserve the right to amend these Terms at any time. We will notify users of any changes by posting the new Terms on this Site. Your continued use of the Site after such changes constitutes your acceptance of the new Terms.
                                </>
                            )}
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>{isSk ? "8. Kontaktné informácie" : "8. Contact Information"}</h2>
                        <p className={styles.text}>
                            {isSk ? "Spoločnosť: Engineers-incubator s.r.o." : "Company: Engineers-incubator s.r.o."}<br />
                            {isSk ? "Adresa: Horná 67, 974 01 Banská Bystrica, Slovenská republika" : "Address: Horná 67, 974 01 Banská Bystrica, Slovenská republika"}<br />
                            {isSk ? "Email:" : "Email:"} <a href="mailto:hello@euhub.sk" className={styles.link}>hello@euhub.sk</a>
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
