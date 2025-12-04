import Link from 'next/link';

export const Footer = ({ lang, dict }: { lang: string, dict: any }) => {
    return (
        <footer className="border-t border-[var(--card-border)] bg-[var(--background)] pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <Link href={`/${lang}`} className="text-2xl font-bold tracking-tight mb-4 block">
                            EuHub<span className="text-[var(--primary)]">.ai</span>
                        </Link>
                        <p className="text-[var(--muted-foreground)] max-w-md">
                            {dict.footer?.tagline || "Your Strategic AI Implementation Partner in Central Europe."}
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">{dict.nav?.services || 'Services'}</h4>
                        <ul className="space-y-2 text-[var(--muted-foreground)]">
                            <li><Link href="#" className="hover:text-[var(--primary)]">AI Audit</Link></li>
                            <li><Link href="#" className="hover:text-[var(--primary)]">Automation</Link></li>
                            <li><Link href="#" className="hover:text-[var(--primary)]">Compliance</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">{dict.nav?.contact || 'Contact'}</h4>
                        <ul className="space-y-2 text-[var(--muted-foreground)]">
                            <li>Bratislava, Slovakia</li>
                            <li><a href="mailto:hello@euhub-ai.com" className="hover:text-[var(--primary)]">hello@euhub-ai.com</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-[var(--card-border)] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[var(--muted-foreground)]">
                    <p>&copy; {new Date().getFullYear()} EuHub AI. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-[var(--foreground)]">Privacy Policy</Link>
                        <Link href="#" className="hover:text-[var(--foreground)]">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
