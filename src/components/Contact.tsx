import { GlassCard } from './GlassCard';

export const Contact = ({ lang, dict }: { lang: string, dict: any }) => {
    return (
        <section id="contact" className="section-padding">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            {dict.cta.title}
                        </h2>
                        <p className="text-[var(--muted-foreground)] text-lg mb-8">
                            {lang === 'sk'
                                ? 'Nečakajte, kým vás predbehne konkurencia. Získajte audit vašej infraštruktúry a zistite, kde strácate peniaze.'
                                : 'Don\'t let the competition outpace you. Get an audit of your infrastructure and find out where you are losing money.'}
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-[rgba(20,184,166,0.1)] flex items-center justify-center text-[var(--accent)]">
                                    ✉
                                </div>
                                <div>
                                    <div className="font-bold">Email</div>
                                    <a href="mailto:hello@euhub-ai.com" className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors">hello@euhub-ai.com</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-[rgba(20,184,166,0.1)] flex items-center justify-center text-[var(--accent)]">
                                    📍
                                </div>
                                <div>
                                    <div className="font-bold">{lang === 'sk' ? 'Lokácia' : 'Location'}</div>
                                    <span className="text-[var(--muted-foreground)]">Bratislava, Slovakia (EU)</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <GlassCard className="border-[var(--accent)] border-opacity-30">
                        <h3 className="text-xl font-bold mb-4">
                            {lang === 'sk' ? 'Získajte Audit Zadarmo' : 'Get a Free Audit'}
                        </h3>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-1 text-[var(--muted-foreground)]">
                                    {lang === 'sk' ? 'Meno' : 'Name'}
                                </label>
                                <input type="text" className="w-full px-4 py-2 rounded-lg bg-[rgba(0,0,0,0.2)] border border-[var(--card-border)] focus:border-[var(--primary)] focus:outline-none transition-colors" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1 text-[var(--muted-foreground)]">
                                    Email
                                </label>
                                <input type="email" className="w-full px-4 py-2 rounded-lg bg-[rgba(0,0,0,0.2)] border border-[var(--card-border)] focus:border-[var(--primary)] focus:outline-none transition-colors" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1 text-[var(--muted-foreground)]">
                                    {lang === 'sk' ? 'Správa' : 'Message'}
                                </label>
                                <textarea rows={4} className="w-full px-4 py-2 rounded-lg bg-[rgba(0,0,0,0.2)] border border-[var(--card-border)] focus:border-[var(--primary)] focus:outline-none transition-colors"></textarea>
                            </div>
                            <button type="submit" className="w-full btn btn-primary">
                                {dict.cta.button}
                            </button>
                        </form>
                    </GlassCard>
                </div>
            </div>
        </section>
    );
};
