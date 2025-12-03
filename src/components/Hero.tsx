import styles from './Hero.module.css';

export default function Hero({ dict }: { dict: any }) {
    return (
        <section className={styles.hero}>
            <div className={styles.glow} />
            <div className="container">
                <div className={styles.content}>
                    <h1 className={`${styles.title} text-gradient`}>
                        {dict.title}
                    </h1>
                    <p className={styles.subtitle}>
                        {dict.subtitle}
                    </p>
                    <button className="btn btn-primary">
                        {dict.cta}
                    </button>
                </div>
            </div>
        </section>
    );
}
