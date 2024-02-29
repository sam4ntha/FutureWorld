import styles from './Hero.module.css';

export const Hero = () => {
    console.log(styles)
    return(
        <section className={styles.Hero}>
            <h1>Future World</h1>
            <h2>Empowering your tomorrow, today!</h2>
        </section>
    )
}