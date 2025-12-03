import styles from './Services.module.css';

export default function Services({ dict }: { dict: any }) {
    return (
        <section className={`${styles.section} section-padding`}>
            <div className="container">
                <h2 className={styles.title}>{dict.title}</h2>

                <div className={styles.grid}>
                    {dict.items.map((item: any, index: number) => (
                        <div key={index} className={`${styles.card} glass`}>
                            <h3 className={styles.cardTitle}>{item.title}</h3>
                            <p className={styles.cardDesc}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
