'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export const Navbar = ({ lang, dict }: { lang: string, dict: any }) => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => setIsOpen(!isOpen);

    // Helper to switch language in URL
    const switchLang = (newLang: string) => {
        if (!pathname) return `/${newLang}`;
        const segments = pathname.split('/');
        segments[1] = newLang;
        return segments.join('/');
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-[var(--card-border)]">
            <div className="container mx-auto px-4 h-[var(--header-height)] flex items-center justify-between">
                {/* Logo */}
                <Link href={`/${lang}`} className="text-2xl font-bold tracking-tight">
                    EuHub<span className="text-[var(--primary)]">.ai</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <Link href={`/${lang}#services`} className="text-sm font-medium hover:text-[var(--primary)] transition-colors">
                        {dict.nav?.services || 'Services'}
                    </Link>
                    <Link href={`/${lang}#about`} className="text-sm font-medium hover:text-[var(--primary)] transition-colors">
                        {dict.nav?.about || 'About'}
                    </Link>
                    <Link href={`/${lang}#contact`} className="btn btn-primary text-sm px-6 py-2 rounded-full">
                        {dict.nav?.contact || 'Contact'}
                    </Link>

                    {/* Language Switcher */}
                    <div className="flex items-center gap-2 ml-4 border-l border-[var(--card-border)] pl-4">
                        <Link
                            href={switchLang('en')}
                            className={`text-xs font-bold ${lang === 'en' ? 'text-[var(--primary)]' : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)]'}`}
                        >
                            EN
                        </Link>
                        <span className="text-[var(--muted-foreground)]">/</span>
                        <Link
                            href={switchLang('sk')}
                            className={`text-xs font-bold ${lang === 'sk' ? 'text-[var(--primary)]' : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)]'}`}
                        >
                            SK
                        </Link>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden p-2" onClick={toggleMenu}>
                    <div className="w-6 h-0.5 bg-current mb-1.5"></div>
                    <div className="w-6 h-0.5 bg-current mb-1.5"></div>
                    <div className="w-6 h-0.5 bg-current"></div>
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden glass border-t border-[var(--card-border)] p-4 absolute w-full">
                    <div className="flex flex-col gap-4">
                        <Link href={`/${lang}#services`} onClick={toggleMenu} className="text-lg font-medium">
                            {dict.nav?.services || 'Services'}
                        </Link>
                        <Link href={`/${lang}#about`} onClick={toggleMenu} className="text-lg font-medium">
                            {dict.nav?.about || 'About'}
                        </Link>
                        <Link href={`/${lang}#contact`} onClick={toggleMenu} className="text-lg font-medium text-[var(--primary)]">
                            {dict.nav?.contact || 'Contact'}
                        </Link>
                        <div className="flex gap-4 mt-4 pt-4 border-t border-[var(--card-border)]">
                            <Link href={switchLang('en')} className={`font-bold ${lang === 'en' ? 'text-[var(--primary)]' : ''}`}>EN</Link>
                            <Link href={switchLang('sk')} className={`font-bold ${lang === 'sk' ? 'text-[var(--primary)]' : ''}`}>SK</Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};
