import { getDictionary } from "@/get-dictionary";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Services from "@/components/Services";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <main className="min-h-screen flex flex-col">
      <Header dict={dict} lang={lang} />
      <Hero dict={dict.hero} />
      <Problem dict={dict.problem} />
      <Solution dict={dict.solution} />
      <section id="services">
        <Services dict={dict.services} />
      </section>
      <section id="about">
        <About dict={dict.about} />
      </section>
      <CTA dict={dict.cta} />
      <Footer lang={lang} />
    </main>
  );
}
